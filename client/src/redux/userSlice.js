import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "./API";
import toast from "react-hot-toast";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.error = null;
      state.isLoggedIn = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.user = null;
      state.error = null;
      state.isLoggedIn = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isLoggedIn = true;
      // console.log(action.payload, "action.payload");
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    });
  },
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await API.post(
        "/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data } = response;
      if (data?.success) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await API.post(
        "/user/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data } = response;
      if (data?.success) {
        toast.success(data?.message);
        localStorage.setItem("token", data?.token);
      }
      return data;
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);



export const { logOut, clearError } = authSlice.actions;
export default authSlice.reducer;

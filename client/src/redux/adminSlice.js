import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "./API";
import toast from "react-hot-toast";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    error: null,
    isAdmin: false,
  },
  reducers: {
    AdminlogOut: (state) => {
      state.admin = null;
      state.error = null;
      state.isAdmin = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state, action) => {
      state.admin = null;
      state.error = null;
      state.isAdmin = false;
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.admin = action.payload;
      state.error = null;
      state.isAdmin = true;
    });
    builder.addCase(adminLogin.rejected, (state, action) => {
      state.admin = null;
      state.error = action.payload;
      state.isAdmin = false;
    });
  },
});

export const adminLogin = createAsyncThunk(
  "admin/adminLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await API.post(
        "/admin/login",
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
        // store token in local storage
        localStorage.setItem("token", data?.token);
      }
      return data;
    } catch (error) {
      console.log(error?.response?.data?.message);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const { AdminlogOut, clearError } = adminSlice.actions;
export default adminSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "./API";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    error: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {},
});

// export const userProfile=

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
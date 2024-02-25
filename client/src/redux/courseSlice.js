import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "./API";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    updateCourseDetail: (state, action) => {
      state.courses = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(getAllCourses.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

// get the courses
export const getAllCourses = createAsyncThunk(
  "/getCourses",
  async ({ _ }, { rejectWithValue }) => {
    try {
      const response = await API.get("/courses/get-all-courses");
      const { data } = response;
      return data;
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export default courseSlice.reducer;
export const { clearError, updateCourseDetail } = courseSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../../api/api";

export const getAssignments = createAsyncThunk(
  "/assignments/list",
  async () => {
    try {
      const response = await baseApi.get("/assignments/list");

      console.log(response.data);

      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const assignmentSlice = createSlice({
  name: "assignment",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAssignments.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAssignments.fulfilled, (state, action) => {
      state.status = "idle";
      state.list = action.payload;
    });
  },
});

export default assignmentSlice.reducer;

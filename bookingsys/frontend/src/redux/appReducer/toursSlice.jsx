import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import { getAllTours } from '../../api/api'; 

// Async thunk for fetching tours
export const fetchTours = createAsyncThunk("tours/fetchTours", async () => {
  const response = await getAllTours();
  console.log(" Here response of tours are ", response.data);
  return response.data; // Assuming response has a `data` field
});

const toursSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default toursSlice.reducer;

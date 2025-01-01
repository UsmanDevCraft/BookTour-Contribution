// export default toursSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTours } from "../../api/api";

// Async thunk for fetching tours with filters
export const searchTours = createAsyncThunk(
  "tours/searchTours",
  async ({ destination, price, date, endDate }) => {
    const response = await getAllTours(destination, price, date, endDate);
    return response.data; // Assuming response has a `data` field
  }
);

const toursSlice = createSlice({
  name: "toursSearch",
  initialState: {
    tours: [],
    loading: false,
    error: null,
    filters: {
      destination: "",
      price: "",
      date: "",
      endDate: "",
    },
    resultDisplay: "",
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.tours = [];
      })
      .addCase(searchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.tours = action.payload;
        const { destination, price, date, endDate } = state.filters;
        state.resultDisplay = [
          destination || "",
          price || "",
          date || "",
          endDate || "",
        ]
          .filter(Boolean)
          .join(" ");
      })
      .addCase(searchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters } = toursSlice.actions;

export default toursSlice.reducer;

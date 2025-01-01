import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteBooking } from "../../api/api";

// Thunk for deleting booking
export const deleteBookingThunk = createAsyncThunk(
  "searchDetails/deleteBooking",
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await deleteBooking(bookingId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const searchDetailSlice = createSlice({
  name: "searchDetails",
  initialState: {
    isModalOpen: false,
    tourDays: [],
    tourName: "",
    bookings: [], // For storing booking data if needed
    loading: false,
    error: null,
  },
  reducers: {
    setModalState: (state, action) => {
      state.isModalOpen = action.payload.isOpen;
      state.tourDays = action.payload.tourDays || [];
      state.tourName = action.payload.tourName || "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteBookingThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBookingThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== action.meta.arg
        );
      })
      .addCase(deleteBookingThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setModalState } = searchDetailSlice.actions;
export default searchDetailSlice.reducer;

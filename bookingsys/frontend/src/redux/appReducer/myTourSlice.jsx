import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBookingByEmail } from '../../api/api'; 

// Async thunk for fetching tours
export const fetchTours = createAsyncThunk('myTours/fetchTours', async () => {
  console.log("Here load request received in fetch tours in myTours Slice");
  const response = await getBookingByEmail();

  console.log(" Here data return check here tours details ", response.data);
  return response.data; // Assuming the API returns { data: [...] }
});

// Redux slice for myTours state
const myToursSlice = createSlice({
  name: 'myTours',
  initialState: {
    tours: [],
    status: 'idle', // "idle", "loading", "succeeded", "failed"
    error: null,
  },
  reducers: {
    // If you need to handle manual actions (e.g., deleting tours), add them here
    deleteTour: (state, action) => {
      state.tours = state.tours.filter(tour => tour.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tours = action.payload; // Assuming the payload is an array of tours
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the actions
export const { deleteTour } = myToursSlice.actions;

// Export the reducer to add to the store
export default myToursSlice.reducer;

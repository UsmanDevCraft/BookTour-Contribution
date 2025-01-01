// actions/bookingActions.js
export const CREATE_BOOKING_REQUEST = "CREATE_BOOKING_REQUEST";
export const CREATE_BOOKING_SUCCESS = "CREATE_BOOKING_SUCCESS";
export const CREATE_BOOKING_FAILURE = "CREATE_BOOKING_FAILURE";

export const UPDATE_BOOKING_REQUEST = "UPDATE_BOOKING_REQUEST";
export const UPDATE_BOOKING_SUCCESS = "UPDATE_BOOKING_SUCCESS";
export const UPDATE_BOOKING_FAILURE = "UPDATE_BOOKING_FAILURE";


import { createBooking as apiCreateBooking, updateBooking as apiUpdateBooking } from "../../api/api";

export const createBooking = (formData, tourId) => async (dispatch) => {
  dispatch({ type: CREATE_BOOKING_REQUEST });
  try {
    const response = await apiCreateBooking(formData, tourId);
    dispatch({ type: CREATE_BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_BOOKING_FAILURE, payload: error.message });
  }
};

export const updateBooking = (formData, tourId, bookingId) => async (dispatch) => {
  dispatch({ type: UPDATE_BOOKING_REQUEST });
  try {
    const response = await apiUpdateBooking(formData, tourId, bookingId);
    dispatch({ type: UPDATE_BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_BOOKING_FAILURE, payload: error.message });
  }
};
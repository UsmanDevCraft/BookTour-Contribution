// reducers/bookingReducer.js
import {
    CREATE_BOOKING_REQUEST,
    CREATE_BOOKING_SUCCESS,
    CREATE_BOOKING_FAILURE,
    UPDATE_BOOKING_REQUEST,
    UPDATE_BOOKING_SUCCESS,
    UPDATE_BOOKING_FAILURE,
  } from "../actions/bookingActions";
  
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  export const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_BOOKING_REQUEST:
      case UPDATE_BOOKING_REQUEST:
        return { ...state, loading: true, error: null };
      case CREATE_BOOKING_SUCCESS:
      case UPDATE_BOOKING_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case CREATE_BOOKING_FAILURE:
      case UPDATE_BOOKING_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
import { configureStore } from "@reduxjs/toolkit";
import myToursReducer from "./appReducer/myTourSlice";

import toursReducer from "./appReducer/toursSlice";
import searchToursReducer from "./appReducer/searchToursSlice";
// import thunk from "redux-thunk";
import { bookingReducer } from "./appReducer/bookingReducer";
import searchDetailReducer from "./appReducer/searchDetailSlice";
export const store = configureStore({
  reducer: {
    myTours: myToursReducer,
    tours: toursReducer,
    searchTours: searchToursReducer,
    booking: bookingReducer,
    searchDetails: searchDetailReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

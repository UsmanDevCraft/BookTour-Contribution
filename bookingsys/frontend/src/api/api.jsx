import axios from "axios";
import { baseUrl } from "./baseurl";
export const getAllTours = async (destination, price, startDate, endDate) => {
  try {
    let url = `${baseUrl}/tours`;

    if (destination != null) {
      url = url + `?city=${destination}`;
    }
    if (price != null) {
      if (destination != null) {
        url = url + `&price=${encodeURIComponent(price)}`;
      } else {
        url = url + `?price=${encodeURIComponent(price)}`;
      }
    }

    if (startDate != null && endDate != null && startDate && endDate) {
      if (destination != null) {
        url =
          url +
          `&start_date=${encodeURIComponent(
            startDate
          )}&end_date=${encodeURIComponent(endDate)}`;
      } else if (price != null) {
        url =
          url +
          `&start_date=${encodeURIComponent(
            startDate
          )}&end_date=${encodeURIComponent(endDate)}`;
      } else {
        url =
          url +
          `?start_date=${encodeURIComponent(
            startDate
          )}&end_date=${encodeURIComponent(endDate)}`;
      }
    }
    console.log(" Here URL for get Tours ", url);
    // const response = await axios.get(`${baseUrl}/tours?city=${destination}&price${price}`, {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response :", response);
    if (response) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("No Data found :", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

export const createBooking = async (formData, tourId) => {
  try {
    console.log("Here form data are ", JSON.stringify(formData));
    console.log("Tour Id are  ", tourId);
    const response = await axios.post(
      `${baseUrl}/bookings`,
      {
        tour_id: tourId,
        user_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        adults: parseInt(formData.numberOfAdults, 10),
        children: parseInt(formData.numberOfChildren, 10),
        payment_method: formData.paymentMethod,
        booking_date: new Date().toISOString(),
        status: "CONFIRMED",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },

        // # Add CORS headers explicitly for this route

        withCredentials: false,
      }
    );

    console.log("Response :", response);
    if (response) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("Error uploading of Document:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

export const getBookingByEmail = async () => {
  try {
    const email = localStorage.getItem("useremail");
    console.log(" Email from local storage ", email);
    const response = await axios.get(
      `${baseUrl}/bookings/search?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      }
    );

    console.log("Response of tours are :", response);
    if (response) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("Error finding tours :", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

export const updateBooking = async (formData, tourId, bookingId) => {
  try {
    console.log("Here form data are ", JSON.stringify(formData));
    console.log("Tour Id are  ", tourId);
    console.log("Booking Id going to update are  ", bookingId);
    const response = await axios.put(
      `${baseUrl}/bookings/${bookingId}`,
      {
        id: bookingId,
        tour_id: tourId,
        user_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        adults: parseInt(formData.numberOfAdults, 10),
        children: parseInt(formData.numberOfChildren, 10),
        payment_method: formData.paymentMethod,
        booking_date: "2025-01-14T15:30:00Z",
        status: "CONFIRMED",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response :", response);
    if (response) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("Error uploading of Document:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

export const deleteBooking = async (bookingId) => {
  try {
    console.log("Booking Id going to update are  ", bookingId);
    const response = await axios.delete(`${baseUrl}/bookings/${bookingId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response of delete booking:", response);
    if (response) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("Error delete of booking:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

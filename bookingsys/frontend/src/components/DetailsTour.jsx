import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import WeatherCards from "./WeatherCards";
import { IoCheckmarkCircle } from "react-icons/io5";

const DetailsTour = () => {
  const location = useLocation();
  const {
    tourId,
    price,
    description,
    stayTime,
    img,
    title,
    city,
    departureLocation,
    returnDetails,
    myTour,
  } = location.state || {};

  const iconStyle = {
    padding: "5px",
    backgroundColor: "#F4F4F4",
    borderRadius: "50%",
    color: "#75778B",
    fontSize: "1.7rem",
    display: "inline-block",
    lineHeight: "1.5",
  };

  const imageStyleLeft = {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    borderRadius: "12px",
  };

  const imageStyleRight = {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    borderRadius: "12px",
  };

  const containerStyle = {
    display: "flex",
    width: "100%",
    margin: "40px auto",
    justifyContent: "center",
    alignItems: "flex-start", // Aligns items from the top
    gap: "20px",
  };

  const leftStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const rightStyle = {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    alignItems: "flex-start", // Aligns items from the top of the container
  };

  const navigate = useNavigate();
  const navigateBookNow = () => {
    console.log(" Tour Id in Details Tour are ", tourId);
    navigate("/booknow", { state: { tourId } });
  };

  useEffect(() => {
    console.log("Here Departure details are ", departureLocation);
    console.log("Here returnDetails details are ", returnDetails);

    //fetchData();
  }, []);

  return (
    <div className="box">
      <div className="pb-5">
        <h1 className="mt-5" style={{ color: "#202445" }}>
          {title}
        </h1>

        <div className="d-flex gap-5">
          <p
            className="d-flex align-items-center gap-2"
            style={{ color: "#797C9A" }}
          >
            <CiLocationOn style={iconStyle} />
            {city ? city : title}
          </p>
          <p
            className="d-flex align-items-center gap-2"
            style={{ color: "#797C9A" }}
          >
            <BsCurrencyDollar style={iconStyle} />
            {price}
          </p>
          <p
            className="d-flex align-items-center gap-2"
            style={{ color: "#797C9A" }}
          >
            <LuClock4 style={iconStyle} />
            {stayTime}
          </p>
        </div>

        <div style={containerStyle}>
          <div style={leftStyle}>
            <img
              src="/details_img_1.png"
              alt="Left Image"
              style={imageStyleLeft}
            />
          </div>
          <div style={rightStyle}>
            <img
              src="/details_img_2.png"
              alt="Right Image 1"
              style={imageStyleRight}
            />
            <img
              src="/details_img_4.png"
              alt="Right Image 2"
              style={imageStyleRight}
            />
            <img
              src="/details_img_3.png"
              alt="Right Image 3"
              style={imageStyleRight}
            />
            <img
              src="/details_img_5.png"
              alt="Right Image 4"
              style={imageStyleRight}
            />
          </div>
        </div>

        <div>
          <p
            className="text-center"
            style={{ padding: "0px 10rem", color: "#404040" }}
          >
            The Pérez Art Museum Miami —officially known as the Jorge M. Pérez
            Art Museum of Miami-Dade County—is a contemporary art museum that
            relocated in 2013 to the Museum Park in Downtown Miami, Florida.{" "}
          </p>
          <p
            className="text-center"
            style={{ padding: "0px 10rem", color: "#404040" }}
          >
            Founded in 1984 as the Center for the Fine Arts, it became known as
            the Miami Art Museum from 1996 until it was renamed in 2013 upon the
            opening its new building designed by Herzog & de Meuron at 1103
            Biscayne Boulevard.
          </p>
          <p
            className="text-center"
            style={{ padding: "0px 10rem", color: "#404040" }}
          >
            PAMM, along with the $275 million Phillip and Patricia Frost Museum
            of Science and a city park which are being built in the area with
            completion in 2017, is part of the 20-acre Museum Park.
          </p>
        </div>

        <div>
          <h1 className="mt-3 mb-3" style={{ color: "#202445" }}>
            What’s included
          </h1>

          <div className="d-flex justify-content-between">
            <p style={{ color: "#202020", fontWeight: 600, width: "10rem" }}>
              Destination
            </p>
            <p style={{ color: "#202020", fontWeight: 400, width: "60rem" }}>
              {city ? city : "Miami"}
            </p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p style={{ color: "#202020", fontWeight: 600, width: "10rem" }}>
              Departure Location
            </p>
            <p style={{ color: "#202020", fontWeight: 400, width: "60rem" }}>
              {departureLocation
                ? departureLocation
                : "2000 Brush St, Detroit, MI 48226, United States"}
            </p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p style={{ color: "#202020", fontWeight: 600, width: "10rem" }}>
              Return
            </p>
            <p style={{ color: "#202020", fontWeight: 400, width: "60rem" }}>
              {returnDetails ? returnDetails : "7:00 PM on Day 3"}
            </p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p style={{ color: "#202020", fontWeight: 600, width: "10rem" }}>
              Facilities
            </p>
            <p style={{ color: "#202020", fontWeight: 400, width: "60rem" }}>
              {city ? (
                city
              ) : (
                <div className="d-flex gap-5">
                  <div>
                    <p
                      className="d-flex align-items-center gap-3"
                      style={{ color: "#202020" }}
                    >
                      <IoCheckmarkCircle
                        style={{ color: "#F16B51", backgroundColor: "#ffffff" }}
                      />
                      Basic first aid kit
                    </p>
                    <p
                      className="d-flex align-items-center gap-3"
                      style={{ color: "#202020" }}
                    >
                      <IoCheckmarkCircle
                        style={{ color: "#F16B51", backgroundColor: "#ffffff" }}
                      />
                      Fuel Expense
                    </p>
                    <p
                      className="d-flex align-items-center gap-3"
                      style={{ color: "#202020" }}
                    >
                      <IoCheckmarkCircle
                        style={{ color: "#F16B51", backgroundColor: "#ffffff" }}
                      />
                      Detail Guided Maps
                    </p>
                  </div>
                  <div>
                    <p
                      className="d-flex align-items-center gap-3"
                      style={{ color: "#202020" }}
                    >
                      <IoCheckmarkCircle
                        style={{ color: "#F16B51", backgroundColor: "#ffffff" }}
                      />
                      Comfortable Private Booked Transport
                    </p>
                    <p
                      className="d-flex align-items-center gap-3"
                      style={{ color: "#202020" }}
                    >
                      <IoCheckmarkCircle
                        style={{ color: "#F16B51", backgroundColor: "#ffffff" }}
                      />
                      Mess Tent, Kitchen Utensils, and Cook
                    </p>
                    <p
                      className="d-flex align-items-center gap-3"
                      style={{ color: "#202020" }}
                    >
                      <IoCheckmarkCircle
                        style={{ color: "#F16B51", backgroundColor: "#ffffff" }}
                      />
                      Waterproof Tents on twin/triple Sharing
                    </p>
                  </div>
                </div>
              )}
            </p>
          </div>
          <hr />
        </div>

        <div>
          <h1 className="mt-5 mb-3" style={{ color: "#202445" }}>
            Itinerary Schedule
          </h1>

          <div>
            <WeatherCards />
          </div>

          {myTour ? null : (
            <div className="mt-5 d-flex justify-content-center">
              <button
                type="button"
                style={{
                  backgroundColor: "#f16b51",
                  padding: "0.7rem 8rem",
                  color: "#ffffff",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: 600,
                }}
                onClick={navigateBookNow}
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsTour;

import React, { useState } from "react";
import Navbar from "./Navbar";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar";
import dayjs from "dayjs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const ExploreMore = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("Choose Here");
  // const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("Choose Here");
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isEditingCity, setIsEditingCity] = useState(false);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDatePrev, setSelectedDatePrev] = useState("");

  // Toggle calendar visibility
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  // Function to update selected date from the current month
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // setIsCalendarOpen(false);
  };

  // Function to update selected date from the previous month
  const handleDateSelectPrev = (date) => {
    setSelectedDatePrev(date);
    // setIsCalendarOpen(false);
  };

  // Format both selected dates to display day and month only (e.g., "26 Mar")
  const formatDate = (date) => {
    return date ? dayjs(date).format("DD MMM") : "";
  };

  const cardStyles = {
    width: "65rem",
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: " 0.5rem 2rem",
    height: "9rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const cardContentStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const separatorStyles = {
    height: "90px",
    width: "2px",
    backgroundColor: "#EBEBEB",
    margin: "0 1rem",
  };

  const popularSearchSectionStyles = {
    width: "65rem",
    margin: "80px auto",
    padding: "2rem",
    textAlign: "center",
  };

  const buttonRowStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };

  const buttonStyles = {
    flex: "1",
    padding: "3px 1px",
    margin: "0 10px",
    backgroundColor: "#FFFFFF",
    border: "solid 1px #E1E1E1",
    borderRadius: "12px",
    cursor: "pointer",
    textAlign: "center",
    color: "#797C9A",
  };

  // Dropdown styles
  const dropdownMenuStyles = {
    position: "absolute",
    top: "145%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    border: "1px solid #E1E1E1",
    borderRadius: "12px",
    width: "13rem",
    display: isDropdownOpen ? "block" : "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const calendarDropdownStyles = {
    position: "absolute",
    zIndex: 100,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "15px",
    gap: "10px",
    display: "flex",
    left: "50%",
    top: "9em",
    transform: "translateX(-50%)",
  };

  const handlePriceSelect = (price) => {
    setSelectedPriceRange(price);
    setIsDropdownOpen(false);
  };

  const navigate = useNavigate();
  // Determine if button should be enabled
  const isButtonDisabled =
    (selectedPriceRange === "Choose Here" || !selectedPriceRange) &&
    !selectedCity &&
    !selectedDate &&
    !selectedDatePrev;
  const navigateSearchScreen = () => {
    console.log("Here selected date are ", selectedDate);
    console.log("Here selected Date Prev are ", selectedDatePrev);

    navigate("/searchtour", {
      state: {
        destination: selectedCity,
        date: selectedDatePrev,
        endDate: selectedDate,
        price:
          selectedPriceRange.trim() === "Choose Here"
            ? null
            : selectedPriceRange,
      },
    });
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const handleCityInputChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleCityInputBlur = () => {
    setIsEditingCity(false);
  };

  return (
    <div className="box">
      <div className="card cardStyles" style={cardStyles}>
        <div className="card-body">
          <div style={cardContentStyles}>
            <div>
              <h6
                className="d-flex gap-2 align-items-center"
                style={{ marginLeft: "-2em", color: "#202445" }}
              >
                <CiLocationOn
                  style={{
                    padding: "5px",
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    color: "#75778B",
                    fontSize: "2rem",
                    display: "inline-block",
                    lineHeight: "1.5",
                  }}
                />
                Location
              </h6>
              {/* <p style={{ color: "#999999" }}>{selectedCity}</p> */}
              <input
                type="text"
                value={selectedCity}
                placeholder="Where you want to go?"
                onChange={(e) => setSelectedCity(e.target.value)}
                onFocus={() => setSelectedCity("")}
                style={{
                  color: "#999999",
                  // border: "1px solid #E1E1E1",
                  border: "none",
                  borderRadius: "8px",
                  padding: "5px 10px",
                  outline: "none",
                  width: "200px",
                }}
              />
            </div>

            <div style={separatorStyles}></div>

            <div>
              <h6
                className="d-flex gap-2 align-items-center"
                style={{ marginLeft: "-2em", color: "#202445" }}
              >
                <SlCalender
                  style={{
                    padding: "5px",
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    color: "#75778B",
                    fontSize: "1.7rem",
                    display: "inline-block",
                    lineHeight: "1.5",
                  }}
                />
                Choose Date
              </h6>
              <p style={{ color: "#999999" }} onClick={toggleCalendar}>
                {selectedDatePrev && selectedDate ? (
                  <p>
                    {formatDate(selectedDate)} -{formatDate(selectedDatePrev)}
                    {isCalendarOpen ? (
                      <RiArrowDropUpLine className="fs-3" />
                    ) : (
                      <RiArrowDropDownLine className="fs-3" />
                    )}
                  </p>
                ) : (
                  <p>
                    Choose Here
                    {isCalendarOpen ? (
                      <RiArrowDropUpLine className="fs-3" />
                    ) : (
                      <RiArrowDropDownLine className="fs-3" />
                    )}
                  </p>
                )}
                {/* Show selected date range in format "DD MMM - DD MMM" */}
              </p>
              {isCalendarOpen && (
                <div className="d-flex" style={calendarDropdownStyles}>
                  <Calendar
                    handleDateSelect={handleDateSelect} // Handler for current month
                    handleDateSelectPrev={handleDateSelectPrev} // Handler for previous month
                  />
                </div>
              )}
            </div>

            <div style={separatorStyles}></div>

            <div className="dropdown" style={{ position: "relative" }}>
              <h6
                className="d-flex gap-2 align-items-center"
                style={{ marginLeft: "-2em", color: "#202445" }}
              >
                <BsCurrencyDollar
                  style={{
                    padding: "5px",
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    color: "#75778B",
                    fontSize: "1.7rem",
                    display: "inline-block",
                    lineHeight: "1.5",
                  }}
                />
                Price Range
              </h6>
              <p
                style={{
                  color: "#999999",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5em",
                }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedPriceRange}
                {isDropdownOpen ? (
                  <RiArrowDropUpLine className="fs-3" />
                ) : (
                  <RiArrowDropDownLine className="fs-3" />
                )}
              </p>
              <ul className="dropdown-menu" style={dropdownMenuStyles}>
                {[
                  "$50 - $200",
                  "$200 - $400",
                  "$400 - $500",
                  "$500 - $750",
                  "$750 - $1000",
                  "$1000 Above",
                  "Choose Here",
                ].map((priceRange) => (
                  <li key={priceRange}>
                    <p
                      className="dropdown-item"
                      style={{
                        transition: "background-color 0.3s, color 0.3s", // Smooth hover effect
                        cursor: "pointer",
                      }}
                      onClick={() => handlePriceSelect(priceRange)}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#F16B5133") ||
                        (e.target.style.color = "#505050")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent") ||
                        (e.target.style.color = "#999999")
                      }
                    >
                      {priceRange}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                style={{
                  backgroundColor: isButtonDisabled ? "#D3D3D3" : "#F16B51",
                  color: isButtonDisabled ? "#A9A9A9" : "#FFFFFF",
                  padding: "30px 15px",
                  border: "none",
                  borderRadius: "12px",
                  cursor: isButtonDisabled ? "not-allowed" : "pointer",
                }}
                disabled={isButtonDisabled}
                onClick={navigateSearchScreen}
              >
                <CiSearch
                  style={{
                    fontSize: "1.7rem",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="popsearch" style={popularSearchSectionStyles}>
        <h2 style={{ marginBottom: "30px", color: "#202445" }}>
          Popular Search
        </h2>
        <div className="childPopSrh" style={buttonRowStyles}>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Istanbul")}
          >
            Istanbul
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Dubai")}
          >
            Dubai
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Miami")}
          >
            Miami
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Chicago")}
          >
            Chicago
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Dallas")}
          >
            Dallas
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Havana")}
          >
            Havana
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Berlin")}
          >
            Berlin
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("London")}
          >
            London
          </button>
        </div>
        <div className="childPopSrh" style={buttonRowStyles}>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Ankara")}
          >
            Ankara
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Orlando")}
          >
            Orlando
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Cape Town")}
          >
            Cape Town
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Santroni")}
          >
            Santroni
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Madrid")}
          >
            Madrid
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("Lisbon")}
          >
            Lisbon
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleCitySelect("New Orleans")}
          >
            New Orleans
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;

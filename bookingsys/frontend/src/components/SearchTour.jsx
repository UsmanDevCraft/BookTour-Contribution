import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import SearchDetailCards from "./SearchDetailCards";
import { getAllTours } from "../api/api";
import { GiHamburgerMenu } from "react-icons/gi";

import { searchTours, setFilters } from "../redux/appReducer/searchToursSlice";
// import { fetchTours } from "../redux/appReducer/toursSlice";
const SearchTour = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { destination, price, date,endDate, category, userId } = location.state || {};
  const [isData, setIsData] = useState(true);
  // const [tours, setTours] = useState([]);

  const { tours, loading, resultDisplay, error } = useSelector(
    (state) => state.searchTours
  );

  // const [resultDisplay, setResultDisplay] = useState();
  let resultData = "";
  const arrayData = [
    {
      id: 1,
      title: "Pérez Art Museum Miami",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, eos. Rerum doloremque laboriosam ab ratione veritatis itaque dolor.",
      img: "/dest_test_img_1.png",
      price: "$50 - $200",
      stayTime: "3",
      city: "Miami",
    },
    {
      id: 1,
      title: "Hard Rock Stadium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, eos. Rerum doloremque laboriosam ab ratione veritatis itaque dolor.",
      img: "/dest_test_img_2.png",
      price: "$50 - $80",
      stayTime: "1",
    },
    {
      id: 1,
      title: "Matheson Hammock Park",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, eos. Rerum doloremque laboriosam ab ratione veritatis itaque dolor.",
      img: "/dest_test_img_3.png",
      price: "$50 - $100",
      stayTime: "3",
    },
    {
      id: 1,
      title: "The Wharf Miami",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, eos. Rerum doloremque laboriosam ab ratione veritatis itaque dolor.",
      img: "/dest_test_img_4.png",
      price: "$50 - $200",
      stayTime: "2",
    },
    {
      id: 1,
      title: "Miami Tower",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, eos. Rerum doloremque laboriosam ab ratione veritatis itaque dolor.",
      img: "/dest_test_img_5.png",
      price: "$30 - $200",
      stayTime: "3",
    },
    {
      id: 1,
      title: "Skyviews Miami",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, eos. Rerum doloremque laboriosam ab ratione veritatis itaque dolor.",
      img: "/dest_test_img_6.png",
      price: "$50 - $200",
      stayTime: "7",
    },
  ];

  // const fetchData = async () => {
  //   console.log("Here destination are ", destination);

  //   console.log("Here Price are ", price);

  //   console.log("Here Start Date are ", date);
  //   console.log("Here End Date are ", endDate);
  //   const data = await getAllTours(destination,price,date,endDate);
    
 
  //   resultData = destination?destination:"" + " " + price?price:"";
  //   console.log(" Here result Data are ", resultData);
  //   setResultDisplay(resultData);
  //   if (data) {
  //     console.log("Search data received ", data);

  //     setTours(data.data);

  //     if(date && endDate){
  //       console.log(" here date are ", date);
  //       // resultData = date;
  //       resultData = resultData!=null?resultData:"" + " " +date + " from " + endDate;
  //       setResultDisplay(resultData);
  //     }
     
  //   //  setResultDisplay(destination?destination:"" + " " + price?price:"" + " "+ date?date:"" + " "+ endDate?endDate:"")
  //   }else{
  //     console.log("Here data are ", data);
  //     resultData = resultData!=null?resultData:"" + " " +date + " from " + endDate;
  //     setResultDisplay(resultData);
  //    // setResultDisplay(destination?destination:"" + " " + price?price:"" + " "+ date?date:"" + " "+ endDate?endDate:"")
  //     setIsData(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);



  useEffect(() => {
    // Set filters in Redux
    dispatch(setFilters({ destination, price, date, endDate }));

    console.log("Going to get data from Redux");
    // Fetch tours based on filters
    dispatch(searchTours({ destination, price, date, endDate }));
  }, [dispatch, destination, price, date, endDate]);

  return (
    <div className="box">
      <div
        className="d-flex justify-content-between mt-5 mb-5"
      >
        <h1 style={{ color: "#202445" }}>
          Top Destinations  <span>{resultDisplay}</span>
        </h1>

        {tours && tours.length>0 ? (
          <div
            className="d-flex align-items-center gap-1"
            style={{
              fontWeight: 500,
              color: "#202445",
              border: "solid #E1E1E1 1px",
              borderRadius: "12px",
              padding: "0px 20px",
            }}
          >
            <GiHamburgerMenu />
            Filters
          </div>
        ) : null}
      </div>
      {tours && tours.length>0 ? (
      // {isData ? (
        <div
          className="d-flex justify-content-center flex-wrap gap-4 pb-5"
        >
          <div className="wrapCards">
            {tours &&
              tours.map(
              // arrayData.map(
                (
                  {
                    id,
                    title,
                    description,
                    img,
                    price,
                    duration,
                    city,
                    departure_location,
                    return_details,
                  },
                  index
                ) => (
                  <SearchDetailCards
                    key={index}
                    tourId={id}
                    title={title}
                    description={description}
                    img={img}
                    price={price}
                    stayTime={duration}
                    city={city}
                    departureLocation={departure_location}
                    returnDetails={return_details}
                  />
                )
              )}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 200px)",
          }}
        >
          <img
            src="/Search_Page_Img.svg"
            alt="Search"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              marginBottom: "1rem",
            }}
          />
          <p className="fs-2" style={{ textAlign: "center", color: "#797C9A" }}>
            Sorry, We didn’t find any tour right now <br />  {resultDisplay}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchTour;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import SearchDetailCards from "./SearchDetailCards";
import { GiHamburgerMenu } from "react-icons/gi";
import { getAllTours } from "../api/api";
// import { fetchTours } from "../store/toursSlice";

import { fetchTours } from "../redux/appReducer/toursSlice";


const Tours = () => {
  // const [tours, setTours] = useState([]);
  const dispatch = useDispatch();
  const { tours, loading, error } = useSelector((state) => state.tours);

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
  //   console.log("Here getting all tours");
  //   const data = await getAllTours();
  //   if (data) {
  //     console.log("All Tours Information ", data);
  //     setTours(data.data);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    console.log(" going to fetch from dispatch redux");

    dispatch(fetchTours());

    // console.log(" Here tours details are ", tours);
  }, [dispatch]);


  useEffect(() => {
    console.log("Tours details are: ", tours); // This will now log updated tours when the state is changed
  }, [tours]); 

  return (
    <div className="box">
      <div
        className="d-flex"
        style={{
          justifyContent: "flex-end", // Aligns child elements to the right
        }}
      >
        <div
          className="d-flex align-items-center gap-1"
          style={{
            fontWeight: 500,
            color: "#202445",
            border: "solid #E1E1E1 1px",
            borderRadius: "12px",
            padding: "10px 20px",
          }}
        >
          <GiHamburgerMenu />
          Filters
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : tours && tours.length > 0 ? 
      
      (
        <div className="d-flex justify-content-center gap-5 pb-5 mt-5">
          <div className="wrapCards">
            {tours &&
              tours.map((tour,index)=>
                // ( index) 
                
                (

           
                  <SearchDetailCards
                    key={index}
                    title={tour.name}
                    tourId={tour.id}
                    description={tour.description}
                    img={tour.img}
                    price={tour.price}
                    stayTime={tour.duration}
                    city={tour.city}
                  />
                )
              )}
          </div>
        </div>
      ) 
      : (
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
            Sorry, We didn’t find any tour right now <br />
          </p>
        </div>
      )}
    </div>
  );
};

export default Tours;

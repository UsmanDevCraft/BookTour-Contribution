import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const HomeScreen = () => {
  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#F16B51",
    color: "white",
    fontSize: "20px",
    borderRadius: "12px",
    border: "none",
    textAlign: "center",
    whiteSpace: "nowrap",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    lineHeight: "30px",
  };

  const imageContainerStyle = {
    position: "relative",
    height: "500px",
  };

  const backgroundStyle = {
    position: "absolute",
    top: "-310px",
    right: "-300px",
    width: "250%",
    height: "170%",
    backgroundImage: "url('/Vector 1.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    zIndex: "-1",
  };

  const childImageStyle = {
    position: "absolute",
    top: "-10%",
    left: "115%",
    transform: "translate(-50%, -50%)",
    zIndex: "0",
    width: "500px",
    height: "500px",
    objectFit: "cover",
  };

  const navigate = useNavigate();
  const explorePage = () => {
    navigate("/exploremore");
  };

  return (
    <div className="box">
      <div style={{ marginTop: "6rem" }}>
        <div className="row align-items-start">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold" style={{ color: "#202445" }}>
              <span className="d-inline-block">
                Explore
                <span>
                  <img
                    src="/line below blurb.png"
                    alt="textimage"
                    style={{
                      display: "block",
                      marginTop: "-0.2em",
                      width: "3.4em", // Use em units based on the font size
                    }}
                  />
                </span>
              </span>{" "}
              The New World With Tourbay
            </h1>

            <p className="lead mt-5 mb-5" style={{ color: "#303030" }}>
              No matter where in the world you want to go, we
              <br />
              can help get you there and make your tour a<br />
              stupendous memory.
            </p>

            <button
              onClick={explorePage}
              type="button"
              style={buttonStyle}
            >
              Explore Now
            </button>
          </div>

          <div className="col-md-6" style={{ marginTop: "6rem" }}>
            <div className="row h-100">
              <div className="col-md-6 mb-3">
                <div style={imageContainerStyle}>
                  <div style={backgroundStyle}></div>
                  <img
                    src="/Rectangle 8.png"
                    alt="Tour 1"
                    className="img-fluid rounded"
                    style={{
                      width: "331px",
                      height: "500px",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                  <img
                    src="/Group 2.png"
                    alt="Centered Image"
                    style={childImageStyle}
                  />
                </div>
              </div>

              <div
                className="col-md-6 d-flex flex-column gap-3 justify-content-between"
                style={{ height: "500px" }}
              >
                <img
                  src="/Rectangle 7.png"
                  alt="Tour 2"
                  className="img-fluid rounded"
                  style={{
                    width: "330px",
                    height: "240px",
                    objectFit: "cover",
                    zIndex: 1,
                  }}
                />
                <img
                  src="/Rectangle 6.png"
                  alt="Tour 3"
                  className="img-fluid rounded"
                  style={{
                    width: "331px",
                    height: "240px",
                    objectFit: "cover",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

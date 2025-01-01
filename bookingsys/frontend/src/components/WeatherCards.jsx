import React from "react";
import { GoSun } from "react-icons/go";
import { CiCloudOn } from "react-icons/ci";

const WeatherCards = () => {
  const arrayWeather = [
    {
      day: "1",
      temp: "18",
      desc: "Tours with American Sign Language. Audio description group tours. Large-print gallery notes. Lunch included.",
    },
    {
      day: "2",
      temp: "14",
      desc: "Tours with American Sign Language. Audio description group tours. Large-print gallery notes. Lunch included.",
    },
    {
      day: "3",
      temp: "17",
      desc: "Tours with American Sign Language. Audio description group tours. Large-print gallery notes. Lunch included.",
    },
  ];

  // Function to split description into bullet points
  const splitDescription = (desc) => {
    // Split the description by periods and filter out empty strings
    const sentences = desc
      .split(".")
      .filter((sentence) => sentence.trim() !== "");
    return sentences.map((sentence, index) => (
      <div key={index}>
        <span>&#8226; {sentence.trim()}.</span>
      </div>
    ));
  };

  return (
    <div className="d-flex gap-5">
      {arrayWeather &&
        arrayWeather.map(({ day, temp, desc }, index) => (
          <div
            className="card"
            style={{
              width: "27rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            key={index}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title" style={{ color: "#202445" }}>
                  Day {day}
                </h5>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  {temp <= 14 ? (
                    <CiCloudOn className="fs-3" />
                  ) : (
                    <GoSun className="fs-3" />
                  )}
                  <h5 style={{ color: "#202445" }}>
                    {temp}
                    <sup>&#x2022;</sup>C
                  </h5>
                </div>
              </div>
              <p className="card-text mt-3" style={{ color: "#404040" }}>
                {splitDescription(desc)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WeatherCards;

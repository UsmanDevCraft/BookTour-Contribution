import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ExploreMore from "./components/ExploreMore";
import SearchTour from "./components/SearchTour";
import DetailsTour from "./components/DetailsTour";
import BookNow from "./components/BookNow";
import Tours from "./components/Tours";
import MyTours from "./components/MyTours";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  const location = useLocation();

  const containerStyles = {
    width: "100%",
    height: "60vh",
    backgroundImage: "url(/ExploreMoreBGIMG.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    fontSize: "2rem",
    position: "relative",
  };

  const navbarOverlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    background: "transparent",
    zIndex: 10,
  };

  return (
    <>
      {location.pathname === "/exploremore" ? (
        <div style={containerStyles}>
          <div style={navbarOverlayStyles}>
            <Navbar />
          </div>
        </div>
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/exploremore" element={<ExploreMore />} />
        <Route path="/searchtour" element={<SearchTour />} />
        <Route path="/details" element={<DetailsTour />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/mytours" element={<MyTours />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;

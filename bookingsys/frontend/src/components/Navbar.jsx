import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
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
    visibility: "visible",
    zIndex: 100,
  };

  const navigate = useNavigate();
  const location = useLocation();

  const explorePage = () => {
    navigate("/exploremore");
  };

  return (
    <div className="box">
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link className="navbar-brand" to="/">
            <img src="/Group 131.png" alt="" />
          </Link>
          <div className="d-flex justify-content-center">
            <ul className="navbar-nav d-flex flex-row gap-5 mb-0 fs-5">
              {[
                { path: "/tours", label: "Tours" },
                { path: "/about", label: "Add Tours" },
                { path: "/mytours", label: "My Tours" },
              ].map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link
                    className={`nav-link ${
                      location.pathname === item.path ? "active-link" : ""
                    }`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            style={{
              ...buttonStyle,
              visibility: location.pathname === "/" ? "visible" : "hidden",
            }}
            type="button"
            onClick={explorePage}
          >
            Explore Now
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

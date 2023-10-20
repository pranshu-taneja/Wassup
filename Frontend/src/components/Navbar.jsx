import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";
import { logo_URL, user_icon_URL } from "../helpers/Constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

function Navbar() {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(true);
  const [isMobileView, setisMobileView] = useState(false);
  const [User, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    function findMobileView() {
      if (window.innerWidth < 768) {
        setisMobileView(true);
        setIsDropDownOpen(false);
      } else {
        setisMobileView(false);
        setIsDropDownOpen(true);
      }
    }
    findMobileView();

    window.addEventListener("resize", findMobileView);

    return () => {
      window.removeEventListener("resize", findMobileView);
    };
  }, []);

  const handleDropDown = () => {
    if (window.innerWidth <= 768) {
      setIsDropDownOpen(!isDropDownOpen);
    } else {
      navigate("/home");
    }
  };
  return (
    <div className="navComponent-container">
      <div className="navbar-container">
        <section
          onClick={() => {
            handleDropDown();
          }}
          className="primary-section"
        >
          <div className="logoIcon-Container">
            <img src={logo_URL} alt="logoIcon" className="logoIcon"></img>
            <p className="logoText">Wassup</p>
          </div>
          {!isMobileView ? null : <div className="Hamburger">&#9776;</div>}
        </section>

        <section
          style={{ display: isDropDownOpen ? "flex" : "none" }}
          className="secondary-section"
        >
          <Link to={"/home"}>HOME</Link>
          <Link to={"/chat"}>CHAT</Link>

          <Link className="userIcon-container" to={"/profile"}>
            <img
              src={User?.photoURL ? User.photoURL : user_icon_URL}
              className="userIcon"
              alt="userIcon"
            />
            <div className="userName">
              PROFILE
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Navbar;

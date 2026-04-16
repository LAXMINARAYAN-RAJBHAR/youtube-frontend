import React, { useState } from "react";
import "./navbar.css";
import ListIcon from "@mui/icons-material/List";
import MyLogo from "../../assests/mylogo.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";

const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
  const [userPic] = useState(
    "https://athenabpo.com/wp-content/uploads/2016/09/Headshot-Blank-Person-Circle-300x300.gif"
  );
  const [navbarModal, setNavbarModal] = useState(false);

  const sideNavbarFunc = () => setSideNavbarFunc(!sideNavbar);

  return (
    <div className="navbar">

      {/* LEFT */}
      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <ListIcon sx={{ color: "white" }} />
        </div>
        <Link to="/" className="navbar-logo-link">   {/* ✅ Link is display:flex now via CSS */}
          <img src={MyLogo} alt="App Logo" className="mylogo" />
          <span className="logoText">RollamRoll</span>
        </Link>
      </div>

      {/* MIDDLE */}
      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input
            type="text"
            placeholder="Search"
            className="navbar_searchBoxInput"
          />
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{ fontSize: "28px" }} />
          </div>
        </div>
        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        <VideoCameraFrontIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <NotificationsActiveIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <img
          onClick={() => setNavbarModal((prev) => !prev)}
          src={userPic}
          alt="User"
          className="navbar-right-logo"
        />
        {navbarModal && (
          <div className="navbar-modal">
            <div className="navbar-modal-option">Profile</div>
            <div className="navbar-modal-option">Logout</div>
            <div className="navbar-modal-option">Login</div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
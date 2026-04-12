import React, {useState} from "react";
import "./navbar.css";
import ListIcon from '@mui/icons-material/List';
import MyLogo from "../../assests/mylogo.png";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import SideNavbar from "../SideNavbar/sideNavbar";
const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
  const [userPic, setUserPic] =useState("https://athenabpo.com/wp-content/uploads/2016/09/Headshot-Blank-Person-Circle-300x300.gif")
  const [navbarModal,setnavbarModal] = useState(false);
  
  const handleClickModal =()=>{
    setnavbarModal(prev=>!prev);
  }
  const sideNavbarFunc=()=>{
    setSideNavbarFunc(!sideNavbar)
  }
//   const SideNavbar = ({ sideNavbar }) => {
//   return (
//     <div className={`sideNavbar ${!sideNavbar ? 'hidden' : ''}`}>
//       {/* your sidebar content */}
//     </div>
//   );
// }
  return (
  <div className="navbar">
    
    {/* LEFT: Hamburger + Logo */}
    <div className="navbar-left">
      <div className="navbarHamberger" onClick={sideNavbarFunc}>
        <ListIcon sx={{ color: "white" }} />
      </div>
      <img src={MyLogo} alt="App Logo" className="mylogo" />
      <span className="logoText">SphereTube</span>
    </div>

    {/* MIDDLE: Search */}
    <div className="navbar-middle">
      <div className="navbar_searchBox">
        <input type='text' placeholder='Search' className='navbar_searchBoxInput' />
        <div className="navbar_searchIconBox">
          <SearchIcon sx={{fontSize:"28px"}} />
        </div>
      </div>
      <div className="navbar_mike">
        <KeyboardVoiceIcon sx={{color:"white"}}/>
      </div>
    </div>

    {/* RIGHT: Icons */}
    <div className="navbar-right">
      <VideoCameraFrontIcon sx={{fontSize:"30px", cursor:"pointer", color:"white"}} />
      <NotificationsActiveIcon sx={{fontSize:"30px", cursor:"pointer", color:"white"}} />
      <img onClick={handleClickModal} src={userPic} className='navbar-right-logo' />
      { navbarModal &&
        <div className="navbar-modal">
          <div className="navbar-modal-option">Profile</div>
          <div className="navbar-modal-option">Logout</div>
          <div className="navbar-modal-option">Login</div>
        </div>
      }
    </div>

  </div>
);
};

export default Navbar;


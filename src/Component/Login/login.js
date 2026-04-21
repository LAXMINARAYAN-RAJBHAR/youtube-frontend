import React from 'react'
import './login.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Login = ({setLoginModal}) => {
  return (
    <div className='login'>
      <div className="login_card">
            <div className="titleCard_login">
                <AccountCircleIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                Login
            </div>

            <div className="loginCredentials">
                <div className="userNameLogin">
                    <input className='userNameLoginUserName' placeholder='UserName' type="text" />
                </div>
                <div className="userNameLogin">
                    <input className='userNameLoginUserName' placeholder='Password' type="password" />
                </div>
            </div>

            <div className="login_buttons">
                <div className="login-btn">Login</div>
                <Link to={'/signup'} onClick={()=>setLoginModal()} className="login-btn" >SignUp</Link>
                <div className="login-btn" onClick={()=>setLoginModal()}>Cancel</div>
            </div>

      </div>
    </div>
  )
}

export default Login

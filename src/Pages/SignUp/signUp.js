import React from 'react'
import  './signUp.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='signUp'>
      <div className="signup_card">
        <div className="signUp_title">
        <AccountCircleIcon sx={{fontSize: "54px" }} className='login_youtubeImage' />
        SignUp
        </div>

        <div className="signUp_Inputs">
            <input type="text" className='signUp_Inputs_inp' placeholder='Channel Name' />
            <input type="text" className='signUp_Inputs_inp' placeholder='User Name' />
            <input type="password" className='signUp_Inputs_inp' placeholder='Password' />
            <input type="text" className='signUp_Inputs_inp' placeholder='About Your Channel Name' />
        
            <div className="image_upload_signup">
                    <input type='file'/>
            <div className="image_upload_signup_div">
                <img className='image_default_signup' src="https://th.bing.com/th/id/OIP.RAdrPNRMbet9JG-EzVBh1gAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" />
                </div>    
                    </div>

                    <div className="signUpBtns">
                        <div className="signUpBtn">SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>
                    </div>
        
        </div>

      </div>
    </div>
  )
}

export default SignUp

import React from "react";
import "./profile.css";
import { ClassNames } from "@emotion/react";
import SideNavbar from "../../Component/SideNavbar/sideNavbar";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Profile = ({ sideNavbar }) => {
  return (
    <div className="profile">
      <SideNavbar sideNavbar={sideNavbar} />

      <div className="profile_page">

        <div className="profile_top_section">
          <div className="profile_top_section_profile">
            <img
              className="profile_top_section_img"
              src="https://tse2.mm.bing.net/th/id/OIP.B-XQ4jOwe6ORilA0uQWGzQHaHa?w=740&h=740&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
          </div>
          <div className="profile.top.section.About">
            <div className="profile_top_section_About_Name">Jyoti</div>
            <div className="profile_top_section_info">@User1 . 4 videos</div>
            <div className="profile_top_section_info">
              About Section of channel
            </div>
          </div>
        </div>

        <div className="profile_videos">
          <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon/></div>

          <div className="profileVideos">

                      {/* div for a video */}
              <div className="profileVideo_block">
                <div className="profileVideo_block_thumbnail">
                    <img className='profileVideo_block_thumbnail_img' src="https://tse4.mm.bing.net/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                </div>


              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

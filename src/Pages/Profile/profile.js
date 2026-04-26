import React from "react";
import "./profile.css";
import SideNavbar from "../../Component/SideNavbar/sideNavbar";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // ✅ add this

// Each user's data
const usersData = {
  jyoti: {
    name: "Jyoti",
    handle: "@User1",
    videos: 4,
    about: "About Section of Jyoti's channel",
    profilePic: "https://tse2.mm.bing.net/th/id/OIP.B-XQ4jOwe6ORilA0uQWGzQHaHa?w=740&h=740&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  rahul: {
    name: "Rahul",
    handle: "@User2",
    videos: 2,
    about: "About Section of Rahul's channel",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  // add more users...
};

const Profile = ({ sideNavbar }) => {

  const { username } = useParams(); // ✅ reads username from URL
  const user = usersData[username]; // ✅ finds matching user

  // ✅ if user not found
  if (!user) {
    return (
      <div style={{ color: 'white', padding: '20px' }}>
        User not found!
      </div>
    );
  }

  return (
    <div className="profile">
      <SideNavbar sideNavbar={sideNavbar} />

      <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>

        <div className="profile_top_section">
          <div className="profile_top_section_profile">
            <img
              className="profile_top_section_img"
              src="https://tse2.mm.bing.net/th/id/OIP.B-XQ4jOwe6ORilA0uQWGzQHaHa?w=740&h=740&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
          </div>
          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">Jyoti</div>
            <div className="profile_top_section_info">@User1 . 4 videos</div>
            <div className="profile_top_section_info">
              About Section of channel
            </div>
          </div>
        </div>

        <div className="profile_videos">
          <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

          <div className="profileVideos">

            {/* div for a video */}
            <Link to="/watch/8998" className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img className="profileVideo_block_thumbnail_img" src="https://tse4.mm.bing.net/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              </div>
              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detai_name">Video Title</div>
                <div className="profileVideo_block_detai_about">Created at 2024-09-12</div>
              </div>
            </Link>

            {/* div for a video */}
            <Link to="/watch/8999" className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img className="profileVideo_block_thumbnail_img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48864a65-f142-40ff-9435-6701bef7955b/dlmyzqf-dc03db76-5564-4ee3-89a8-642606e3063d.png/v1/fill/w_1192,h_670,q_70,strp/_wwe_wrestlemania_42_2026_v2___mc_remake_by_wrestlingprimespace_dlmyzqf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU0OCIsInBhdGgiOiIvZi80ODg2NGE2NS1mMTQyLTQwZmYtOTQzNS02NzAxYmVmNzk1NWIvZGxteXpxZi1kYzAzZGI3Ni01NTY0LTRlZTMtODlhOC02NDI2MDZlMzA2M2QucG5nIiwid2lkdGgiOiI8PTI3NTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FRcll9a5fPDX1_IjbVuFtezGZ2AEanuu0ZiYBi7f69c" alt="" />
              </div>
              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detai_name">WWE WRESTLEMENIA 2026</div>
                <div className="profileVideo_block_detai_about">Created at 2024-09-12</div>
              </div>
            </Link>

            {/* div for a video */}
            <Link to="/watch/9000" className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img className="profileVideo_block_thumbnail_img" src="https://img.youtube.com/vi/CN0lNff-zm0/maxresdefault.jpg" alt="" />
              </div>
              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detai_name">Dhurandhar: The Revenge</div>
                <div className="profileVideo_block_detai_about">Created at 2024-09-12</div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
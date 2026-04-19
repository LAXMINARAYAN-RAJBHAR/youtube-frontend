import React from "react";
import "./homePage.css";
import { Link } from 'react-router-dom';

const HomePage = ({ sideNavbar }) => {
  const options = [
    "DD News",
    "News",
    "Film Criticisms",
    "Twenty20 Cricket",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke Studio India",
    "Democracy",
    "Pakistani Dramas",
    "Comedy",
    "Podcasts",
    "Dramedy",
    "Web Development",
    "Dubbing",
    "Web Series",
    "Professional Wrestling",
    "Bhojpuri Cinema",
    "Superhero movies",
    "Astronomy",
    "AI",
    "History",
    "Indian Music",
    "Recently Uploaded",
    "Watched",
  ];

  const videos = [
    {
      id: 7679,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-l3JR0guZspKsBZkVoakjkQ-qxUCCpkQnw&s",
      title: "Big Buck Bunny open-source film",
      duration: "09:56",
      channel: "Laxminarayan"
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg",
      title: "Sample Video 2",
      duration: "30:00",
      channel: "Mummy"
    },
    {
      id: 3,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyNTbTLzlbDj6RSQdV6imNyxNywT3pchKKg&s",
      title: "3d Lion Stock Photo",
      duration: "60:00",
      channel: "Papa"
    },
    {
      id: 4,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWv_QvC-7P4_8Ubbg2rwn0Om4APOgf6B3yA&s",
      title: "Sample Video 4",
      duration: "10:00",
      channel: "Karthik"
    },
    {
      id: 5,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZleDiTkppd2k7GVmREMQRs8D8JBbNXuuxUA&s",
      title: "8k Wallpaper 3d Photos",
      duration: "18:00",
      channel: "Annu"
    },
    {
      id: 6,
      thumbnail:
        "https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg",
      title: "3D Animation Solutions | Autodesk",
      duration: "08:00",
      channel: "Jyoti"
    },
    {
      id: 7,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxQZtpZz8NgMYzzNMiBm-n4h2oGYovjK2lQ&s",
      title: "3D Shapes | Types, Properties & Examples",
      duration: "28:00",
      channel: "Sarita"
    },
    {
      id: 8,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5izd-jLAR_UjqnUULPW42Pv_LIpL0W60cQ&s",
      title: "3d Graphics Pictures | Unsplash",
      duration: "20:00",
      channel: "Jaynarayan"
    },
    {
      id: 9,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6EQg2_-8zTqUk1YRvLpJinJk67VF0wEZfg&s",
      title: "Scenery 3d wallpaper | homify",
      duration: "10:00",
      channel: "Shyamnarayan"
    },
    {
      id: 10,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5r-8k6FyUEN9OYQu5WgyyNqT8lrqgw7dCQ&s",
      title: "3D Nature Images | Adobe Stock",
      duration: "12:00",
      channel: "Sheru"
    },
    {
      id: 11,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUzhAtZL9ElXiENfplVjR5dCJsUQUG2NuXg&s",
      title: "5,364,800+ 3d Images | iStock",
      duration: "13:30",
      channel: "Moti"
    },
    {
      id: 12,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcK3NWfTM_cOjFOH6ArcBdUbu29e0AVjFZw&s",
      title: "Understanding 3D Computer Graphics",
      duration: "20:50",
      channel: "Sandeep"
    },
  ];

  return (
    <div className="homePage">
      {/* Category options bar */}
      <div className={`homePage_options ${sideNavbar ? "sidebar-open" : ""}`}>
        <div className="homePage_options_track">
          {options.map((item) => (
            <div key={item} className="homePage_option">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Main video grid */}
      <div
        className={`home_mainPage ${sideNavbar ? "sidebar-open" : "sidebar-closed"}`}
      >
        <div className="youtube_VideoGrid">
          {videos.map((video) => (
            <div key={video.id} className="youtube_thumbnailBox">
              <Link to={`/watch/${video.id}`} className="youtube_thumbnailWrapper">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                  className="youtube_thumbnailPic"
                />
                <div className="youtube_timingThumbnail">{video.duration}</div>
              </Link>

              <div className="youtubeTitleBox">
                <div className="youtubeBoxProfile">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${video.channel}`}
                    alt={video.channel}
                    className="youtube_thumbnail_Profile"
                  />
                  {/* Bright style applied to ALL channel names */}
                  <p className="youtube_ChannelName">{video.channel}</p>
                </div>
                <div className="youtubeVideoInfo">
                  <p className="youtube_videoTitle">{video.title}</p>
                  <p className="youtubeVideo_Views">3 Likes</p>
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default HomePage;

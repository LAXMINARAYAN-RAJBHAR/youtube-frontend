import React from "react";
import "./homePage.css";

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

  // Array of video thumbnails
  const videos = [
    {
      id: 1,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-l3JR0guZspKsBZkVoakjkQ-qxUCCpkQnw&s",
      title: "Sample Video 1",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg",
      title: "Sample Video 2",
    },
    {
      id: 3,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyNTbTLzlbDj6RSQdV6imNyxNywT3pchKKg&s",
      title: "3d Lion Stock Photo",
    },
    {
      id: 4,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWv_QvC-7P4_8Ubbg2rwn0Om4APOgf6B3yA&s",
      title: "Sample Video 4",
    },
    {
      id: 5,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZleDiTkppd2k7GVmREMQRs8D8JBbNXuuxUA&s",
      title: "8k Wallpaper 3d Photos, Download The BEST Free 8k Wallpaper 3d Stock Photos & HD Images",
    },
    {
      id: 6,
      thumbnail: "https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg",
      title: "3D Animation Solutions | Software For Film & TV | Autodesk",
    },
    {
      id: 7,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxQZtpZz8NgMYzzNMiBm-n4h2oGYovjK2lQ&s",
      title: "3D Shapes | Types, Properties & Examples Video",
    },
    {
      id: 8,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5izd-jLAR_UjqnUULPW42Pv_LIpL0W60cQ&s",
      title: "3d Graphics Pictures | Download Free Images on Unsplash",
    },
    {
      id: 9,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6EQg2_-8zTqUk1YRvLpJinJk67VF0wEZfg&s",
      title: "Scenery 3d wallpaper | homify",
    },
    {
      id: 9,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5r-8k6FyUEN9OYQu5WgyyNqT8lrqgw7dCQ&s",
      title: "3D Nature Images – Browse 5,796,113 Stock Photos, Vectors, and Video | Adobe Stock",
    },
    {
      id: 10,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUzhAtZL9ElXiENfplVjR5dCJsUQUG2NuXg&s",
      title: "5,364,800+ 3d Images Stock Photos, Pictures & Royalty-Free Images - iStock",
    },
    {
      id: 11,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcK3NWfTM_cOjFOH6ArcBdUbu29e0AVjFZw&s",
      title: "Understanding 3D Computer Graphics: A Comprehensive Guide - Boston Institute Of Analytics",
    },
  ];

  return (
    <div className="homePage">
      <div className={`homePage_options ${sideNavbar ? "sidebar-open" : ""}`}>
        <div className="homePage_options_track">
          {options.map((item, index) => (
            <div key={item + index} className="homePage_option">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`home_mainPage ${sideNavbar ? "sidebar-open" : "sidebar-closed"}`}
      >
        <div className="youtube_VideoGrid">
          {videos.map((video) => (
            <div key={video.id} className="youtube_thumbnailBox">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="youtube_thumbnailPic"
              />
              <p className="youtube_videoTitle">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

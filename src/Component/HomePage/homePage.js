import React from "react";
import "./homePage.css";
import { Link } from 'react-router-dom';

const shortsData = [
  { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", user: "user1", thumbnail: "https://picsum.photos/200/350?random=1" },
  { id: 2, src: "https://www.w3schools.com/html/movie.mp4", user: "user2", thumbnail: "https://picsum.photos/200/350?random=2" },
  { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4", user: "user3", thumbnail: "https://picsum.photos/200/350?random=3" },
  { id: 4, src: "https://www.w3schools.com/html/movie.mp4", user: "user4", thumbnail: "https://picsum.photos/200/350?random=4" },
  { id: 5, src: "https://www.w3schools.com/html/mov_bbb.mp4", user: "user5", thumbnail: "https://picsum.photos/200/350?random=5" },
  { id: 6, src: "https://www.w3schools.com/html/movie.mp4", user: "user6", thumbnail: "https://picsum.photos/200/350?random=6" },
];

const HomePage = ({ sideNavbar }) => {
  const options = [
    "DD News","News","Film Criticisms","Twenty20 Cricket","Music","Live","Mixes",
    "Gaming","Debates","Coke Studio India","Democracy","Pakistani Dramas","Comedy",
    "Podcasts","Dramedy","Web Development","Dubbing","Web Series","Professional Wrestling",
    "Bhojpuri Cinema","Superhero movies","Astronomy","AI","History","Indian Music",
    "Recently Uploaded","Watched",
  ];

  const videos = [
    { id: 7679, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-l3JR0guZspKsBZkVoakjkQ-qxUCCpkQnw&s", title:"Big Buck Bunny open-source film", duration:"09:56", channel:"Gangeshwary" },
    { id: 2, thumbnail:"https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg", title:"Sample Video 2", duration:"30:00", channel:"Mummy" },
    { id: 3, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyNTbTLzlbDj6RSQdV6imNyxNywT3pchKKg&s", title:"3d Lion Stock Photo", duration:"60:00", channel:"Papa" },
    { id: 4, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWv_QvC-7P4_8Ubbg2rwn0Om4APOgf6B3yA&s", title:"Sample Video 4", duration:"10:00", channel:"Karthik" },
    { id: 5, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZleDiTkppd2k7GVmREMQRs8D8JBbNXuuxUA&s", title:"8k Wallpaper 3d Photos", duration:"18:00", channel:"Annu" },
    { id: 6, thumbnail:"https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg", title:"3D Animation Solutions | Autodesk", duration:"08:00", channel:"Jyoti" },
    { id: 7, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxQZtpZz8NgMYzzNMiBm-n4h2oGYovjK2lQ&s", title:"3D Shapes | Types, Properties & Examples", duration:"28:00", channel:"Sarita" },
    { id: 8, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5izd-jLAR_UjqnUULPW42Pv_LIpL0W60cQ&s", title:"3d Graphics Pictures | Unsplash", duration:"20:00", channel:"Jaynarayan" },
    { id: 9, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6EQg2_-8zTqUk1YRvLpJinJk67VF0wEZfg&s", title:"Scenery 3d wallpaper | homify", duration:"10:00", channel:"Shyamnarayan" },
    { id: 10, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5r-8k6FyUEN9OYQu5WgyyNqT8lrqgw7dCQ&s", title:"3D Nature Images | Adobe Stock", duration:"12:00", channel:"Rajbhar" },
    { id: 11, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUzhAtZL9ElXiENfplVjR5dCJsUQUG2NuXg&s", title:"5,364,800+ 3d Images | iStock", duration:"13:30", channel:"Narayan" },
    { id: 12, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcK3NWfTM_cOjFOH6ArcBdUbu29e0AVjFZw&s", title:"Understanding 3D Computer Graphics", duration:"20:50", channel:"Laxminarayan" },
  ];

  const firstRow = videos.slice(0, 4);
  const restVideos = videos.slice(4);

  const VideoCard = ({ video }) => (
    <div key={video.id} className="youtube_thumbnailBox">
      <Link to={`/watch/${video.id}`} className="youtube_thumbnailWrapper">
        <img src={video.thumbnail} alt={video.title} className="youtube_thumbnailPic" />
        <div className="youtube_timingThumbnail">{video.duration}</div>
      </Link>
      <div className="youtubeTitleBox">
        <div className="youtubeBoxProfile">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${video.channel}`}
            alt={video.channel}
            className="youtube_thumbnail_Profile"
          />
          <p className="youtube_ChannelName">{video.channel}</p>
        </div>
        <div className="youtubeVideoInfo">
          <p className="youtube_videoTitle">{video.title}</p>
          <p className="youtubeVideo_Views">3 Likes</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="homePage">
      {/* Category options bar */}
      <div className={`homePage_options ${sideNavbar ? "sidebar-open" : ""}`}>
        <div className="homePage_options_track">
          {options.map((item) => (
            <div key={item} className="homePage_option">{item}</div>
          ))}
        </div>
      </div>

      <div className={`home_mainPage ${sideNavbar ? "sidebar-open" : "sidebar-closed"}`}>

        {/* Shorts Row */}
        <div className="homePage_shortsSection">
          <div className="homePage_shortsHeader">
            <span className="homePage_shortsTitle">🎬 Shorts</span>
            <Link to="/reels" className="homePage_shortsViewAll">View all</Link>
          </div>
          <div className="homePage_shortsRow">
            {shortsData.map((short) => (
              <Link to="/reels" key={short.id} className="homePage_shortCard">
                <div className="homePage_shortThumbnail">
                  <img src={short.thumbnail} alt={short.user} className="homePage_shortImg" />
                  <div className="homePage_shortPlay">▶</div>
                </div>
                <div className="homePage_shortUser">{short.user}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Replace the two separate grids with one */}
<div className="youtube_VideoGrid">
  {videos.map((video) => <VideoCard key={video.id} video={video} />)}
</div>

        {/* Rest of videos */}
        <div className="youtube_VideoGrid">
          {restVideos.map((video) => <VideoCard key={video.id} video={video} />)}
        </div>

      </div>
    </div>
  );
};

export default HomePage;
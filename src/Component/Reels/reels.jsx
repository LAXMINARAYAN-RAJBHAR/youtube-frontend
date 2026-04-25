import React, { useState, useRef, useEffect } from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import './reels.css';

const reelsData = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    user: "user1",
    profilePic: "https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=imgDetMain",
    description: "This is a cool reel 🔥",
    likes: 120,
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    user: "user2",
    profilePic: "https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=imgDetMain",
    description: "Another awesome reel 🎬",
    likes: 98,
  },
  {
    id: 3,
    src: "https://www.w3schools.com/html/movie.mp4",
    user: "user3",
    profilePic: "https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=imgDetMain",
    description: "Another awesome reel 🎬",
    likes: 98,
  },
  {
    id: 4,
    src: "https://www.w3schools.com/html/movie.mp4",
    user: "user4",
    profilePic: "https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=imgDetMain",
    description: "Another awesome reel 🎬",
    likes: 98,
  },
  {
    id: 5,
    src: "https://www.w3schools.com/html/movie.mp4",
    user: "user5",
    profilePic: "https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=imgDetMain",
    description: "Another awesome reel 🎬",
    likes: 98,
  },
  {
    id: 6,
    src: "https://www.w3schools.com/html/movie.mp4",
    user: "user6",
    profilePic: "https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=imgDetMain",
    description: "Another awesome reel 🎬",
    likes: 98,
  },
  {
    id: 7,
    src: "https://www.w3schools.com/html/movie.mp4",
    user: "user7",
    profilePic: "https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=imgDetMain",
    description: "Another awesome reel 🎬",
    likes: 98,
  },
];

const ReelItem = ({ reel }) => {
  const videoRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(false); // start unmuted

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          const playPromise = video.play();

          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // If autoplay with sound fails
              video.muted = true;
              video.play();
              setMuted(true);
            });
          }

        } else {
          video.pause();
        }
      },
      { threshold: 0.7 }
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="reel_item">
      <video
  ref={videoRef}
  src={reel.src}
  className="reel_video"
  loop
  muted={muted}
  playsInline
  controls
  onClick={() => {
    setMuted(!muted);
    videoRef.current?.play();
  }}
/>

      {/* Sound Button */}
      <div className="sound_btn" onClick={toggleMute}>
        {muted ? "🔇" : "🔊"}
      </div>

      {/* Right Action Buttons */}
      <div className="reel_actions">
        <div className="reel_action_btn" onClick={() => setLiked(!liked)}>
          <ThumbUpOutlinedIcon style={{ color: liked ? "#ff0000" : "white" }} />
          <span>{liked ? reel.likes + 1 : reel.likes}</span>
        </div>

        <div className="reel_action_btn">
          <ThumbDownAltOutlinedIcon style={{ color: "white" }} />
        </div>

        <div className="reel_action_btn">
          <ChatBubbleOutlineIcon style={{ color: "white" }} />
          <span>Comment</span>
        </div>

        <div className="reel_action_btn">
          <ShareOutlinedIcon style={{ color: "white" }} />
          <span>Share</span>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="reel_info">
        <div className="reel_user">
          <img src={reel.profilePic} alt="profile" className="reel_profile_pic" />
          <span className="reel_username">{reel.user}</span>
          <button className="reel_subscribe_btn">Subscribe</button>
        </div>
        <div className="reel_description">{reel.description}</div>
      </div>
    </div>
  );
};

const Reels = () => {
  return (
    <div className="reels_container">
      {reelsData.map((reel) => (
        <ReelItem key={reel.id} reel={reel} />
      ))}
    </div>
  );
};

export default Reels;
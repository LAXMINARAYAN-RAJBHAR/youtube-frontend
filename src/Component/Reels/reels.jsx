import React, { useState, useRef, useEffect } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./reels.css";
import { Link } from "react-router-dom"; // add this at top

const reelsData = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    user: "Jyoti",
    username: "jyoti",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "This is a cool reel 🔥",
    likes: 120,
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    user: "user2",
    username: "user2",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Another awesome reel 🎬",
    likes: 98,
  },
  {
    id: 3,
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    user: "user3",
    username: "user3",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Beautiful Flower 🌸",
    likes: 210,
  },
  {
    id: 4,
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    user: "user4",
    username: "user4",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Friday Vibes 🎉",
    likes: 175,
  },
  {
    id: 5,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    user: "user5",
    username: "user5",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Bunny is back 🐇",
    likes: 340,
  },
  {
    id: 6,
    src: "https://www.w3schools.com/html/movie.mp4",
    user: "user6",
    username: "user6",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    description: "Sample Reel 🎥",
    likes: 290,
  },
  {
    id: 7,
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    user: "user7",
    username: "user7",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    description: "Cool Reel 🔥",
    likes: 415,
  },
];

const ReelItem = ({ reel }) => {
  const videoRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(false);
  const isMounted = useRef(true);
  const observerRef = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    const video = videoRef.current;
    if (!video) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!isMounted.current || !videoRef.current) return;
        if (entry.isIntersecting) {
          video.muted = false; // ✅ ensure unmuted on play
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observerRef.current.observe(video);

    return () => {
      isMounted.current = false;
      observerRef.current?.disconnect();
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
      }
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="reel_item">
      <div className="reel_video_wrapper">
        {/* Video */}
        <video
          ref={videoRef}
          className="reel_video"
          loop
          muted={muted}
          playsInline
          controls
        >
          <source src={reel.src} type="video/mp4" />
        </video>

        {/* Action Buttons — ON the video */}
        <div className="reel_actions">
          <div className="reel_action_btn" onClick={() => setLiked(!liked)}>
            <ThumbUpOutlinedIcon
              style={{ color: liked ? "#ff0000" : "white" }}
            />
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

        {/* Bottom Info — ON the video */}
        <div className="reel_info">
          {/* ✅ CORRECT — only one profile pic */}
          <div className="reel_user">
            <Link to={`/profile/${reel.username}`}>
              <img
                src={reel.profilePic}
                alt="profile"
                className="reel_profile_pic"
              />
            </Link>
            <Link
              to={`/profile/${reel.username}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <span className="reel_username">{reel.user}</span>
            </Link>
            <button className="reel_subscribe_btn">Subscribe</button>
          </div>

          <div className="reel_description">{reel.description}</div>
        </div>
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

import React, { useRef, useEffect, useState } from 'react';
import './reelsBar.css';

const reelsData = [
  { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", user: "user1", profilePic: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, src: "https://www.w3schools.com/html/movie.mp4", user: "user2", profilePic: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", user: "user3", profilePic: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4", user: "user4", profilePic: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, src: "https://www.w3schools.com/html/mov_bbb.mp4", user: "user5", profilePic: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, src: "https://www.w3schools.com/html/movie.mp4", user: "user6", profilePic: "https://randomuser.me/api/portraits/women/6.jpg" },
  { id: 7, src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", user: "user7", profilePic: "https://randomuser.me/api/portraits/men/7.jpg" },
];

const ReelsBarItem = ({ reel }) => {
  const videoRef = useRef(null);
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
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(video);

    return () => {
      isMounted.current = false;
      observerRef.current?.disconnect();
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
      }
    };
  }, []);

  return (
    <div className="reels_bar_item">
      <video
        ref={videoRef}
        className="reels_bar_video"
        loop
        muted
        playsInline
      >
        <source src={reel.src} type="video/mp4" />
      </video>
      <div className="reels_bar_info">
        <img src={reel.profilePic} alt="profile" className="reels_bar_pic" />
        <span className="reels_bar_username">{reel.user}</span>
      </div>
    </div>
  );
};

const ReelsBar = () => {
  return (
    <div className="reels_bar_section">
      <p className="reels_bar_label">🎬 Reels</p>
      <div className="reels_bar_container">
        {reelsData.map((reel) => (
          <ReelsBarItem key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  );
};

export default ReelsBar;
import React, { useState } from "react";
import "./video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { Link, useParams } from "react-router-dom";

const videos = [
  {
    id: 7679,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-l3JR0guZspKsBZkVoakjkQ-qxUCCpkQnw&s",
    title: "Big Buck Bunny open-source film",
    duration: "09:56",
    channel: "Gangeshwary",
  },
  {
    id: 2,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    title: "Sample Video 2",
    duration: "30:00",
    channel: "Mummy",
  },
  {
    id: 3,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyNTbTLzlbDj6RSQdV6imNyxNywT3pchKKg&s",
    title: "3d Lion Stock Photo",
    duration: "60:00",
    channel: "Papa",
  },
  {
    id: 4,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWv_QvC-7P4_8Ubbg2rwn0Om4APOgf6B3yA&s",
    title: "Sample Video 4",
    duration: "10:00",
    channel: "Karthik",
  },
  {
    id: 5,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZleDiTkppd2k7GVmREMQRs8D8JBbNXuuxUA&s",
    title: "8k Wallpaper 3d Photos",
    duration: "18:00",
    channel: "Annu",
  },
  {
    id: 6,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail:
      "https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg",
    title: "3D Animation Solutions | Autodesk",
    duration: "08:00",
    channel: "Jyoti",
  },
  {
    id: 7,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxQZtpZz8NgMYzzNMiBm-n4h2oGYovjK2lQ&s",
    title: "3D Shapes | Types, Properties & Examples",
    duration: "28:00",
    channel: "Sarita",
  },
  {
    id: 8,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5izd-jLAR_UjqnUULPW42Pv_LIpL0W60cQ&s",
    title: "3d Graphics Pictures | Unsplash",
    duration: "20:00",
    channel: "Jaynarayan",
  },
  {
    id: 9,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6EQg2_-8zTqUk1YRvLpJinJk67VF0wEZfg&s",
    title: "Scenery 3d wallpaper | homify",
    duration: "10:00",
    channel: "Shyamnarayan",
  },
  {
    id: 10,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5r-8k6FyUEN9OYQu5WgyyNqT8lrqgw7dCQ&s",
    title: "3D Nature Images | Adobe Stock",
    duration: "12:00",
    channel: "Rajbhar",
  },
  {
    id: 11,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUzhAtZL9ElXiENfplVjR5dCJsUQUG2NuXg&s",
    title: "5,364,800+ 3d Images | iStock",
    duration: "13:30",
    channel: "Narayan",
  },
  {
    id: 12,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcK3NWfTM_cOjFOH6ArcBdUbu29e0AVjFZw&s",
    title: "Understanding 3D Computer Graphics",
    duration: "20:50",
    channel: "Laxminarayan",
  },
  {
    id: 13,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://picsum.photos/seed/lion1/320/180",
    title: "3D Lion Stock Photo",
    duration: "60:00",
    channel: "Papa",
  },
  {
    id: 14,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://picsum.photos/seed/tiger2/320/180",
    title: "Tiger in Wild",
    duration: "45:00",
    channel: "NatureTV",
  },
  {
    id: 15,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://picsum.photos/seed/forest3/320/180",
    title: "Forest Walk",
    duration: "30:00",
    channel: "EcoWorld",
  },
  {
    id: 16,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://picsum.photos/seed/ocean4/320/180",
    title: "Ocean Waves",
    duration: "15:00",
    channel: "SeaLife",
  },
  {
    id: 17,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://picsum.photos/seed/mountain5/320/180",
    title: "Mountain Trek",
    duration: "20:00",
    channel: "Adventures",
  },
  {
    id: 18,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://picsum.photos/seed/city6/320/180",
    title: "City Lights",
    duration: "10:00",
    channel: "UrbanVibe",
  },
  {
    id: 19,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://picsum.photos/seed/sunset7/320/180",
    title: "Sunset Timelapse",
    duration: "05:00",
    channel: "SkyWatch",
  },
  {
    id: 20,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://picsum.photos/seed/beach8/320/180",
    title: "Beach Day",
    duration: "12:00",
    channel: "SummerFun",
  },
  {
    id: 21,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail: "https://picsum.photos/seed/rain9/320/180",
    title: "Rainy Day",
    duration: "08:00",
    channel: "Chill",
  },
  {
    id: 22,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://picsum.photos/seed/snow10/320/180",
    title: "Snowfall",
    duration: "25:00",
    channel: "WinterMood",
  },
  {
    id: 23,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumbnail: "https://picsum.photos/seed/car11/320/180",
    title: "Sports Car Review",
    duration: "18:00",
    channel: "AutoDrive",
  },
  {
    id: 24,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail: "https://picsum.photos/seed/food12/320/180",
    title: "Pasta Recipe",
    duration: "22:00",
    channel: "ChefLife",
  },
  {
    id: 25,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://picsum.photos/seed/tech13/320/180",
    title: "Latest Gadgets",
    duration: "35:00",
    channel: "TechZone",
  },
  {
    id: 26,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://picsum.photos/seed/space14/320/180",
    title: "Space Exploration",
    duration: "40:00",
    channel: "NASAFan",
  },
  {
    id: 27,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://picsum.photos/seed/dog15/320/180",
    title: "Cute Dogs Compilation",
    duration: "14:00",
    channel: "PetPals",
  },
  {
    id: 28,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://picsum.photos/seed/cat16/320/180",
    title: "Funny Cats",
    duration: "11:00",
    channel: "MeowTime",
  },
  {
    id: 29,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://picsum.photos/seed/workout17/320/180",
    title: "Morning Workout",
    duration: "28:00",
    channel: "FitLife",
  },
  {
    id: 30,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://picsum.photos/seed/yoga18/320/180",
    title: "Yoga for Beginners",
    duration: "45:00",
    channel: "ZenMode",
  },
  {
    id: 31,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://picsum.photos/seed/music19/320/180",
    title: "Lo-Fi Music Mix",
    duration: "60:00",
    channel: "LoFiBeats",
  },
  {
    id: 32,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://picsum.photos/seed/travel20/320/180",
    title: "Travel Vlog: Japan",
    duration: "55:00",
    channel: "GlobeTrotter",
  },
  {
    id: 33,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail: "https://picsum.photos/seed/art21/320/180",
    title: "Painting Tutorial",
    duration: "50:00",
    channel: "ArtStudio",
  },
  {
    id: 34,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://picsum.photos/seed/code22/320/180",
    title: "Learn JavaScript",
    duration: "90:00",
    channel: "DevHQ",
  },
  {
    id: 35,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumbnail: "https://picsum.photos/seed/bird23/320/180",
    title: "Birds of Paradise",
    duration: "16:00",
    channel: "WildBirds",
  },
  {
    id: 36,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail: "https://picsum.photos/seed/river24/320/180",
    title: "River Kayaking",
    duration: "32:00",
    channel: "OutdoorX",
  },
  {
    id: 37,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://picsum.photos/seed/night25/320/180",
    title: "Night Sky Photography",
    duration: "38:00",
    channel: "StarGazer",
  },
  {
    id: 38,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://picsum.photos/seed/coffee26/320/180",
    title: "Coffee Art Tips",
    duration: "09:00",
    channel: "BrewMaster",
  },
  {
    id: 39,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://picsum.photos/seed/book27/320/180",
    title: "Book Review",
    duration: "20:00",
    channel: "ReadMore",
  },
  {
    id: 40,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://picsum.photos/seed/game28/320/180",
    title: "Gaming Highlights",
    duration: "42:00",
    channel: "ProGamer",
  },
  {
    id: 41,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://picsum.photos/seed/drone29/320/180",
    title: "Drone Footage",
    duration: "17:00",
    channel: "SkyView",
  },
  {
    id: 42,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://picsum.photos/seed/history30/320/180",
    title: "Ancient Civilizations",
    duration: "65:00",
    channel: "HistoryBuff",
  },
  {
    id: 43,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://picsum.photos/seed/garden31/320/180",
    title: "Garden Tips",
    duration: "23:00",
    channel: "GreenThumb",
  },
  {
    id: 44,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://picsum.photos/seed/fish32/320/180",
    title: "Deep Sea Creatures",
    duration: "44:00",
    channel: "OceanDepth",
  },
  {
    id: 45,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail: "https://picsum.photos/seed/bike33/320/180",
    title: "Mountain Biking",
    duration: "31:00",
    channel: "BikePro",
  },
  {
    id: 46,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://picsum.photos/seed/sky34/320/180",
    title: "Cloud Formations",
    duration: "07:00",
    channel: "WeatherNerd",
  },
  {
    id: 47,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumbnail: "https://picsum.photos/seed/market35/320/180",
    title: "Street Market Tour",
    duration: "27:00",
    channel: "FoodieWalks",
  },
  {
    id: 48,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail: "https://picsum.photos/seed/dance36/320/180",
    title: "Dance Choreography",
    duration: "13:00",
    channel: "DanceFloor",
  },
  {
    id: 49,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://picsum.photos/seed/photo37/320/180",
    title: "Photography Masterclass",
    duration: "75:00",
    channel: "LensCraft",
  },
  {
    id: 50,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://picsum.photos/seed/desk38/320/180",
    title: "Desk Setup Tour",
    duration: "19:00",
    channel: "SetupGoals",
  },
  {
    id: 51,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://picsum.photos/seed/swim39/320/180",
    title: "Swimming Tips",
    duration: "36:00",
    channel: "AquaLife",
  },
  {
    id: 52,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://picsum.photos/seed/volcano40/320/180",
    title: "Volcanic Eruption",
    duration: "48:00",
    channel: "GeoWatch",
  },
  {
    id: 53,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://picsum.photos/seed/farm41/320/180",
    title: "Farm Life Vlog",
    duration: "53:00",
    channel: "RuralDays",
  },
  {
    id: 54,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://picsum.photos/seed/robot42/320/180",
    title: "AI & Robotics",
    duration: "58:00",
    channel: "FutureTech",
  },
  {
    id: 55,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://picsum.photos/seed/horse43/320/180",
    title: "Horse Riding Basics",
    duration: "41:00",
    channel: "EquineLife",
  },
  {
    id: 56,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://picsum.photos/seed/dessert44/320/180",
    title: "Chocolate Cake Recipe",
    duration: "26:00",
    channel: "SweetBakes",
  },
  {
    id: 57,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail: "https://picsum.photos/seed/waterfall45/320/180",
    title: "Waterfall Hike",
    duration: "33:00",
    channel: "NatureWalks",
  },
  {
    id: 58,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://picsum.photos/seed/candle46/320/180",
    title: "DIY Candle Making",
    duration: "21:00",
    channel: "CraftCorner",
  },
  {
    id: 59,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumbnail: "https://picsum.photos/seed/castle47/320/180",
    title: "Castle Exploration",
    duration: "67:00",
    channel: "HistoricPlaces",
  },
  {
    id: 60,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail: "https://picsum.photos/seed/surf48/320/180",
    title: "Surfing Lessons",
    duration: "29:00",
    channel: "WaveRider",
  },
  {
    id: 61,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://picsum.photos/seed/jungle49/320/180",
    title: "Jungle Safari",
    duration: "72:00",
    channel: "WildExplorer",
  },
  {
    id: 62,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://picsum.photos/seed/aurora50/320/180",
    title: "Northern Lights",
    duration: "15:00",
    channel: "ArcticVision",
  },
];

const Video = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === Number(id));
  const [message, setMessage] = useState("");

  if (!video) return <p>Video not found</p>;

  const suggestions = videos.filter((v) => v.id !== video.id).slice(0, 6);

  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          <video
            key={video.id}
            src={video.src}
            controls
            autoPlay
            className="video_youtube_video"
          />
        </div>
        <div className="video_youtubeAbout">
          {/* ✅ DYNAMIC TITLE */}
          <div className="video_uTubeTitle">{video.title}</div>

          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">
              <Link
                to={"/user/8998"}
                className="youtube_video_ProfileBlock_left_img"
              >
                <img
                  className="youtube_video_ProfileBlock_left_image"
                  src="https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=imgDetMain"
                  alt="profile"
                />
              </Link>
              <div className="youtubeVideo_subsView">
                {/* ✅ DYNAMIC CHANNEL */}
                <div className="youtubePostProfileName">{video.channel}</div>
                <div className="youtubePostProfileSubs">2024-07-09</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_Like">
                <ThumbUpOutlinedIcon />
                <div className="youtube_video_likeBlock_NoOfLikes">32</div>
              </div>
              <div className="youtubeVideoDivider"></div>
              <div className="youtube_video_likeBlock_Like">
                <ThumbDownAltOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="youtube_video_About">
            <div>2024-09-30</div>
            <div>This is the cool video</div>
          </div>

          {/* COMMENT SECTION */}
          <div className="youtubeCommentSection">
            <div className="youtubeCommentSectionTitle">2 Comments</div>

            <div className="youtubeSelfComment">
              <img
                className="video_youtubeSelfCommentProfile"
                src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&pid=1.7"
                alt="self"
              />
              <div className="addAComment">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="addACommentInput"
                  placeholder="Add a comment"
                />
                <div className="cancelSubmitComment">
                  <div className="cancelcomment" onClick={() => setMessage("")}>
                    Cancel
                  </div>
                  <div className="cancelcomment">Comment</div>
                </div>
              </div>
            </div>

            <div className="youtubeothersComments">
              {[1, 2, 3].map((i) => (
                <div className="youtubeSelfComment" key={i}>
                  <img
                    className="video_youtubeSelfCommentProfile"
                    src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&pid=1.7"
                    alt="commenter"
                  />
                  <div className="others_commentSection">
                    <div className="others_commentSectionHeader">
                      <div className="channelName_comment">UserName</div>
                      <div className="commentTimingOthers">2024-09-30</div>
                    </div>
                    <div className="otherCommentSectionComment">
                      This is the cool web App Project
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ DYNAMIC VIDEO SUGGESTIONS */}
      <div className="videoSuggestions">
        {suggestions.map((suggestion) => (
          <Link
            to={`/video/${suggestion.id}`}
            key={suggestion.id}
            className="videoSuggestionsBlock"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="video_suggestion_thumbnail">
              <img
                src={suggestion.thumbnail}
                className="video_suggestion_thumbnail_img"
                alt={suggestion.title}
              />
            </div>
            <div className="video_suggestions_About">
              <div className="video_suggestions_About_title">
                {suggestion.title}
              </div>
              <div className="video_suggestions_About_Profile">
                {suggestion.channel}
              </div>
              <div className="video_suggestions_About_Profile">
                {suggestion.duration}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Video;

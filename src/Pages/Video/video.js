import React from 'react'
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Link } from 'react-router-dom';

const Video = () => {
  return (
    <div className='video'>
      <div className="videoPostSection">
        <div className="video_youtube">
          <video controls autoPlay className="video_youtube_video">
            <source src={"https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"} type="video/mp4"/>
            <source src={"https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"} type="video/webm"/>
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video_youtubeAbout">
          <div className="video_uTubeTitle">{"Big Buck Bunny open-source film"}</div>

          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">

              <Link to={'/user/8998'} className="youtube_video_ProfileBlock_left_img">
                <img className="youtube_video_ProfileBlock_left_image" src={'https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=18pid=imgDetMain'} />
              </Link>

              <div className="youtubeVideo_subsView">
                <div className="youtubePostProfileName"> {"user1"} </div>
                <div className="youtubePostProfileSubs">{"2024-07-09"}</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

              <div className="youtube_video_likeBlock">
               <div className="youtube_video_likeBlock_Like">
                <ThumbUpOutlinedIcon />
                <div className="youtube_video_likeBlock_NoOfLikes">{32}</div>
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

            <div className="youtubeCommentSection">
              <div className="youtubeCommentSectionTitle">2 Comments</div>

              <div className="youtubeSelfComment">
                <img className='video_youtubeSelfCommentProfile' src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h-180&c-7&r-0&o-S&dpr-1.3&pid-1.7" />
                <div className="addAComment">
                      <input type='text' className='addACommentInput' placeholder='Add a comment' />
                      <div className="cancelSubmitComment">
                        <div className="cancelcomment">Cancel</div>
                        <div className="cancelcomment">Comment</div>
                      </div>
                </div>
              </div>

              <div className="youtubeothersComments">

                <div className="youtubeSelfComment">
                    <img className='video_youtubeSelfCommentProfile' src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h-180&c-7&r-0&o-S&dpr-1.3&pid-1.7" />
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

                <div className="youtubeSelfComment">
                    <img className='video_youtubeSelfCommentProfile' src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h-180&c-7&r-0&o-S&dpr-1.3&pid-1.7" />
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

                <div className="youtubeSelfComment">
                    <img className='video_youtubeSelfCommentProfile' src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h-180&c-7&r-0&o-S&dpr-1.3&pid-1.7" />
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


              </div>
            </div>
        </div>

      </div>

<div className="videoSuggestions">

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://i.ytimg.com/vi/x-FLu8sOt_U/maxresdefault.jpg" className="video_suggestion_thumbnail_img" />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">T20 2024 Worldcup Final IND Vs SA Last 5 overs #cricket #india</div>
            <div className="video_suggestions_About_Profile">Cricket 320</div>
            <div className="video_suggestions_About_Profile">360k views . 1 day ago</div>
          </div>

        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://i.ytimg.com/vi/x-FLu8sOt_U/maxresdefault.jpg" className="video_suggestion_thumbnail_img" />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">T20 2024 Worldcup Final IND Vs SA Last 5 overs #cricket #india</div>
            <div className="video_suggestions_About_Profile">Cricket 320</div>
            <div className="video_suggestions_About_Profile">360k views . 1 day ago</div>
          </div>

        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://i.ytimg.com/vi/x-FLu8sOt_U/maxresdefault.jpg" className="video_suggestion_thumbnail_img" />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">T20 2024 Worldcup Final IND Vs SA Last 5 overs #cricket #india</div>
            <div className="video_suggestions_About_Profile">Cricket 320</div>
            <div className="video_suggestions_About_Profile">360k views . 1 day ago</div>
          </div>

        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://i.ytimg.com/vi/x-FLu8sOt_U/maxresdefault.jpg" className="video_suggestion_thumbnail_img" />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">T20 2024 Worldcup Final IND Vs SA Last 5 overs #cricket #india</div>
            <div className="video_suggestions_About_Profile">Cricket 320</div>
            <div className="video_suggestions_About_Profile">360k views . 1 day ago</div>
          </div>

        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://i.ytimg.com/vi/x-FLu8sOt_U/maxresdefault.jpg" className="video_suggestion_thumbnail_img" />
          </div>
          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">T20 2024 Worldcup Final IND Vs SA Last 5 overs #cricket #india</div>
            <div className="video_suggestions_About_Profile">Cricket 320</div>
            <div className="video_suggestions_About_Profile">360k views . 1 day ago</div>
          </div>

        </div>

</div>

    </div>
  )
}

export default Video
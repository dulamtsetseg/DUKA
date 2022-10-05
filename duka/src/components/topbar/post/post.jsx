import "./post.css";
import {MoreVert} from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img alt="" src="/assets/jiso.jpeg" className="postProfileImg"/>
                    <span className="postUsername">duka</span>
                    <span className="postDate">3 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    Hello how are you
                </span>
                <img className="postImg" src="assets/ubba.jpeg" alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.jpeg" alt=""/>
                    <img className="likeIcon" src="assets/love.jpeg" alt=""/>
                    <span className="postLikeCounter">32 peaple like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}


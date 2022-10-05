import "./post.css";
import {MoreVert} from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img alt="" src="/assets/jiso.jpeg" className="postProfileImg"/>
                    <span className="postUsername">T.Tuguldur</span>
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
            </div>
            <div className="postBottom">
            
            </div>
        </div>
    </div>
  )
}

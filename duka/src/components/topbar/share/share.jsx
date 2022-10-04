import "./share.css"
import {PermMedia,ZoomIn,Room, EmojiEmotions} from "@material-ui/icons"
export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="shareTop">
            <img className="shareProfileImg" src="/assets/1.jpeg" alt=""/>
            <input 
            placeholder="What's in your mind Safak?" 
            className="shareInput"
            />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom"></div>
               <div className="shareTop ">
               <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    < ZoomIn htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feeling</span>
                </div>
               </div>
               <button className="shareButton">Share</button>
        </div>
    </div>
  )
}

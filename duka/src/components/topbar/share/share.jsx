import "./share.css"
import {PermMedia} from "@material-ui/icons"
export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="shareTop">
            {/* <img className="shareProfileImg" src="/assets/1.jpeg" alt=""/> */}
            <input 
            placeholder="What's in your mind Safak?" 
            className="shareInput"
            />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom"></div>
               <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia className="shreIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
               </div>
        </div>
    </div>
  )
}

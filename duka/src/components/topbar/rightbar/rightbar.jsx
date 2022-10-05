import { Cake } from "@material-ui/icons"

import "./rightbar.css"

export default function rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <Cake className="birthdayImg"/>
            <span className="birthdayText">
              <b>Jung Kook</b> and <b>3 other friends</b> have a birthday today
            </span>
          </div>
          <img className="rightbarAd" src="/assets/juju.jpeg" alt="" />
          <h4 className="rightbarTitle">Online friends</h4>
          <ul className="rightbarFriendsList">
          <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/ubba.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Jung Kook</span>
            </li><li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/ubba.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Jung Kook</span>
            </li><li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/ubba.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Jung Kook</span>
            </li><li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/ubba.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Jung Kook</span>
            </li><li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/ubba.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Jung Kook</span>
            </li><li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/ubba.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Jung Kook</span>
            </li>
          </ul>
        </div>
        </div>
  )
}

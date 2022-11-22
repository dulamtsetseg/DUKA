import "./sidebar.css"
import {RssFeed, Chat,Videocam, Group, Bookmark, ContactSupport, Work, Event, GolfCourse} from "@mui/icons-material"
export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <RssFeed className="sideIcon"/>
          <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <Chat className="sideIcon"/>
          <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <Videocam className="sideIcon"/>
          <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
          <Group className="sideIcon"/>
          <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <Bookmark className="sideIcon"/>
          <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <ContactSupport className="sideIcon"/>
          <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
          <Work className="sideIcon"/>
          <span className="sidebarListItemText">Works</span>
          </li>
          <li className="sidebarListItem">
          <Event className="sideIcon"/>
          <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
          <GolfCourse className="sideIcon"/>
          <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
           <img className="sidebaFriendImg" src="/assets/2.jpeg" alt=""/>
           <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

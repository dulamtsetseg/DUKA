import "./topbar.css"
import { Search,Person, Chat, Notifications  } from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">__dkk_social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" /> 
          <input placeholder="Search for friend, post or video " className="searchInput" />
        </div>
       </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topLink">Homepage</span>
          <span className="topLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarItemIcons">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarItemIcons">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarItemIcons">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/1.jpeg" alt="" className="topbarImg" />
      </div>
      </div>
  )     
}

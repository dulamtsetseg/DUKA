import "./topbar.css"
import { Search,Person, Chat, Notifications} from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter"></div>
      <div className="searchbar">
        <Search /> 
        <input placeholder="Search for friend, post or video " className="searchInput" />
       </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topLinks">Homepage</span>
          <span className="topLinks">Timeline</span>
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

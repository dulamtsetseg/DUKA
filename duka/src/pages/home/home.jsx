import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/topbar/sidebar/sidebar"
import Feed from "../../components/topbar/feed/feed"
import Rightbar from "../../components/topbar/rightbar/rightbar"
import "./home.css"

export default function home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}

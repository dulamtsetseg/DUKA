import Share from "../share/share"
import Post from "../post/post"
import "./feed.css"
export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        </div>
        </div>
  )
}

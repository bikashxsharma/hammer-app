import React from "react"
import Moment from "react-moment"

import {useSelector} from "react-redux"

//components
import HammerButton from "./HammerButton"

const Post = (props) => {
  const users = useSelector((state) => state.getUsersReducer.users)
  const result = users.find(({userId}) => userId === props.post.userId)
  return (
    <div className="post-box">
      <div className="post-content">
        <div className="user-info">
          <div className="user-pic">
            <img src={result.profileImage} alt="user" />
          </div>
          <div className="name-time">
            <div className="name"> {result.firstName}</div>
            <p>
              <Moment>{props.post.createdAt._seconds}</Moment>
            </p>
          </div>
        </div>
        <div className="post-texts">{props.post.postText}</div>
        <div className="line"></div>
        <div className="hammer-area">
          <HammerButton
            dataIndex={props.dataIndex}
            hammerCount={props.post.hammerCount}
          />
        </div>
      </div>
      <div className="post-box-footer">
        <p>Be the first to Hammer down</p>
      </div>
    </div>
  )
}
export default Post

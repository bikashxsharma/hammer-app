import React from "react"
import {useSelector} from "react-redux"

const LeftFeed = () => {
  const users = useSelector((state) => state.getUsersReducer.users)
  const isLoading = useSelector((state) => state.getUsersReducer.isLoading)

  return (
    <div className="left-feed">
      <div className="text-bold text-main">Followers</div>
      <p style={{display: isLoading ? "inline" : "none"}}>Loading...</p>
      {users.map((user) => (
        <p key={user.userId}>
          {" "}
          <a href="/">{user.firstName}</a>
        </p>
      ))}
    </div>
  )
}

export default LeftFeed

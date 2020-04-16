import React from "react"
import {useSelector} from "react-redux"

//components

const LeftFeed = () => {
  const users = useSelector((state) => state.getUsersReducer)
  console.log(users)
  const isLoading = false

  if (!isLoading) {
    return (
      <div className="left-feed">
        <div className="text-bold text-main">Followers</div>
        <p>Loading users..</p>
      </div>
    )
  } else {
    return (
      <div className="left-feed">
        <div className="text-bold text-main">Followers</div>
        {users.map((user) => (
          <p key={user.userId}>
            {" "}
            <a href="/">{user.firstName}</a>
          </p>
        ))}
      </div>
    )
  }
}

export default LeftFeed

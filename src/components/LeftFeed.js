import React from "react"
import {useSelector} from "react-redux"

import axios from "axios"
import fire from "../config/Fire"

//components

const LeftFeed = () => {
  let users = []

  axios
    .get("https://us-central1-hammer-app.cloudfunctions.net/getUsers")
    .then((response) => {
      console.log(response.data)
      console.log(response.status)
      console.log(response.statusText)
      console.log(response.headers)
      console.log(response.config)
    })
    .catch((err) => console.log(err))

  return (
    <div className="left-feed">
      <div className="text-bold text-main">Followers</div>
      <p>
        <a href="/">Bikash</a>
      </p>
      <p>
        <a href="/">Arto</a>
      </p>
      <p>
        <a href="/">Joonas</a>
      </p>
    </div>
  )
}

export default LeftFeed

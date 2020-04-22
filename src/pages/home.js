import React from "react"
import {useDispatch} from "react-redux"

//component
import Navbar from "../components/Navbar"
import LeftFeed from "../components/LeftFeed"
import MainFeed from "../components/MainFeed"

import getUsers from "../actions/getUsers"

import axios from "axios"

const Home = () => {
  const dispatch = useDispatch()
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://us-central1-hammer-app.cloudfunctions.net/api/users"
    )
    .then((response) => {
      dispatch(getUsers(response.data))
    })
    .catch((err) => console.log(err))

  return (
    <div>
      <Navbar />
      <div className="container">
        <LeftFeed />
        <MainFeed />
      </div>
    </div>
  )
}

export default Home

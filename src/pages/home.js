import React, {useEffect} from "react"
import {useDispatch} from "react-redux"

//component
import Navbar from "../components/Navbar"
import LeftFeed from "../components/LeftFeed"
import MainFeed from "../components/MainFeed"

import getUsers from "../actions/getUsers"
import getPosts from "../actions/getPosts"

import axios from "axios"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://us-central1-hammer-app.cloudfunctions.net/api/users"
      )
      .then((response) => {
        dispatch(getUsers(response.data))
      })
      .catch((err) => console.log(err))
  }, [])

  // get posts
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://us-central1-hammer-app.cloudfunctions.net/api/posts"
      )
      .then((response) => {
        dispatch(getPosts(response.data))
      })
      .catch((err) => console.log(err))
  }, [])

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

import React from "react"
import axios from "axios"

let users = []
const getDataFromApi = () => {
  axios
    .get("https://us-central1-hammer-app.cloudfunctions.net/getUsers")
    .then((res) => {
      const datas = res.data
      users = datas
      return users
    })
    .catch((err) => console.log("Error k aayo:" + err))
}
const initState = {
  users: getDataFromApi(),
}

const getUsersReducer = (state = initState, action) => {
  return state
}
export default getUsersReducer

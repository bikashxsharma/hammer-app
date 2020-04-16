import {useState, useEffect} from "react"
import axios from "axios"

const [users, setUsers] = useState("")
const [isLoading, setisLoading] = useState(false)

useEffect(() => {
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://us-central1-hammer-app.cloudfunctions.net/api/users"
    )
    .then((response) => {
      setUsers(response.data)
      setisLoading(true)
      console.log(response.data)
    })
    .catch((err) => console.log(err))
}, [])

console.log("From reducer" + users)

const getUsersReducer = (state = users, action) => {
  return state
}
export default getUsersReducer

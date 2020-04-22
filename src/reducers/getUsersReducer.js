const intitalState = {
  users: [],
  isLoading: true,
}

const getUsersReducer = (state = intitalState, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return (state = {
        users: action.payload,
        isLoading: false,
      })
    case "USER_IS_LOADING":
      return (state = {
        isLoading: true,
      })
    default:
      return state
  }
}
export default getUsersReducer

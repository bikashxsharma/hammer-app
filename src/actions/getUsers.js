const getUsers = (value) => {
  return {
    type: "LOAD_USERS",
    payload: value,
  }
}

export default getUsers

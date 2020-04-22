const getPosts = (value) => {
  return {
    type: "GET_ALL_POSTS",
    payload: value,
  }
}
export default getPosts

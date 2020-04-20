const newPost = (value) => {
  return {
    type: "NEWPOST",
    payload: value,
  }
}

export default newPost

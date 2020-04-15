const isLoggedInReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGGIN":
            return state = true;
        case "LOGOUT":
            return state = false;
        default:
            return state;
    }

}

export default isLoggedInReducer;
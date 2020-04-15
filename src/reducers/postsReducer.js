import dummyData from '../questionPosts_db';


// checking if the localstorage has some value
const getInitialDataFromStorage = () => JSON.parse(
    window.localStorage.getItem('dummyPosts')
);

// store data to local storage only if local storage is empty

if (getInitialDataFromStorage() == null) {
    const setDataToStorage = (items) => window.localStorage.setItem('dummyPosts', JSON.stringify(items));
    setDataToStorage(dummyData);
}


// get data from storage 
const getDataFromStorage = () => JSON.parse(
    window.localStorage.getItem('dummyPosts')
);


const initState = {
    posts: getDataFromStorage()

}

const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case "NEWPOST":
            let newPosts = [...state.posts]
            const postObj = {
                "image": "https://randomuser.me/api/portraits/women/72.jpg",
                "userName": "New user",
                "postedTime": "a few seconds ago",
                "texts": action.payload,
                "hammerCount": "0"

            }
            newPosts.push(postObj)
            window.localStorage.setItem('dummyPosts', JSON.stringify(newPosts));
            return state = {
                posts: getDataFromStorage()
            }
        case "INCREASEHAMMER":
            let newPosts1 = [...state.posts]
            newPosts1[action.payload].hammerCount = (parseInt(newPosts1[action.payload].hammerCount, 10) + 1).toString()

            window.localStorage.setItem('dummyPosts', JSON.stringify(newPosts1));
            return state = {
                posts: getDataFromStorage()
            }


        default:
            return state;
    }




}

export default postsReducer;
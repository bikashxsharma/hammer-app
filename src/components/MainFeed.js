import React from 'react';

import { useSelector } from 'react-redux'

//components
import PostInput from "./PostInput"
import Post from "./Post"

// data entry


const MainFeed = () => {

    const posts = useSelector(state => state.postsReducer.posts);




    return (
        <div className="main-feed" >
            <PostInput inputUser={{ "image": "https://randomuser.me/api/portraits/women/72.jpg", "placeholder": "What do you wanna post today?...", "buttonLabel": "Post" }} />
            {
                posts.map((post, id) => (
                    <Post key={id} dataIndex={id} post={post} />
                ))
            }






        </div>
    )


}



export default MainFeed;
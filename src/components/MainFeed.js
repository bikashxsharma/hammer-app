import React from 'react';

import hammerIcon from "../assets/hammer-icon.svg"

//components
import PostInput from "./PostInput"
import Post from "./Post"

// data entry
import dummyData from '../questionPosts_db';

const MainFeed = () => {
    console.log(dummyData);

    return (
        <div className="main-feed" >
            <PostInput inputUser={{ "image": "https://randomuser.me/api/portraits/women/72.jpg", "placeholder": "What do you wanna post today?...", "buttonLabel": "Post" }} />
            {
                dummyData.map((post, id) => (
                    <Post key={id} post={post} />
                ))
            }






        </div>
    )


}

export default MainFeed;
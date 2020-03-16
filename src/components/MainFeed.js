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
            <Post post={{
                "image": "https://randomuser.me/api/portraits/women/70.jpg",
                "userName": "Joonas K",
                "postedTime": "2 weeks ago",
                "texts": "Wow! Antwerp at the top in the prestigious ‘European Cities & Regions of the Future 2020/2021’ ranking from the #Financial Times. With a 2nd place for fDi #strategy and a 5th place for #connectivity, Antwerp is a city to watch for foreign investors. Join a world of opportunities #businessinantwerp #sustainablechemistry #aworldofopportunities #ECRF20",
                "hammerCount": "20"
            }} />



        </div>
    )


}

export default MainFeed;
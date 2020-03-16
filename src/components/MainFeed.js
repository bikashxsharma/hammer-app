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
            <Post />

            <div className="post-box">
                <div className="post-content">
                    <div className="user-info">
                        <div className="user-pic">
                            <img src="https://randomuser.me/api/portraits/women/70.jpg" alt="user picture" />

                        </div>
                        <div className="name-time">
                            <div className="name"> Joonas K...</div>
                            <p>2 weeks ago</p>
                        </div>

                    </div>
                    <div className="post-texts">
                        Wow! Antwerp at the top in the prestigious ‘European Cities & Regions of the Future 2020/2021’ ranking from the #Financial Times. With a 2nd place for fDi #strategy and a 5th place for #connectivity, Antwerp is a city to watch for foreign investors. Join a world of opportunities #businessinantwerp #sustainablechemistry #aworldofopportunities #ECRF20
                    </div>
                    <div className="line"></div>
                    <div className="hammer-area">
                        <div className="hammer-button">
                            <p>20</p> <img src={hammerIcon} alt="hammer-icon" />
                        </div>
                    </div>

                </div>
                <div className="post-box-footer">
                    <p>Be the first to Hammer down</p>
                </div>


            </div>



        </div>
    )


}

export default MainFeed;

import React from 'react';


//components
import HammerButton from "./HammerButton"


const Post = (props) => {


    return (



        <div className="post-box">
            <div className="post-content">
                <div className="user-info">
                    <div className="user-pic">
                        <img src={props.post.image} alt="user picture" />

                    </div>
                    <div className="name-time">
                        <div className="name"> {props.post.userName}</div>
                        <p>{props.post.postedTime}</p>
                    </div>

                </div>
                <div className="post-texts">
                    {props.post.texts}
                </div>
                <div className="line"></div>
                <div className="hammer-area">
                    <HammerButton hammerCount={props.post.hammerCount} />

                </div>

            </div>
            <div className="post-box-footer">
                <p>Be the first to Hammer down</p>
            </div>


        </div >


    )

}
export default Post;
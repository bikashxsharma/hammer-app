
import React from 'react';
import hammerIcon from "../assets/hammer-icon.svg"

//components


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
                    <div className="hammer-button">
                        <p>20</p> <img src={hammerIcon} alt="hammer-icon" />
                    </div>
                </div>

            </div>
            <div className="post-box-footer">
                <p>Be the first to Hammer down</p>
            </div>


        </div>


    )

}
export default Post;
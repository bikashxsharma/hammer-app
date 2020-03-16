import React from 'react';

//components


const PostInput = (props) => {


    return (



        <div className="post-input-box">
            <div className="post-input-area">
                <div className="user-profile-pic">
                    <img src={props.inputUser.image} alt="user picture" />
                </div>
                <div className="post-input">
                    <textarea placeholder={props.inputUser.placeholder}></textarea>

                </div>

            </div>

            <button className="mainCTA">{props.inputUser.buttonLabel}</button>
        </div>


    )

}
export default PostInput;
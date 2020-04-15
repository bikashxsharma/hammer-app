import React from 'react';

import { useDispatch } from 'react-redux'

import newPost from '../actions/newPost'
//components



const PostInput = (props) => {

    const dispatch = useDispatch();
    const handleInput = (evt) => {
        evt.preventDefault();
        let inputValue = document.getElementById("post-text").value;
        dispatch(newPost(inputValue))
        document.getElementById("post-text").value = '';
    }


    return (



        <div className="post-input-box">
            <form>
                <div className="post-input-area">
                    <div className="user-profile-pic">
                        <img src={props.inputUser.image} alt="user " />
                    </div>

                    <div className="post-input">
                        <textarea id="post-text" placeholder={props.inputUser.placeholder} required></textarea>

                    </div>

                </div>

                <button type="submit" className="mainCTA" onClick={handleInput}>{props.inputUser.buttonLabel}</button>
            </form>

        </div>


    )

}
export default PostInput;
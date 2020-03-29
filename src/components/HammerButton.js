import React from 'react'
import hammerIcon from "../assets/hammer-icon.svg"

import { useDispatch } from 'react-redux'

import increaseHammer from '../actions/increaseHammer'


const HammerButton = (props) => {
    const dispatch = useDispatch();
    const index = props.dataIndex;
    return (
        <div>
            <button className="hammer-button" onClick={() => dispatch(increaseHammer(index))}><p>{props.hammerCount}</p> <img src={hammerIcon} alt="hammer-icon" /></button>
        </div>
    )

}
export default HammerButton;



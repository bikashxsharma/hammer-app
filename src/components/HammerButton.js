import React from 'react'
import hammerIcon from "../assets/hammer-icon.svg"

const HammerButton = (props) => {
    return (
        <div>
            <button className="hammer-button"><p>{props.hammerCount}</p> <img src={hammerIcon} alt="hammer-icon" /></button>
        </div>
    )

}
export default HammerButton;



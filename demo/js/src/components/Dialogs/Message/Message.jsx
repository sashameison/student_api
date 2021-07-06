import React from "react";
import s from './Message.module.css';

const Message = (props) => {
    debugger
    return (
        <div>
            <div className={`${s.message} ${s.active}`}>
                Message: {props.message}
            </div>
        </div>
    )
}


export default Message
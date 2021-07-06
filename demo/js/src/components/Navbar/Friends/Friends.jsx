import React from "react";
import s from "./Friends.module.css";


const Friends = (props) => {
    return (
        <div className={s.item}>
            <li>
                {props.name}
            </li>
        </div>
    )
}

export default Friends
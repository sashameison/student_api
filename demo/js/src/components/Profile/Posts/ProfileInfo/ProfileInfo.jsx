import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={s.item}>
            <p className={s.p}>{props.text}</p>
            <div>
                <img src={props.src}
                     alt=""/>
            </div>
        </div>
    )
}

export default ProfileInfo
import React from "react";
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={s.dialog}>
                <NavLink to={path}  activeClassName={s.active}>
                    {props.name}
                </NavLink>
            </div>
        </div>

    )
}

export default Dialog
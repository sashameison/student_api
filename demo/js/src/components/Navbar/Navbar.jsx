import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props) => {
    let friends = props.state.map((f) => {
        return (
            <Friends name={f.name}/>
        )
    })

    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/profile"
                         activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs"
                         activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news"
                         activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music"
                         activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"
                         activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.item}>
                <h1>Friends : </h1>
                {friends}
            </div>

        </nav>
    )
}

export default Navbar
import React from "react";
import headerStyles from "./Header.module.css";

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <p>Welcome user in our social media </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png"
                alt=""/>
        </div>
    )
}

export default Header
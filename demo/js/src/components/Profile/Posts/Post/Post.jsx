import React from "react";
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            {/*<p>Id: {props.id}</p>*/}
            <p>My name: {props.name}</p>
            <p>My age: {props.age}</p>
            <div>
                <span>like: {props.like}</span>
            </div>
        </div>
    )
}

export default Post
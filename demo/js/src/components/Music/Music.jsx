import React from "react";
import s from './Music.module.css';
import PostStudent from "./PostStudent/PostStudent";
import StudentList from "../../rest components/StudentList";
import StudentPost from "../Profile/Posts/StudentPost/StudentPost";

const Music = (props) => {
    return (
        <div className={s.body}>
           <PostStudent />
           <StudentList />
        </div>
    )
}

export default Music
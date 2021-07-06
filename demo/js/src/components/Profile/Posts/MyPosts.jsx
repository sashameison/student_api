import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../reducers/ProfileReducer";


const MyPosts = (props) => {

    let items = props.postData.map((dialogs) => {
        return (
            <div>
                <ProfileInfo text={dialogs.text} src={dialogs.src}/>
                <Post name={dialogs.name} age={dialogs.age}
                      like={dialogs.like}/>
            </div>
        )
    })

    let newPostEl = React.createRef();
    let onButtonClick = () => {
        let result = newPostEl.current.value;
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (

        <div className={s.posts}>
            My Posts
            <div>
                New Post
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostEl}
                          value={props.newPostText}/>
                <button onClick={onButtonClick} className={s.button}>Add post
                </button>
            </div>
            {items}
        </div>
    )
}

export default MyPosts


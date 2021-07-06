import React from "react";
import profileStyles from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";


const Profile = (props) => {
    return (

        <div className={profileStyles.content}>
            <MyPosts postData={props.state.postData}
                      newPostText={props.state.newPostText}
                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile
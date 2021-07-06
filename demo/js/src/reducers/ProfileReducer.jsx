const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        {
            id: 1,
            name: "Sasha",
            like: 15,
            age: 19,
            text: "Hello it`s first post",
            src: "https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608?k=6&m=1129638608&s=612x612&w=0&h=8OhKQCq_elLsW_PAWA4n8pzQy3mlkf5a_ztp2Nbv8Y8="
        },
        {
            id: 2,
            name: "Masha",
            like: 25,
            age: 19,
            text: "Hello it`s second post",
            src: "https://eadn-wc03-196922.nxedge.io/cdn/wp-content/uploads/2018/10/young-attractive-woman.jpg"
        },
        {
            id: 3,
            name: "Alina",
            like: 11,
            age: 19,
            text: "Hello it`s third post",
            src: "https://markmanson.net/wp-content/uploads/2014/08/beautiful-woman.png"
        },
        {
            id: 4,
            name: "Sveta",
            like: 22,
            age: 19,
            text: "Hello it`s fourth post",
            src: "http://st.depositphotos.com/1005833/2249/i/450/depositphotos_22499805-Portrait-of-young-beautiful-girl.jpg"
        }],
    newPostText: ''


}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: "Petya",
                like: 0,
                age: 19,
                text: state.newPostText,
                src: "https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608?k=6&m=1129638608&s=612x612&w=0&h=8OhKQCq_elLsW_PAWA4n8pzQy3mlkf5a_ztp2Nbv8Y8="
            };

            state.postData.push(newPost);
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })

export default profileReducer;
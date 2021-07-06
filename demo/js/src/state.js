import profileReducer from "./reducers/ProfileReducer";

let store = {
    _state: {
        profilePage: {
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

        },
        dialogPage: {
            dialogs: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Masha"},
                {id: 3, name: "Andrey"},
                {id: 4, name: "Vitya"}],
            messages: [
                {message: "Hi 0"},
                {message: "Hi 2"},
                {message: "Hi 3"},
                {message: "Hi 4"}
            ],
            message: ''
        },
        friends: {
            info: [
                {name: 'Sasha'},
                {name: 'Misha'},
                {name: 'Max'},
                {name: 'Victoria'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    callSubscriber() {
        console.log("Rerender")
    },
    addMessage() {

        let newMessage =
            {message: this._state.dialogPage.message}

        this._state.dialogPage.messages.push(newMessage);
        this._state.dialogPage.message = ''
        this.callSubscriber(this._state)

    },
    updateNewMessages(newMessage) {
        this._state.dialogPage.message = newMessage
        this.callSubscriber(this._state)
    },
    addPost() {
        let newPost = {
            id: 5,
            name: "Petya",
            like: 0,
            age: 19,
            text: this._state.profilePage.newPostText,
            src: "https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608?k=6&m=1129638608&s=612x612&w=0&h=8OhKQCq_elLsW_PAWA4n8pzQy3mlkf5a_ztp2Nbv8Y8="
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = ''
        this.callSubscriber(this._state)
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state)
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this.callSubscriber(this._state)
    }


}


export default store
window.store = store



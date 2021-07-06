import {combineReducers} from "redux";
import profileReducer from "../reducers/ProfileReducer";
import dialogReducer from "../reducers/DialogsReducer";
import sideBarReducer from "../reducers/SidebarReducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebarPage: sideBarReducer

});
let store = createStore(profileReducer);

export default store
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './state'
import reduxStore from "./redux/ReduxStore"
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={reduxStore}
                     // addPost={store.addPost.bind(store)}
                     // updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewMessages={store.updateNewMessages.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

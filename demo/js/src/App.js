import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <div className='app-writer'>
            <Header/>
            <Navbar state={props.state.friends.info}/>
            <div className={'app-writer-content'}>
                {/*Старый вариант через компонент нельзя прокидывать props*/}

                {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
                {/*<Route path={'/profile'} component={Profile}/>*/}
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>

                {/* Вариант через рендер можно прокидывать props*/}
                <Route path={'/profile'} render={() => <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch}
                    // addPost={props.addPost}
                    // updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           state={props.state.dialogPage}
                           addMessage={props.addMessage}
                           updateNewMessages={props.updateNewMessages}
                           newMessage={props.state.dialogPage.message}
                       />}/>

            </div>
        </div>

    );
}

export default App;


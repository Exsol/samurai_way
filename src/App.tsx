import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {dispatchActionType, messagePageType, profilePageType, sideBarType, stateType} from './redux/redux-store';



type appPropsType={
    store: stateType
    dispatch: (action:dispatchActionType) => void
}
function App(props:appPropsType) {
    console.log(props)
    //debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendsList={props.store.sideBar.friends}/>
                {/*<Navbar friendsList={props.store.state.sideBar.friends}/>*/}
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ ()=><Profile dispatch={props.dispatch} postData={props.store.profilePage} />}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/dialogs' render={ ()=><Dialogs dispatch={props.dispatch} messageText={props.store.messageDataPage.newMessageText} messageData={props.store.messageDataPage.messageData} dialogsData={props.store.messageDataPage.dialogsData}/> }/>
                </div>



            </div>
        </BrowserRouter>
    );
}

export default App;

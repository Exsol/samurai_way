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
import {storeType} from './redux/state';

type appPropsType={
    store:storeType;
}
function App(props:appPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendsList={props.store._state.sideBar.friends}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ ()=><Profile dispatch={props.store.dispatch.bind(props.store)}  postData={props.store._state.profilePage} />}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/dialogs' render={ ()=><Dialogs messageData={props.store._state.messageDataPage.messageData} dialogsData={props.store._state.messageDataPage.dialogsData}/> }/>
                </div>



            </div>
        </BrowserRouter>
    );
}

export default App;

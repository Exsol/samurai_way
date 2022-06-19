import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {
    dispatchActionType, storeType
} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';



type appPropsType={
    store: storeType
    dispatch: (action:dispatchActionType) => void
}
function App(props:appPropsType) {

    let state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendsList={state.sideBar.friends}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ ()=><Profile store={props.store} />}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/dialogs' render={ ()=><DialogsContainer store={props.store}/> }/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

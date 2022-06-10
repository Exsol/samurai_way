import React from 'react';
import './index.css';
import state, {addPost, stateType, subscribe, updateNewPostTest} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';


let rerender = ()=> {
    ReactDOM.render(
        <App addPost={addPost} updateNewPostTest={updateNewPostTest} state={state}/>,
        document.getElementById('root')
    );
}
rerender()
subscribe(rerender)
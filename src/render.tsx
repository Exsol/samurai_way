import ReactDOM from 'react-dom';
import App from './App';
import {addPost, stateType, updateNewPostTest} from './redux/state';
import React from 'react';

export const rerender = (state:stateType)=> {
    ReactDOM.render(
        <App addPost={addPost} updateNewPostTest={updateNewPostTest} state={state}/>,
        document.getElementById('root')
    );
}

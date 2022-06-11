import ReactDOM from 'react-dom';
import App from './App';
import store, {stateType} from './redux/state';
import React from 'react';

export const rerender = ()=> {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

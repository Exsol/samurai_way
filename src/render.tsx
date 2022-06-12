import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import React from 'react';

export const rerender = ( )=> {
    ReactDOM.render(
        <App dispatch={store.dispatch.bind(store.getState())} store={store.getState()}/>,
        document.getElementById('root')
    );
}

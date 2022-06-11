import React from 'react';
import './index.css';
import store from './redux/state';
import {rerender} from './render';


// let rerender = (state:rerenderTypeProps) {
//     ReactDOM.render(
//             <App addPost={store.addPost} updateNewPostTest={store.updateNewPostTest} state={store.getState()}/>,
//         document.getElementById('root')
//     );
// }

store.subscribe(rerender)
rerender();
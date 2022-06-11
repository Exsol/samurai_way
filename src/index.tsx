import React from 'react';
import './index.css';
import store from './redux/state';
import {rerender} from './render';

store.subscribe(rerender)
rerender();
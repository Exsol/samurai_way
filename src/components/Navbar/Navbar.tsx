import React, {Component} from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendList from '../Dialogs/Friends/FriendList';
import {friendType} from '../../redux/redux-store';



type navbarType = {
    friendsList: Array<friendType>
}
const Navbar = (props: navbarType) => {
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></div>
                <div className={`${s.item} ${s.active}`}><NavLink activeClassName={s.active}
                                                                  to="/dialogs">Messages</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to="/news">News</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to="/music">Music</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></div>
            </nav>
            <FriendList friendsList={props.friendsList}/>
        </div>
    );

}


export default Navbar;
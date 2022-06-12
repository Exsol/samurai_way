import React from 'react';
import s from './Friend.module.css';
import {friendType} from '../../../../redux/redux-store';



type frindTypeProps={
    friend: friendType
}

const Friend = (props:frindTypeProps) => {
    return (
        <div key={props.friend.id} className={s.item}>
            <div className={s.avatar}><img src={props.friend.avatar} alt={props.friend.name} /></div>
            <div className={s.name}>{props.friend.name}</div>
        </div>
    );
};

export default Friend;
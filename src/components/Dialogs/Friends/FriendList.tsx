import React from 'react';
import Friend from './FriendList/Friend';
import s from './FriendList.module.css';
import {friendType} from '../../../redux/state';

type FriendListType={
    friendsList: Array<friendType>
}
const FriendList = (props:FriendListType) => {

    const FriendList = props.friendsList.map( (e)=><Friend key={e.id} friend={e} />)

    return (
        <div>
            <h2 className={s.title}>Friends</h2>
            <div className={s.row}>
                {FriendList}
            </div>
        </div>
    );
};

export default FriendList;
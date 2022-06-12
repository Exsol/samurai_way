import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {dispatchActionType, profilePageType} from '../../redux/redux-store';



type profileTypeProps = {
    postData: profilePageType
    dispatch: (action:dispatchActionType)=>void
};

const Profile = (props:profileTypeProps) => {
        return (
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts dispatch={props.dispatch} newPostText={props.postData.newPostText} postData={props.postData}/>
            </div>
        );

}

export default Profile;
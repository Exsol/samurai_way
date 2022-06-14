import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {storeType} from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';



type profileTypeProps = {
    store:storeType
};

const Profile = (props:profileTypeProps) => {

        return (
            <div className={s.content}>
                <ProfileInfo/>
                <MyPostsContainer store={props.store}/>
            </div>
        );

}

export default Profile;
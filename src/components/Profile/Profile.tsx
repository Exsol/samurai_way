import React, {Component} from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddPostFunctionType, profilePageType, updateNewPostTestType} from '../../redux/state';


type profileTypeProps = {
    postData: profilePageType
    addPost: AddPostFunctionType
    updateNewPostTest: updateNewPostTestType
};

const Profile = (props:profileTypeProps) => {
        return (
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts addPost={props.addPost} updateNewPostTest={props.updateNewPostTest} newPostText={props.postData.newPostText} postData={props.postData}/>
            </div>
        );

}

export default Profile;
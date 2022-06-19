import React from 'react';
import {addPostAction, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {storeType} from '../../../redux/redux-store';


type MyPostsContainerType ={
    store:storeType
}

const MyPostsContainer = (props:MyPostsContainerType) => {
    let state=props.store.getState();

    const onChangeText = (text: string) => {
        props.store.dispatch(updateNewPostTextCreator(text))
    }
    const addPost = () => {
        props.store.dispatch(addPostAction())
    }
    return (
     <MyPosts addPost={addPost} updateNewPostText={onChangeText}  postData={state.profilePage} newPostText={state.profilePage.newPostText} />
    );
};

export default MyPostsContainer;
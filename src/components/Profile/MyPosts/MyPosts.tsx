import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {AddPostFunctionType, profilePageType, updateNewPostTestType} from '../../../redux/state';


type myPostsPropsType = {
    postData: profilePageType
    addPost: AddPostFunctionType
    newPostText: string
    updateNewPostTest: updateNewPostTestType
}

const MyPosts = (props: myPostsPropsType) => {
    let postDataElements: JSX.Element[] = props.postData.postData.map(post => <Post key={post.id} message={post.post}
                                                                           likecouns={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = ()=>{
        if( newPostElement.current){
            props.addPost()
        }
    }

    const onChangeTextaret = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostTest(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <div>
                <h3> my post</h3>
            </div>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onChangeTextaret} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postDataElements}
            </div>
        </div>
    );

}

export default MyPosts;

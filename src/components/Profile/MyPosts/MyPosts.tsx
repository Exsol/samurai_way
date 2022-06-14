import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { profilePageType} from '../../../redux/redux-store';



type myPostsPropsType = {
    postData: profilePageType
    newPostText: string;
    updateNewPostText: (text:string)=>void
    addPost: ()=>void
}

const MyPosts = (props: myPostsPropsType) => {
    let postDataElements: JSX.Element[] = props.postData.postData.map(post => <Post key={post.id} message={post.post}
                                                                                    likecouns={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {

            props.addPost();

    }
    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={s.postsBlock}>
            <div>
                <h3> my post</h3>
            </div>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onChangeTextarea} ref={newPostElement}></textarea>
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

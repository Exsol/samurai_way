import React from 'react';
import s from './Post.module.css';

type messageType={
    message: string,
    likecouns: number,
}

const Post = (props:messageType) => {
    return (
        <div className={s.item}>
            <img src='https://img1.freepng.ru/20180430/tbe/kisspng-computer-icons-avatar-user-profile-5ae6ea07935304.3879901915250826316035.jpg' />
            {props.message}
            <div>
                Likes: {props.likecouns}
            </div>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};


export default Post;
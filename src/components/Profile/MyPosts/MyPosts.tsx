import React, {Component} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

class MyPosts extends Component {
    render() {
        return (
            <div>
                <div>
                    my post
                </div>
                <div>
                    <textarea></textarea>
                    <button>Добавить</button>
                    <button>Удалить</button>
                </div>
                <div>
                    <Post message={'How are you?'} likecouns={10}/>
                    <Post message={'Hello world'} likecouns={1}/>

                </div>
            </div>
        );
    }
}

export default MyPosts;

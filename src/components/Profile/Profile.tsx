import React, {Component} from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
class Profile extends Component {
    render() {
        return (
            <div className={s.content}>
                <div>
                    <img src="https://lative-oboi.ru/image/catalog/product/36751.jpg"/>
                </div>
                <div>
                    ava
                </div>
                <MyPosts/>
            </div>
        );
    }
}

export default Profile;
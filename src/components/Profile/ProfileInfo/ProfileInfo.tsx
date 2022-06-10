import React from 'react';
import s from "./ProfileInfo.module.css"
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://lative-oboi.ru/image/catalog/product/36751.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava
            </div>
        </div>
    );
};

export default ProfileInfo;
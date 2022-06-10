import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

type dialogType={
    name: string
    id:number
}
const DialogItem = (props:dialogType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
import React from 'react';
import s from './Message.module.css'
type messageType={
    message: string
    itsMy: boolean
    avatar: string
}
const Message = (props:messageType) => {
    const istMyClass = props.itsMy ? s.myMessage : "";

    return (
        <div className={`${s.message } ${istMyClass}`}><span><img src={props.avatar} /></span><span>{props.message}</span></div>
    );
};

export default Message;
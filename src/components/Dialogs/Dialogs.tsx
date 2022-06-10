import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';
import {AddPostFunctionType, dialogsDataType, messageDataType} from '../../redux/state';
import Button from '../Elements/Button/Button';




type dialogTypeProps={
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>

}
const Dialogs = (props:dialogTypeProps) => {

    let dialogsElement:JSX.Element[] = props.dialogsData.map(dialog=><DialogItem key={dialog.id} name={dialog.name} id={dialog.id} /> )
    let messageElements:JSX.Element[] = props.messageData.map(message=><Message key={message.id} avatar={message.avatar} itsMy={message.itsMy} message={message.message}  /> )


    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
      //  if (newPostElement.current) props.addPost(newPostElement.current.value);

    }

    return (
        <div className={s.dialogs}>

                <div className={s.dialogs_item}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    <div className={s.message_row}>
                     {messageElements}
                    </div>
                    <div className={s.add_message}>
                        <textarea ref={newPostElement} ></textarea>
                        <Button name={"Add post"} callback={addPost}/>
                    </div>
                </div>


        </div>
    );
};

export default Dialogs;
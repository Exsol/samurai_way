import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';
import Button from '../Elements/Button/Button';
import {AddMessageCreator, updateNewMessageActionCreators} from '../../redux/messages-reducer';
import {dialogsDataType, dispatchActionType, messageDataType, storeType} from '../../redux/redux-store';



type dialogTypeProps={
    newPostElement: ()=>void
    addMessage: (message:string)=>void
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
    messageText:string
}
const Dialogs = (props:dialogTypeProps) => {

    let dialogsElement:JSX.Element[] = props.dialogsData.map(dialog=><DialogItem key={dialog.id} name={dialog.name} id={dialog.id} /> )
    let messageElements:JSX.Element[] = props.messageData.map(message=><Message key={message.id} avatar={message.avatar} itsMy={message.itsMy} message={message.message}  /> )

    const addMessage=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.addMessage(e.currentTarget.value)
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        props.newPostElement()
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
                        <textarea onChange={addMessage} value={props.messageText} ref={newPostElement}></textarea>
                        <Button name={"Add post"} callback={sendMessage}/>
                    </div>
                </div>
        </div>
    );
};

export default Dialogs;
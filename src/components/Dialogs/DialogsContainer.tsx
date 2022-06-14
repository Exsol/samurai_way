import React from 'react';

import {AddMessageCreator, updateNewMessageActionCreators} from '../../redux/messages-reducer';
import {storeType} from '../../redux/redux-store';
import Dialogs from './Dialogs';



type dialogTypeProps={
    store: storeType

    // dialogsData: Array<dialogsDataType>
    // messageData: Array<messageDataType>
    // dispatch:(action:dispatchActionType)=>void
    // messageText:string
}
const DialogsContainer = (props:dialogTypeProps) => {
    let state = props.store.getState()

    const onAddMessage=(message:string)=>{
        console.log(message)
        props.store.dispatch(updateNewMessageActionCreators(message))
    }


    const sendMessage = () => {
        props.store.dispatch(AddMessageCreator())
    }
    return (
            <Dialogs addMessage={onAddMessage}
                     newPostElement={sendMessage}
                     messageText={state.messageDataPage.newMessageText}
                     dialogsData={state.messageDataPage.dialogsData}
                     messageData={state.messageDataPage.messageData}
            />
    );
};

export default DialogsContainer;
import {dispatchActionType, messagePageType} from './state';

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const messagesReducer = (state:messagePageType, action:dispatchActionType) =>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message
            break;
        case ADD_MESSAGE:
            const newMessage={id:new Date().getTime(), message: state.newMessageText, itsMy: true, avatar: 'https://aretek.ru/images/pages/why4.png'}
            state.messageData.push(newMessage)
            state.newMessageText = ''
            break;
        default: return state;
    }
}
export type addMessageActionTypes = ReturnType<typeof AddMessageCreator>
export type updateNewPostTextActionTypes = ReturnType<typeof updateNewMessageActionCreators>
export type messagesReducerActionTypes = addMessageActionTypes | updateNewPostTextActionTypes;



export const AddMessageCreator = ()=>{
    return{
        type:ADD_MESSAGE,
    } as const
}
export const updateNewMessageActionCreators = (message:string)=>{
    return{
        type:UPDATE_NEW_MESSAGE_TEXT,
        message:message
    } as const
}

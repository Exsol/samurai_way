import {dispatchActionType, messagePageType} from './redux-store';


const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState={
    messageData: [
        {
            id: 1,
            message: 'How are you',
            itsMy: true,
            avatar: 'https://img1.freepng.ru/20180430/tbe/kisspng-computer-icons-avatar-user-profile-5ae6ea07935304.3879901915250826316035.jpg'
        },
        {id: 2, message: 'What you do', itsMy: false, avatar: 'https://aretek.ru/images/pages/why4.png'},
        {
            id: 3,
            message: 'yol',
            itsMy: true,
            avatar: 'https://img1.freepng.ru/20180430/tbe/kisspng-computer-icons-avatar-user-profile-5ae6ea07935304.3879901915250826316035.jpg'
        },
        {id: 4, message: 'yol my', itsMy: false, avatar: 'https://aretek.ru/images/pages/why4.png'},
    ],
    dialogsData: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Dmitrii'},
        {id: 5, name: 'Vova'}
    ],
    newMessageText: '',
}
export const messagesReducer = (state:messagePageType = initialState, action:dispatchActionType) =>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message
            return state
            break;
        case ADD_MESSAGE:
            const newMessage={id:new Date().getTime(), message: state.newMessageText, itsMy: true, avatar: 'https://aretek.ru/images/pages/why4.png'}
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
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

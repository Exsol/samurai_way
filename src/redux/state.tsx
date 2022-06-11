const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export type dispatchActionType =  addPostActionType | updateNewPostTextActionType | addNewMessageActionType | updateMessageTextActionType;
type addPostActionType = ReturnType<typeof addPostActionCreator>
type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextCreator>
type addNewMessageActionType = ReturnType<typeof addMessageActionCreator>
type updateMessageTextActionType = ReturnType<typeof updateNewMessageActionCreator>


export const addPostActionCreator = ()=>{
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextCreator = (newText:string)=>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText:newText
    } as const
}


export const addMessageActionCreator = ()=>{
    return{
        type:ADD_MESSAGE,
    } as const
}

export const updateNewMessageActionCreator = (message:string)=>{
    return{
        type:UPDATE_NEW_MESSAGE_TEXT,
        message:message
    } as const
}


export type AddPostFunctionType = () => void
export type updateNewPostTestType = (text: string) => void
export type dialogsDataType = {
    id: number,
    name: string
}
export type messageDataType = {
    id: number
    message: string
    itsMy: boolean
    avatar: string
}
export type postDataType = {
    id: number
    post: string
    likesCount: number
}
export type profilePageType = {
    postData: Array<postDataType>
    newPostText: string
}
export type friendType = {
    id: number
    name: string
    avatar: string
}
type sideBarType = {
    friends: Array<friendType>
}
type messagePageType = {
    messageData: Array<messageDataType>
    dialogsData: Array<dialogsDataType>
    newMessageText: string
}
export type stateType = {
    profilePage: profilePageType
    messageDataPage: messagePageType
    sideBar: sideBarType
}
export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action:dispatchActionType) => void
}

let store: storeType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'How are you', likesCount: 12},
                {id: 2, post: 'Hello world', likesCount: 2},
                {id: 3, post: 'test', likesCount: 0}
            ],
            newPostText: '',
        },
        messageDataPage: {
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
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Viktor', avatar: 'https://aretek.ru/images/pages/why4.png'},
                {id: 2, name: 'Ivan', avatar: 'https://aretek.ru/images/pages/why4.png'},
                {id: 3, name: 'Vova', avatar: 'https://aretek.ru/images/pages/why4.png'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('rerender')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: new Date().getTime(),
                    post: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.postData.unshift(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.messageDataPage.newMessageText = action.message
                this._callSubscriber()
                break;
            case ADD_MESSAGE:
                const newMessage={id:new Date().getTime(), message: this._state.messageDataPage.newMessageText, itsMy: true, avatar: 'https://aretek.ru/images/pages/why4.png'}
                this._state.messageDataPage.messageData.push(newMessage)
                this._state.messageDataPage.newMessageText = ''
                this._callSubscriber()
                break;
            default:
                return action;
        }
    }
}



export default store
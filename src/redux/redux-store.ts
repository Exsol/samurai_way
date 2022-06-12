import {combineReducers, createStore } from "redux";
import {profileReducer, profileReducerTypes} from './profile-reducer';
import {messagesReducer, messagesReducerActionTypes} from './messages-reducer';
import {sidebarReducer} from './sidebar-reducer';


export type dispatchActionType =  profileReducerTypes|messagesReducerActionTypes;

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
export type sideBarType = {
    friends: Array<friendType>
}
export type messagePageType = {
    messageData: Array<messageDataType>
    dialogsData: Array<dialogsDataType>
    newMessageText: string
}
export type stateType = {
    messageDataPage: messagePageType
    profilePage: profilePageType

    sideBar: sideBarType

}
export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action:dispatchActionType) => void
}


let reducers = combineReducers({
    profilePage:profileReducer,
    messageDataPage:messagesReducer,
    sideBar:sidebarReducer,
});

export type storeReduxType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber?: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action:dispatchActionType) => void
    replaceReducer: (a:any)=>void
}

let store:storeType = createStore(reducers);

export default store
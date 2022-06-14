import {dispatchActionType, profilePageType} from './redux-store';


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState ={
            postData: [
                {id: 1, post: 'How are you', likesCount: 12},
                {id: 2, post: 'Hello world', likesCount: 2},
                {id: 3, post: 'test', likesCount: 0}
            ],
            newPostText: '',
}
export const profileReducer = (state:profilePageType = initialState, action:dispatchActionType) =>{
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 0,
            }
            state.postData.unshift(newPost)
            state.newPostText = ''
            return state
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
            break;
        default: return state;
    }
    //return state;
}

export type addPostActionType = ReturnType<typeof addPostAction>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextCreator>
export type profileReducerTypes = addPostActionType|updateNewPostTextActionType


export const addPostAction = ()=>{
    return {
        type: ADD_POST
    }as const
}
export const updateNewPostTextCreator = (newText:string)=>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText:newText
    }as const
}




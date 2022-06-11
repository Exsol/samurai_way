import {dispatchActionType, profilePageType} from './state';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state:profilePageType, action:dispatchActionType) =>{
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 0,
            }
            state.postData.unshift(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
        default: return state;
    }
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




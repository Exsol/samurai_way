import { sideBarType } from "./redux-store";

const DEFAULT = "DEFAULT"
let initialState={
    friends: [
        {id: 1, name: 'Viktor', avatar: 'https://aretek.ru/images/pages/why4.png'},
        {id: 2, name: 'Ivan', avatar: 'https://aretek.ru/images/pages/why4.png'},
        {id: 3, name: 'Vova', avatar: 'https://aretek.ru/images/pages/why4.png'}
    ]
}

export const sidebarReducer = (state:sideBarType = initialState,action?:any) =>{
    switch (action.type) {
        case DEFAULT:
            return state;
            break;
        default: return state;
    }
}
let rerender = ()=>{

}
export const subscribe = (observer:() => void) => {
    rerender = observer
}

export type AddPostFunctionType = ()=>void
export type updateNewPostTestType = (text:string)=>void

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
type sideBarType={
    friends:Array<friendType>
}
type messagePageType = {
    messageData: Array<messageDataType>
    dialogsData: Array<dialogsDataType>
}
export type stateType = {
    profilePage: profilePageType
    messageDataPage: messagePageType
    sideBar: sideBarType
}
let state: stateType = {
    profilePage: {
        postData: [
            {id: 1, post: 'How are you', likesCount: 12},
            {id: 2, post: 'Hello world', likesCount: 2},
            {id: 3, post: 'test', likesCount: 0}
        ],
        newPostText: "",
    },
    messageDataPage: {
        messageData: [
            {id: 1, message: 'How are you',itsMy:true,avatar:"https://img1.freepng.ru/20180430/tbe/kisspng-computer-icons-avatar-user-profile-5ae6ea07935304.3879901915250826316035.jpg"},
            {id: 2, message: 'What you do',itsMy:false,avatar:"https://aretek.ru/images/pages/why4.png"},
            {id: 3, message: 'yol',itsMy:true,avatar:"https://img1.freepng.ru/20180430/tbe/kisspng-computer-icons-avatar-user-profile-5ae6ea07935304.3879901915250826316035.jpg"},
            {id: 4, message: 'yol my',itsMy:false,avatar:"https://aretek.ru/images/pages/why4.png"},
        ],
        dialogsData: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Viktor'},
            {id: 3, name: 'Valera'},
            {id: 4, name: 'Dmitrii'},
            {id: 5, name: 'Vova'}
        ],
    },
    sideBar:{
        friends:[
             {id:1,name:"Viktor",avatar:"https://aretek.ru/images/pages/why4.png"},
            {id:2,name:"Ivan",avatar:"https://aretek.ru/images/pages/why4.png"},
            {id:3,name:"Vova",avatar:"https://aretek.ru/images/pages/why4.png"}
        ]
    }
}

export const addPost = ()=>{
    const newPost = {
        id:123,
        post:state.profilePage.newPostText,
        likesCount:0,
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText=""
    rerender()
}
export const  updateNewPostTest = (text:string) =>{
    state.profilePage.newPostText= text
    rerender()
}

export default state
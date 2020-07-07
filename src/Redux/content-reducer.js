import {getProfile, profileAPI, setUnfollow} from "../API/api";
import {addFollow, setFollowingInProgress} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT'
const GET_USER_INFO = 'GET_USER-INFO'
const REQUESTED_USER_ID = 'REQUESTED-USER_ID'
const GET_STATUS='GET-STATUS'
const UPDATE_STATUS='UPDATE-STATUS'
const is_Fetching = 'is-Fetching'

let initialState = {
    myPosts: [
        {
            id: '1',
            from: 'Elena',
            message: 'It is first post',
            date: '25.06.20',
            like: '25'
        },
        {
            id: '2',
            from: 'Alice',
            message: 'Today is funny day',
            date: '25.06.20',
            like: '28'
        },
        {
            id: '3',
            from: 'Elena',
            message: 'Today is boring day',
            date: '26.06.20',
            like: '8'
        }
    ],
    newPostText: 'enter here',
    userInfo: null,
    requestUserId: 10,
    status: '',
    isFetching: false
}

 const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return  {
               ...state,
               myPosts: [...state.myPosts, {id: '4', from: 'Elena', message: state.newPostText, date: '25.06.20', like: '0'}],
               newPostText: ''
           }


          break;}
       case ADD_NEW_POST_TEXT: {
           return  {
               ...state,
               newPostText: action.newText
           }

          break;}
        case REQUESTED_USER_ID: {
            return {
                ...state,
                requestUserId: action.id
            }
            break;
        }
        case GET_USER_INFO: {
            let copyUserInfo = action.userInfo
            debugger
            return {
                ...state,
                userInfo: copyUserInfo
            }
            break;
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case is_Fetching: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
       default:
          return state;
    }


    return state
}
export const addPostActionCreator = () => {

   return (
       {
          type: ADD_POST
       }
   )
}
export const addNewPostTextActionCreator = (text) => {
   return (
       {
          type: ADD_NEW_POST_TEXT,
          newText: text

       }
   )
}
export const getUserInfoActionCreator = (userInfo) => {
    return (
        {
            type: GET_USER_INFO,
            userInfo: userInfo

        }
    )
}
export const addRequestedUserIdActionCreator = (id) => {
    return (
        {
            type: REQUESTED_USER_ID,
            id: id

        }
    )
}
export const getStatusActionCreator = (status) => {
    return (
        {
            type: GET_STATUS,
            status: status

        }
    )
}

export const isFetchingActionCreator = (isFetching) => {
    debugger
    return ({
        type: is_Fetching,
        isFetching: isFetching
    })
}


export const getProfileThunkCreator = (userID) => {
    return (dispatch) => {
        getProfile(userID)
            .then(data => {
                dispatch(getUserInfoActionCreator(data))
            })
    }
}

export const getStatusThunkCreator = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID)
            .then(data => {
                dispatch(getStatusActionCreator(data.data))
debugger
            })
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        dispatch(isFetchingActionCreator(true))
        profileAPI.updateStatus(status)
            .then(data => {
                dispatch(getStatusActionCreator(status))
                debugger
            })
        dispatch(isFetchingActionCreator(false))
    }
}



export default contentReducer
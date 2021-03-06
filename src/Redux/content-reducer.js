import {getProfile, profileAPI, setUnfollow} from "../API/api";
import {addFollow, setFollowingInProgress} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT'
const GET_USER_INFO = 'GET_USER-INFO'
const REQUESTED_USER_ID = 'REQUESTED-USER_ID'
const GET_STATUS='GET-STATUS'
const UPDATE_STATUS='UPDATE-STATUS'
const is_Fetching = 'is-Fetching'
const update_Photo = 'update_Photo'
const update_DetailsInfo='update_DetailsInfo'

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
    isFetching: false,
    profilePhoto: ''
}

 const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return  {
               ...state,
               myPosts: [...state.myPosts, {id: '4', from: 'Elena', message: action.newPost, date: '25.06.20', like: '0'}],
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
            return {
                ...state,
                userInfo: copyUserInfo,
                profilePhoto: copyUserInfo.photos.small
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
        case update_Photo: {

            return {
                ...state,
                profilePhoto: action.profilePhoto
            }
        }
        case update_DetailsInfo: {

            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    aboutMe: action.details.aboutMe,
                    lookingForAJobDescription: action.details.lookingForAJobDescription
                }
            }
        }
       default:
          return state;
    }


    return state
}
export const addPostActionCreator = (newPost) => {

   return (
       {
          type: ADD_POST,
          newPost: newPost
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

    return ({
        type: is_Fetching,
        isFetching: isFetching
    })
}

const updatePhoto = (profilePhoto) => {
    return ({
        type: update_Photo,
        profilePhoto: profilePhoto
    })

}

const updateProfileDetails = (details) => {
    return ({
        type: update_DetailsInfo,
        details: details
    })
}

export const getProfileThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(isFetchingActionCreator(true))
        getProfile(userID)
            .then(data => {
                dispatch(getUserInfoActionCreator(data))
            })
        dispatch(isFetchingActionCreator(false))
    }
}

export const getStatusThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(isFetchingActionCreator(true))
        profileAPI.getStatus(userID)
            .then(data => {
                dispatch(getStatusActionCreator(data.data))
                dispatch(isFetchingActionCreator(false))
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

export const changeProfilePhotoOnServerTC = (file) => {
    return (dispatch) => {
        dispatch(isFetchingActionCreator(true))
        profileAPI.setPhotoOnServer(file)
            .then(data => {

                dispatch(updatePhoto(data.data.photos.small))
            })
        dispatch(isFetchingActionCreator(false))
    }
}
export const changeProfileDetailsOnServerTC = (details, userID, fullName) => {
    return (dispatch) => {
        profileAPI.setProfileDetailsOnServer(details, userID, fullName)
            .then(data => {
                dispatch(getProfileThunkCreator(userID))
            })
    }
}



export default contentReducer
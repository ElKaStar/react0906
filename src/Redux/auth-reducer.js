import {getUserData, profileAPI} from "../API/api";


const GET_USER_ID = 'GET-USER-ID';
const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userID: null,
    email: null,
    password: null,
    isFetching: false,
    isAuth: false,
    login: null

}

const authReducer = (state = initialState, action) => {
console.log(action.type, action)
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData
            }
            break
        }
        case GET_USER_ID: {
            return state.userID
        }

        default:
            return state;
    }
}


export const setUserDataActionCreator = (userID, email, password, isAuth, login) => {
    console.log(userID, email, password, isAuth)
    return (
        {
            type: SET_USER_DATA,
            userData: { userID, email, password, isAuth, login}

        }
    )
}

export const getUserIDActionCreator = () => {
    return (
        {
            type: GET_USER_ID
        }
    )
}

export const getUserDataThunkCreator = () => {
    return (dispatch) => {
        getUserData().then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserDataActionCreator(response.data.id, response.data.email, null , true,  response.data.login))
            }
        })

    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        profileAPI.login(email, password, rememberMe).then(response => {
            console.log('thunkcreator login')
            if (response.resultCode === 0) {
                console.log(response)
                dispatch(getUserDataThunkCreator())
            }
        })

    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        profileAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserDataActionCreator(null, null, null, false))
            }
        })

    }
}


export default authReducer
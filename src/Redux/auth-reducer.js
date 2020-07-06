import {getUserData} from "../API/api";


const GET_USER_ID = 'GET-USER-ID';
const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userID: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData,
                isAuth: true
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


export const setUserDataActionCreator = (userID, email, login) => {
    return (
        {
            type: SET_USER_DATA,
            userData: { userID, email, login}

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
                dispatch(setUserDataActionCreator(response.data.id, response.data.email, response.data.login ))
            }
        })

    }
}


export default authReducer
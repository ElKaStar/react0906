import {getUserData, profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {getUserDataThunkCreator} from "./auth-reducer";


const SET_INIT_APP = 'SET-INIT-APP';


let initialState = {
    isInitApp: false

}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INIT_APP: {
            return {
                ...state,
                isInitApp: action.isInitApp
            }
            break
        }
        default:
            return state;
    }
}


export const setInitAppActionCreator = (isInitApp) => {
    return (
        {
            type: SET_INIT_APP,
            isInitApp: isInitApp

        }
    )
}


export const isInitAppThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(getUserDataThunkCreator())
        Promise.all([promise])
            .then(() => {
            dispatch(setInitAppActionCreator(true))
            }
        )
    }
}

export default appReducer
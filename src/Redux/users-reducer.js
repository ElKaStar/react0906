import {getUsers, setFollow, setUnfollow} from "../API/api";


const NEXT_USERS = 'NEXT-USERS';
const LAST_USERS = 'LAST-USERS';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_FETCHING = 'SET-FETCHING';
const GET_CURRENT_USER_ID = 'GET-CURRENT-USER-ID'
const SET_FOLLOWING_IN_PROGRESS = 'SET-FOLLOWING-IN-PROGRESS'


let initialState = {
    users: [],
    pagingSize: 4,
    startPosition: 0,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    currentUserID: 2,
    followingInProgress: [9069]

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEXT_USERS: {

            if (state.currentPage <= Math.ceil(state.totalUsersCount/state.pagingSize)) { return {
                ...state,
                currentPage: state.currentPage + 1
            }} else {
                alert("Пользователей больше нет")
                return state
            }
        }
        case LAST_USERS: {
            if (state.currentPage > 1) {return {
                ...state,
                currentPage: state.currentPage - 1
            }} else {
                alert("Это начало списка")
                return state
            }
        }
        case FOLLOW: {
           let copyUsers = [...state.users]
            copyUsers.map((item) => {
                if (item.id === action.id) {
                   item.follow = !item.follow
                }
            } )
            return {
               ...state,
                users: copyUsers
            }
        }
        case SET_USERS: {
           let copyUsers = [...action.newUsers]
           let copyState = {
                ...state,
                users: copyUsers,
               totalUsersCount: action.totalUsersCount
            }
            return copyState;
        }
        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.newCurrentPage
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case GET_CURRENT_USER_ID: {
            return {
                ...state,
                currentUserID: action.currentUserID
            }
        }
        case SET_FOLLOWING_IN_PROGRESS: {
const myArr = state.followingInProgress.filter((id) => id !== action.id)
            console.log(myArr)
            return {
                ...state,
                followingInProgress: action.isFetching?
                    [...state.followingInProgress, action.id]
                    :state.followingInProgress.filter((id) => id !== action.id)
            }
        }
        default:
            return state;
    }


    return state
}
export const showNextUsers = () => {

    return (
        {
            type: NEXT_USERS
        }
    )
}
export const showLastUsers = () => {

    return (
        {
            type: LAST_USERS
        }
    )
}

export const addFollow = (id) => {

    return (
        {
            type: FOLLOW,
            id: id
        }
    )
}

export const setUsers = (newUsers, totalUsersCount) => {

    return (
        {
            type: SET_USERS,
            newUsers: newUsers,
            totalUsersCount: totalUsersCount
        }
    )
}

export const setCurrentPage = (newCurrentPage) => {

    return (
        {
            type: SET_CURRENT_PAGE,
            newCurrentPage: newCurrentPage
        }
    )
}

export const setFetching = (isFetching) => {

    return (
        {
            type: SET_FETCHING,
            isFetching: isFetching
        }
    )
}

export const getCurrentUserID = (id) => {
debugger
    return (
        {
            type: GET_CURRENT_USER_ID,
            currentUserID: id
        }
    )
}

export const setFollowingInProgress = (isFetching, id) => {
    return (
        {
            type: SET_FOLLOWING_IN_PROGRESS,
            isFetching: isFetching,
            id: id
        }
    )
}
export const getUsersThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {

        dispatch(setFetching(true))
        getUsers(pageNumber, pageSize).then(response => {

            let newArrUsers = []
            response.items.map((item) => {
                newArrUsers.push({
                    id: item.id,
                    name: item.name,
                    message: (item.status === null ? '' : item.status),
                    url: item.photos.small,
                    follow: item.followed
                })
            })
            dispatch(setUsers(newArrUsers, response.totalCount))
            dispatch(setFetching(false))
        })
    }
}

export const setFollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, id))
        setFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(addFollow(id))
            }
            dispatch(setFollowingInProgress(false, id))
        })
    }
}

export const setUnfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, id))
        setUnfollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(addFollow(id))
            }
            dispatch(setFollowingInProgress(false, id))
        })
    }
}



export default usersReducer
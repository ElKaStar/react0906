import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.users.users;

}

export const getPageSize = (state) => {
    return state.users.pagingSize;

}

export const getStartPosition = (state) => {
    return state.users.startPosition;

}
export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount;

}
export const getCurrentPage = (state) => {
    return state.users.currentPage;

}
export const getIsFetching = (state) => {
    return state.users.isFetching;

}
export const getCurrentUserIDS = (state) => {
    return state.users.currentUserID;

}
export const getFollowingInProgress = (state) => {
    return state.users.followingInProgress;

}

export const getIsAuth = (state) => {
    return state.auth.isAuth;

}
export const getUserSpecial = createSelector( getUsers,(users) => {

    return users.filter(u => true)

})
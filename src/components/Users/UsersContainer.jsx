import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {
    addFollow, getCurrentUserID, getUsersThunkCreator,
    setCurrentPage,
    setFetching, setFollowingInProgress, setFollowThunkCreator, setUnfollowThunkCreator,
    setUsers,
    showLastUsers,
    showNextUsers
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Loader from './loader'
import User from "./User";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



class UserClass extends React.Component  {

    constructor(props) {
        super(props);

    }

    getUsersFromServer = (pageNumber, pageSize) => {
        this.props.getUsersThunkCreator(pageNumber, pageSize);
    }

    componentDidMount() {
        this.getUsersFromServer(this.props.currentPage,this.props.pagingSize)
    }

    onPageChanged = (itemNumber) => {
        this.props.setCurrentPage(itemNumber)
        this.getUsersFromServer(itemNumber,this.props.pagingSize)
    }
 setCurrentUserID = (id) => {
        this.props.getCurrentUserID(id)
 }


    onClickNextHandler = (nextPage) => {

        this.props.showNextUsers()
        this.getUsersFromServer(nextPage,this.props.pagingSize)
    }

    onClickLastHandler = (lastPage) => {

        this.props.showLastUsers()
        this.getUsersFromServer(lastPage,this.props.pagingSize)
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount/this.props.pagingSize)
        let arrPages = []
        for (let i=1; i<= pageCount; i++) {
            arrPages.push(i)
        }
        //let newUsers = this.props.users.slice(this.props.startPosition, this.props.startPosition + this.props.pagingSize)


            return (
                <div>
                    {this.props.isFetching ? <Loader/> : <Users pageCount={pageCount}
                                                                arrPages={arrPages}
                                                                userPage={this.props}
                                                                onClickLastHandler={this.onClickLastHandler}
                                                                onClickNextHandler={this.onClickNextHandler}
                                                                onPageChanged={this.onPageChanged}
                                                                setCurrentUserID={this.setCurrentUserID}
                                                                setFollowingInProgress={this.props.setFollowingInProgress}
                                                                setFollowThunkCreator={this.props.setFollowThunkCreator}
                                                                setUnfollowThunkCreator={this.props.setUnfollowThunkCreator}

                    />}
                </div>)
        }



}

let mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.users.users,
        pagingSize: state.users.pagingSize,
        startPosition: state.users.startPosition,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        currentUserID: state.users.currentUserID,
        followingInProgress: state.users.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         showNextUsers: () => {dispatch(showNextUsersActionCreator())},
//         showLastUsers: () => {dispatch(showLastUsersActionCreator())},
//         addFollow: (id) => {dispatch(addFollowActionCreator(id))},
//         setUsers: (newUsers, totalUsersCount) => {dispatch(addNewUsersActionCreator(newUsers, totalUsersCount))},
//         setCurrentPage: (newCurrentPage) => {dispatch(setCurrentPageActionCreator(newCurrentPage))},
//         setFetching: (isFetching) => {dispatch(setFetchingActionCreator(isFetching))}
//     }
// }

//let AuthRedirectComponent = withAuthRedirect(UserClass)



//const UsersContainer = connect(mapStateToProps,
//     {
//         showNextUsers,
//         showLastUsers,
//         addFollow,
//         setUsers,
//         setCurrentPage,
//         setFetching,
//         getCurrentUserID,
//         setFollowingInProgress,
//         getUsersThunkCreator,
//         setFollowThunkCreator,
//         setUnfollowThunkCreator
//     }
//     )(AuthRedirectComponent)

const UsersContainer = compose(
    connect(mapStateToProps,
        {
            showNextUsers,
            showLastUsers,
            addFollow,
            setUsers,
            setCurrentPage,
            setFetching,
            getCurrentUserID,
            setFollowingInProgress,
            getUsersThunkCreator,
            setFollowThunkCreator,
            setUnfollowThunkCreator}),
            withAuthRedirect
)(UserClass)

export default UsersContainer
import React from 'react'
import Content from "../Content";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    addRequestedUserIdActionCreator, changeProfileDetailsOnServerTC, changeProfilePhotoOnServerTC,
    getProfileThunkCreator, getStatusThunkCreator,
    getUserInfoActionCreator, isFetchingActionCreator, updateStatusThunkCreator
} from "../../../Redux/content-reducer";
import Loader from "./../../Users/loader";
import {Redirect, Route} from 'react-router-dom'
import {withRouter} from "react-router-dom";
import {getProfile, usersAPI} from "../../../API/api";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let userID = (!this.props.match.params.UserID ? this.props.authUserID : this.props.match.params.UserID)
        if (!userID) {
            this.props.history.push('/login')
        }
        console.log('userID', userID)
        this.props.getProfileThunkCreator(userID)
        this.props.getStatusThunkCreator(userID)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.match.params.UserID !== this.props.match.params.UserID) {
            let currentUserID = this.props.match.params.UserID
            this.props.getProfileThunkCreator(!currentUserID ? this.props.authUserID : currentUserID)
            this.props.getStatusThunkCreator(!currentUserID ? this.props.authUserID : currentUserID)
        }
    }

    render() {
        if (this.props.isFetching) {
            return <Loader/>
        }
        return (
            <div>
                {this.props.userInfo === null ? <Loader/> : <Content {...this.props}/>}
            </div>
        )


    }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileClass)

let mapStateToProps = (state) => {
    console.log(state);
    return {
        userInfo: state.myPosts.userInfo,
        requestUserId: state.myPosts.requestUserId,
        authUserID: state.auth.userID,
        status:state.myPosts.status,
        isFetching: state.myPosts.isFetching,
        currentUserID: state.users.currentUserID,
        profilePhoto: state.myPosts.profilePhoto

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (userInfo) => {dispatch(getUserInfoActionCreator(userInfo))},
        addRequestedUserId: () => {dispatch(addRequestedUserIdActionCreator())},
        getProfileThunkCreator: (userID) => {dispatch(getProfileThunkCreator(userID))},
        getStatusThunkCreator: (userID) => {dispatch(getStatusThunkCreator(userID))},
        updateStatusThunkCreator: (status) => {dispatch(updateStatusThunkCreator(status))},
        changeProfilePhotoOnServer: (files) => {dispatch(changeProfilePhotoOnServerTC(files))},
        changeProfileDetailsOnServer: (details, userID, fullName) => {dispatch(changeProfileDetailsOnServerTC(details, userID, fullName))}
         }
}
const ProfileContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileClass)

//let withRouterDataContainerComponent = withRouter(AuthRedirectComponent)
//const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(withRouterDataContainerComponent)

export default ProfileContainer
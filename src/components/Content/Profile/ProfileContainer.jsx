import React from 'react'
import Content from "../Content";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    addRequestedUserIdActionCreator,
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
        console.log(this.props)
        //console.log(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentUserID}`)
        let userID = (!this.props.match.params.UserID? this.props.authUserID : this.props.match.params.UserID)
       this.props.getProfileThunkCreator(userID)
        this.props.getStatusThunkCreator(userID)

    }

    render() {

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
        isFetching: state.myPosts.isFetching

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (userInfo) => {dispatch(getUserInfoActionCreator(userInfo))},
        addRequestedUserId: () => {dispatch(addRequestedUserIdActionCreator())},
        getProfileThunkCreator: (userID) => {dispatch(getProfileThunkCreator(userID))},
        getStatusThunkCreator: (userID) => {dispatch(getStatusThunkCreator(userID))},
        updateStatusThunkCreator: (status) => {dispatch(updateStatusThunkCreator(status))}
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
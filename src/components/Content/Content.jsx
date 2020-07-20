import React from "react";
import '../../index.css'
import classes from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../Users/loader";


const Content = (props) => {

        return (
            <div>
                {props.isFetching? <Loader/> : <Profile isOwnPage={!props.match.params.UserID? true: props.authUserID == props.match.params.UserID} userInfo={props.userInfo} changeProfilePhotoOnServer={props.changeProfilePhotoOnServer} currentUserID={props.currentUserID} profilePhoto={props.profilePhoto} status={props.status} updateStatus={props.updateStatusThunkCreator} updateDetails={props.changeProfileDetailsOnServer}/>}
                <MyPostsContainer />
            </div>
        )
    }



export default Content
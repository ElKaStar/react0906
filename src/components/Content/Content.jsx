import React from "react";
import '../../index.css'
import classes from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../Users/loader";


const Content = (props) => {
console.log(props)

        return (
            <div>
                {props.isFetching? <Loader/> : <Profile userInfo={props.userInfo} status={props.status} updateStatus={props.updateStatusThunkCreator}/>}
                <MyPostsContainer />
            </div>
        )
    }



export default Content
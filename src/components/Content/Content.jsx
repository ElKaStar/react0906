import React from "react";
import '../../index.css'
import classes from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Content = (props) => {
console.log(props)

        return (
            <div>
                <Profile userInfo={props.userInfo}/>
                <MyPostsContainer />
            </div>
        )
    }



export default Content
import React from "react";
import {addPostActionCreator,addNewPostTextActionCreator} from './../../../Redux/content-reducer'
import MyPosts from "./MyPosts";
import store from "../../../Redux/redux-store";
import {connect} from "react-redux";
import Dialogs from "../Dialogs/Dialogs";
import {addMessageActionCreator, addNewMessageTextActionCreator} from "../../../Redux/message-reducer";


let mapStateToProps = (state) => {
    return {
        myPosts: state.myPosts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {dispatch(addPostActionCreator(newPost))},
        addNewPostText: (text) => {dispatch(addNewPostTextActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

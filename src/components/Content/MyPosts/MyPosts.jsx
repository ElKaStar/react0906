import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator,addNewPostTextActionCreator} from './../../../Redux/content-reducer'


const MyPosts = (props) => {
console.log(props)

    let newRef = React.createRef()

    let onClickHandler = () => {
    props.addPost()
       // props.dispatch(addPostActionCreator())
        newRef.current.value = ''
    }

    let onClickRemoveHandler = () => {
        newRef.current.value = ''
    }

    let onChangeHandler = (e) => {
    props.addNewPostText(e.target.value)
       //props.dispatch(addNewPostTextActionCreator(e.target.value))
    }

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div className={classes.item}>
                <textarea placeholder='enter your message here' onChange={onChangeHandler} id='newPost' ref={newRef} value={props.profilePage.newPostText}/>
                <button onClick={onClickHandler}>Add post</button>
                <button onClick={onClickRemoveHandler}>Remove</button>
            </div>
            <div className={classes.item}>
            <Post myPosts={props.profilePage.myPosts}/>
            </div>
        </div>
    )
}


export default MyPosts

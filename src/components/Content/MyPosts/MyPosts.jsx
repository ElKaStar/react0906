import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import NewPost from "../../Forms/FormNewPost";


const MyPosts = React.memo(props => {

    console.log(props)

    let newRef = React.createRef()

    let onClickHandler = (value) => {
        props.addPost(value)

    }

    let onClickRemoveHandler = () => {
        newRef.current.value = ''
    }

    let onChangeHandler = (value) => {
        props.addNewPostText(value)
        //props.dispatch(addNewPostTextActionCreator(e.target.value))
    }

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div className={classes.item}>
                <NewPost {...props} onClickHandler={onClickHandler}/>
            </div>
            <div className={classes.item}>
                <Post myPosts={props.profilePage.myPosts}/>
            </div>
        </div>
    )
})


export default MyPosts

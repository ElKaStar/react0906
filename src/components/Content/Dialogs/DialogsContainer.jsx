import React from 'react'
import {addNewMessageTextActionCreator, addMessageActionCreator} from "../../../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
return {
    addMessage: () => {dispatch(addMessageActionCreator())},
    addNewMessageText: (text) => {dispatch(addNewMessageTextActionCreator(text))}
}
}
const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

//let AuthRedirectComponent = withAuthRedirect(Dialogs)
//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer
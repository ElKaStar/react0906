import React from 'react'
import '../../index.css'
import * as axios from "axios";
import c from './Header.module.css'
import {NavLink} from "react-router-dom";
import Header from "./Header";
import {addRequestedUserIdActionCreator, getUserInfoActionCreator} from "../../Redux/content-reducer";
import {getUserDataThunkCreator, logoutThunkCreator, setUserDataActionCreator} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import usersAPI from "../../API/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getCurrentUserID} from "../../Redux/users-reducer";

class HeaderClass extends React.Component {

constructor(props) {
    super(props);
}


    render() {

        return (
            <header className={c.header}>
            <Header {...this.props}/>
            </header>
        )
    }

}


let mapStateToProps = (state) => {

    return {
        userID: state.auth.userID,
        email: state.auth.email,
        login: state.auth.login,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userID, email, login) => {dispatch(setUserDataActionCreator(userID, email, login))},
        getUserDataThunkCreator: () => {dispatch(getUserDataThunkCreator())},
        logout: () => {dispatch(logoutThunkCreator())},
        getCurrentUserID: (ID) => {dispatch(getCurrentUserID(ID))}
    }
}
const HeaderContainer = compose(
    connect(mapStateToProps,mapDispatchToProps)
)(HeaderClass)

//const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderClass)

export default HeaderContainer
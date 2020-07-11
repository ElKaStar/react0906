import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Navbar from './components/Havbar/Havbar'
import Content from './components/Content/Content'
import Dialogs from './components/Content/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import MyPostsContainer from "./components/Content/MyPosts/MyPostsContainer";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Forms/login";
import {getUserDataThunkCreator} from "./Redux/auth-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {isInitAppThunkCreator} from "./Redux/app-reducer";
import Loader from "./components/Users/loader";

class App extends React.Component {

    componentDidMount() {
        this.props.isInitAppThunkCreator()
    }

    render() {

        if (!this.props.isInitApp) {
          return   (<Loader/>)
        }

        return (

            <div className='wrapper'>
                <HeaderContainer store={this.props.store}/>
                <Navbar/>
                <div>
                    <Route path='/messages' render={() => <DialogsContainer store={this.props.store}/>}/>
                    <Route path='/profile/:UserID?' render={() => <ProfileContainer store={this.props.store}/>}/>
                    <Route path='/users' render={() => <UsersContainer store={this.props.store}/>}/>
                    <Route path='/login' render={() => <Login store={this.props.store}/>}/>
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {

    return {
        isInitApp: state.app.isInitApp
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        isInitAppThunkCreator: () => {dispatch(isInitAppThunkCreator())},
    }
}

export default compose(
        withRouter,
        connect(mapStateToProps,mapDispatchToProps))(App)

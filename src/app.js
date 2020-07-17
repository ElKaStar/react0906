import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Navbar from './components/Havbar/Havbar'
import Content from './components/Content/Content'
import Dialogs from './components/Content/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import MyPostsContainer from "./components/Content/MyPosts/MyPostsContainer";
import Users from "./components/Users/Users";
//import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Forms/login";
import {getUserDataThunkCreator} from "./Redux/auth-reducer";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {isInitAppThunkCreator} from "./Redux/app-reducer";
import Loader from "./components/Users/loader";
import store from "./Redux/redux-store";

const DialogsContainer = React.lazy(() => import( "./components/Content/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import( "./components/Users/UsersContainer"));

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
                    <Route path='/messages' render={() => {
                        return (<React.Suspense fallback={<div>Loading...</div>}>
                        <DialogsContainer store={this.props.store}/>
                        </React.Suspense>)
                    }}/>
                    <Route path='/profile/:UserID?' render={() => <ProfileContainer store={this.props.store}/>}/>
                    <Route path='/users' render={() => {
                        return (
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <UsersContainer store={this.props.store}/>
                            </React.Suspense>)
                                }}/>
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
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,mapDispatchToProps))(App)

let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp

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
import Login from "./components/Login/login";


const App = (props) => {


    return (

        <div className='wrapper'>
        <HeaderContainer store={props.store}/>
        <Navbar/>
        <div>
        <Route path='/messages' render={ () => <DialogsContainer store={props.store}/> }/>
        <Route path='/profile/:UserID?'  render={ () => <ProfileContainer store={props.store} /> }/>
        <Route path='/users'    render={ () => <UsersContainer store={props.store}/>}/>
        <Route path='/login'    render={ () => <Login store={props.store}/>}/>
        </div>
        </div>

    )}


export default App
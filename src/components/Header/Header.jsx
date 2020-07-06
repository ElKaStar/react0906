import React from 'react'
import '../../index.css'
import c from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {
    console.log(props);
    return (

        <div className={c.header}>
            <img src='https://www.freelogodesign.org/Content/img/logo-samples/bakary.png' alt='logo'/>
            <div className={c.login_block}>
                {props.isAuth?
                    <NavLink to={'/profile/'+ props.userID}>{props.login}</NavLink>
                    : <NavLink to={'/login'}>Sign in</NavLink>}
            </div>
        </div>

    )
}

export default Header
import React from 'react'
import '../../index.css'
import c from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {


    return (

        <div className={c.header}>
            <img src='https://www.freelogodesign.org/Content/img/logo-samples/bakary.png' alt='logo'/>
            <div className={c.login_block}>
                {props.isAuth?
                    <div>
                        <NavLink to={'/profile/'+ props.userID}>
                        <div>{props.login}</div>
                        </NavLink>
                    <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Sign in</NavLink>}
            </div>
        </div>

    )
}

export default Header
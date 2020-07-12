import React from 'react'
import '../../index.css'
import c from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {


    return (

        <div className={c.header}>
            <img src='https://www.freelogodesign.org/Content/img/logo-samples/bakary.png' alt='logo'/>
            <div className={c.login_block}>
                {props.isAuth ?
                    <div className={c.loginItems}>
                        <div className={c.item}>
                        <NavLink to={'/profile/' + props.userID}>
                            {"Home page"}
                        </NavLink>
                        </div>
                        <div className={c.item}>
                        <span onClick={props.logout}>Log out</span>
                        </div>
                    </div>
                    : <NavLink to={'/login'}>Sign in</NavLink>}
            </div>
        </div>

    )
}

export default Header
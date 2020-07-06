import React from 'react'
import '../../index.css'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className='navigate'>
                <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
            <NavLink to='/messages' activeClassName={classes.active}>Messages</NavLink>
                </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
            </div>
                <div className={classes.item}>
            <NavLink to='news' activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='music' activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='settings' activeClassName={classes.active}>Settings</NavLink>
                </div>
        </nav>
    )
}
export default Navbar
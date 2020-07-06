import React from 'react'
import st from './../Dialogs.module.css'
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    return (
        <div className={st.item}>
            <NavLink to={'/messages/' + props.id} activeClassName={st.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
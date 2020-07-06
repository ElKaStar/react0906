import React from 'react'
import st from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Login from "../../Login/login";


const Dialogs = (props) => {
console.log(props)
    let newRef = React.createRef()

    let onClickHandler = () => {
        props.addMessage()
    }

    let onChangeHandler = (e) => {
        props.addNewMessageText(e.target.value)
    }


    return (

                <div className={st.dialogs}>
                    <div className={st.dialogs_items}>
                        {props.profilePage.profilePage.myUsers.map((element) => {
                            return (
                                <div key={element.id}>
                                    <DialogItem name={element.name} id={element.id}/>
                                </div>
                            )
                        })}

                    </div>
                    <div className={st.messages}>
                        <textarea placeholder='enter here' onChange={onChangeHandler} id='newMessage' ref={newRef}
                                  value={props.profilePage.newMessageText}/>
                        <button onClick={onClickHandler}>Send</button>
                        {props.profilePage.profilePage.allMessages.map((element) => {
                            return (
                                <div key={element.id}>
                                    <Message
                                        item={element.date + ' From ' + element.from + ' to ' + element.to + ' : ' + element.message}/>
                                </div>
                            )
                        })}

                    </div>
                </div>

    )
}
export default Dialogs
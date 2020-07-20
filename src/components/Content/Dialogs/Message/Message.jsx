import React from 'react'
import st from './Message.module.css'



const Message = (props) => {
    return (
        <div className={st.message_item}>{props.item}
        <button>...</button>
        </div>

    )
}


export default Message
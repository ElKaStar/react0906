import React from 'react'
import st from './loader.module.css'

const Loader = () => {

    return (
        <div className={st.lds_default}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Loader
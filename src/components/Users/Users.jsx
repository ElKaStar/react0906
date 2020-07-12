import React from 'react'
import st from './Users.module.css'
import User from "./User";
import * as axios from 'axios'
import Loader from "./loader";

let Users = (props) => {
    console.log(props)


    return (
        <div className={st.users}>

                {(props.userPage.users.length === 0 ? <Loader/> :
                    <User users={props.userPage.users}
                          addFollow={props.userPage.addFollow}
                          setCurrentUserID={props.setCurrentUserID}
                          setFollowingInProgress = {props.setFollowingInProgress}
                          followingInProgress={props.userPage.followingInProgress}
                          setFollowThunkCreator={props.setFollowThunkCreator}
                          setUnfollowThunkCreator={props.setUnfollowThunkCreator}

                    />)}
                <div className={st.paginationButtons}>
                <div>
                    <span className={st.paginationButton} onClick={() => {
                        props.onClickLastHandler(props.userPage.currentPage - 1)
                    }}>{"<"}</span>
                </div>
                <div>
                    {props.arrPages.map((itemNumber) => {
debugger
                            if (itemNumber <=   props.userPage.currentPage + 2 && itemNumber >=   props.userPage.currentPage - 2) {
                                return (
                            <span onClick={() => {
                                props.onPageChanged(itemNumber)
                            }}
                                  className={itemNumber === props.userPage.currentPage? st.selectedPage: st.paginationButton }>{itemNumber}</span>
                    )
                    }})}
                </div>
                <div>
                    <span className={st.paginationButton} onClick={() => {
                        props.onClickNextHandler(props.userPage.currentPage + 1)
                    }}> {">"} </span>
                </div>
                </div>
        </div>
    )

}

export default Users
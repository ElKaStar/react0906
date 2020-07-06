import React from 'react'
import st from './Users.module.css'
import User from "./User";
import * as axios from 'axios'
import Loader from "./loader";

let Users = (props) => {
    console.log(props)


    return (
        <div className={st.users}>
            <div>
                {(props.userPage.users.length === 0 ? <Loader/> :
                    <User users={props.userPage.users}
                          addFollow={props.userPage.addFollow}
                          setCurrentUserID={props.setCurrentUserID}
                          setFollowingInProgress = {props.setFollowingInProgress}
                          followingInProgress={props.userPage.followingInProgress}
                          setFollowThunkCreator={props.setFollowThunkCreator}
                          setUnfollowThunkCreator={props.setUnfollowThunkCreator}

                    />)}
                <div className={st.buttons}>
                    <button onClick={() => {
                        props.onClickLastHandler(props.userPage.currentPage - 1)
                    }}>Last
                    </button>
                    <button onClick={() => {
                        props.onClickNextHandler(props.userPage.currentPage + 1)
                    }}>Next
                    </button>
                </div>
                <div>
                    {props.arrPages.map((itemNumber) => {
                        return (
                            <span onClick={() => {
                                props.onPageChanged(itemNumber)
                            }}
                                  className={itemNumber === props.userPage.currentPage && st.selectedPage}>{itemNumber} </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default Users
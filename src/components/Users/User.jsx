import React from 'react'
import st from './User.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {setFollow, setUnfollow, usersAPI} from "../../API/api";

const User = (props) => {

    console.log(props);

    return (
        <div>
            {props.users.map((item) => {
                return (
                    <div key={item.id} className={st.item_row}>
                        <div className={st.item_column}>
                            <NavLink to={'/profile/' + item.id}>
                                <img className={st.avatarUser} onClick={() =>


                                    props.setCurrentUserID(item.id)}
                                     src={(item.url === null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3nLvF-yfAyZEiTtHRIYlq1bXrtscjd-mUJA&usqp=CAU' : item.url)}
                                     alt='avatarUsers'/>
                            </NavLink>
                            <button disabled={props.followingInProgress.some(id => id == item.id)} value={item.id} onClick={() => {

                                if (!item.follow) {
                                    console.log(item.follow)
                                   props.setFollowThunkCreator(item.id)

                                } else {
                                    props.setUnfollowThunkCreator(item.id)
                                }

                            }}>
                                {(item.follow ? 'Unfollow' : 'Follow')}
                            </button>
                        </div>
                        <div>
                            <div className={st.item_column}>
                                {item.name}
                                <div className={st.item}>
                                    {item.message}<br/>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default User
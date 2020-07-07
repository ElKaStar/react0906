import React from 'react'
import st from './Profile.module.css'
import userLogo from './../../../../src/image/userlogo.png'
import ProfileStatus from "../../Users/ProfileStatus";


const Profile = (props) => {
   console.log(props);
    return (
        <div className={st.content}>

            <div className={st.item}>
                <img src={(props.userInfo.photos.small===null? userLogo: props.userInfo.photos.small)} alt='user-logo'/>
                <div>
                    <p>{props.userInfo.fullName}</p>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <h>{props.userInfo.aboutMe}</h><br/>
                    <text>Job status: {props.userInfo.lookingForAJobDescription} </text>
                </div>
            </div>
        </div>

    )

}


export default Profile
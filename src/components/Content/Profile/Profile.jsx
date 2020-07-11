import React from 'react'
import st from './Profile.module.css'
import userLogo from './../../../../src/image/userlogo.png'
import ProfileStatus from "../../Users/ProfileStatus";


class Profile extends React.Component {


    render() {

        return (
            <div className={st.content}>

                <div className={st.item}>
                    <img src={(this.props.userInfo.photos.small === null ? userLogo : this.props.userInfo.photos.small)}
                         alt='user-logo'/>
                    <div>
                        <p>{this.props.userInfo.fullName}</p>
                        <ProfileStatus status={this.props.status} updateStatus={this.props.updateStatus}/>
                        <h>{this.props.userInfo.aboutMe}</h>
                        <br/>
                        <text>Job status: {this.props.userInfo.lookingForAJobDescription} </text>
                    </div>
                </div>
            </div>

        )

    }
}


export default Profile
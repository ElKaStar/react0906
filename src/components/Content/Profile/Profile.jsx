import React from 'react'
import st from './Profile.module.css'
import userLogo from './../../../../src/image/userlogo.png'
import ProfileStatus from "../../Users/ProfileStatus";
import ProfileStatusWithHooks from "../../Users/ProfileStatusWithHooks";


class Profile extends React.Component {


    render() {

        return (
            <div className={st.content}>
                <div className={st.contentLeft}>
                    <div className={st.item}>
                        <img
                            src={(this.props.userInfo.photos.small === null ? userLogo : this.props.userInfo.photos.small)}
                            alt='user-logo'/>
                    </div>
                    <div className={st.nameItem}>
                        <p>{this.props.userInfo.fullName}</p>
                    </div>
                </div>
                <div className={st.contentRight}>
                    <div className={st.status}>
                        <ProfileStatusWithHooks status={this.props.status} updateStatus={this.props.updateStatus}/>
                    </div>
                    <div className={st.statusPersonal}>
                        <h>About personality:{this.props.userInfo.aboutMe}</h>
                    </div>
                    <div className={st.statusJob}>
                        <text>About job: {this.props.userInfo.lookingForAJobDescription} </text>
                    </div>

                </div>
            </div>

        )

    }
}


export default Profile
import React, {useEffect, useState} from 'react'
import st from './Profile.module.css'
import userLogo from './../../../../src/image/userlogo.png'
import ProfileStatus from "../../Users/ProfileStatus";
import ProfileStatusWithHooks from "../../Users/ProfileStatusWithHooks";
import FormDetailsInfo from "../../Forms/FormDetailsInfo";


const Profile =(props) => {
    console.log(props);
    let [editMode, setEditMode] = useState(false)
    let [userInfoaboutMe, setUserInfoaboutMe] = useState(props.userInfo.aboutMe)
    let [userInfolookingForAJobDescription, setUserInfolookingForAJobDescription] = useState(props.userInfo.lookingForAJobDescription)
    let [possibilityToChangeFile, setPossibilityToChangeFile] = useState(props.isOwnPage)
    let [profilePhoto, setProfilePhoto] = useState(!props.profilePhoto ? props.userInfo.photos.small : props.profilePhoto)
    console.log("possibilityToChangeFile" ,possibilityToChangeFile)
    console.log("editMode" ,editMode)

    useEffect(() => {
        setProfilePhoto(props.profilePhoto)
        console.log("I have change editMode", editMode)
        console.log("I have change possibilityToChangeFile", possibilityToChangeFile)
    }, [props.profilePhoto])

    useEffect(() => {
        setUserInfoaboutMe(props.userInfo.aboutMe)
        setEditMode(false)
        console.log("I have change editMode", editMode)
        console.log("I have change possibilityToChangeFile", possibilityToChangeFile)
    }, [props.userInfo.aboutMe])

    useEffect(() => {
        setUserInfolookingForAJobDescription(props.userInfo.lookingForAJobDescription)
        setEditMode(false)
        console.log("I have change editMode", editMode)
        console.log("I have change possibilityToChangeFile", possibilityToChangeFile)
    }, [props.userInfo.lookingForAJobDescription])



    const onChangeMainPhoto = (e) => {
  props.changeProfilePhotoOnServer(e.target.files[0])
    }
console.log("ternary operation", possibilityToChangeFile&&!editMode)
        return (
            <div className={st.content}>
                <div className={st.contentLeft}>
                    <div className={st.item} >
                        <img className={st.item} onClick={() => setEditMode(!editMode)}
                            src={(profilePhoto === null ? userLogo : profilePhoto)}
                            alt='user-logo'/>
                    </div>
                    <div>{(possibilityToChangeFile&& editMode)&& <input type={"file"} value="" onChange={onChangeMainPhoto}/>}</div>
                    <div className={st.nameItem}>
                        <p>{props.userInfo.fullName}</p>
                    </div>
                </div>
                <div className={st.contentRight}>
                    <div className={st.status}>
                        <ProfileStatusWithHooks isOwnPage={props.isOwnPage} status={props.status}
                                                updateStatus={props.updateStatus}/>
                    </div>
                    {(possibilityToChangeFile&&editMode)? <ProfileDetailsForm updateDetails={props.updateDetails} {...props} detailsInfo={{aboutMe: userInfoaboutMe, lookingForAJobDescription: userInfolookingForAJobDescription}} ternaryOp={possibilityToChangeFile&&!editMode}/>
                      :  <ProfileDetailsInfo {...props} detailsInfo={{aboutMe: userInfoaboutMe, lookingForAJobDescription: userInfolookingForAJobDescription}} ternaryOp={possibilityToChangeFile&&!editMode}/> }

                </div>
            </div>

        )


}



const ProfileDetailsInfo = (props) => {
console.log("INFO",props.ternaryOp)
    return (
        <div>
            <div className={st.statusPersonal}>
                <h><b>About personality:</b>{props.detailsInfo.aboutMe}</h>
            </div>
            <div className={st.statusJob}>
                <text><b>About job:</b> {props.detailsInfo.lookingForAJobDescription} </text>
            </div>
        </div>
    )

}
const ProfileDetailsForm = (props) => {
    console.log("FORM", props.ternaryOp)
    return (
        <div>
            <FormDetailsInfo {...props}/>
        </div>
    )
}

export default Profile
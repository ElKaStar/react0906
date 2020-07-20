import React from 'react'
import {Field, reduxForm} from "redux-form";
import Post from "../Content/MyPosts/Post/Post";
import {alphaNumeric, minLength1, renderField, renderFieldNew, requiredString} from "./Validation";
import {connect} from "react-redux";


const DetailsInfo = (props) => {

 let initialValues = {
     personality: props.detailsInfo.aboutMe,
     job: props.detailsInfo.lookingForAJobDescription
 }


    const submit = values => {
        console.log(values);
        props.updateDetails(values, props.userInfo.userId, props.userInfo.fullName)
    }
        return <DetailsInfoReduxForm onSubmit={submit} {...props} initialValues={initialValues}/>


}

const DetailsInfoForm = (props) => {



    console.log(props);
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field label={"About personality"}
                           name={"personality"}
                           value={props.detailsInfo.aboutMe}
                           type="text"
                           component={renderField}
                    />
                    <Field label={"About job"}
                           name={"job"}
                           value={props.detailsInfo.lookingForAJobDescription}
                           type="text"
                           component={renderField}
                    />
                    <button type={"submit"}>Save</button>
                </div>
            </form>
        </div>

    )

}



const DetailsInfoReduxForm =  reduxForm({
    form: 'DetailsInfoForm', // a unique identifier for this form
    enableReinitialize: true
})(DetailsInfoForm)


export default DetailsInfo
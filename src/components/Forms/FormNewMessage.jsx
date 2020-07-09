import React from 'react'
import {Field, reduxForm} from "redux-form";
import Post from "../Content/MyPosts/Post/Post";
import {alphaNumeric, minLength1, renderField, requiredString} from "./Validation";


class NewMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    submit = values => {
        console.log(values);
        this.props.onClickHandler(values.newMessage)
        values.newMessage = ''
        // print the form values to the console
    }
    render() {
        return <NewMessageReduxForm onSubmit={this.submit}/>
    }

}

const NewMessageForm = (props) => {
    console.log(props);
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field label={"enter your message here"}
                           name={"newMessage"}
                           type="text"
                           component={renderField}
                           validate={[requiredString, minLength1]}
                           warn={alphaNumeric}
                    />
                    <button type={"submit"}>Send</button>
                </div>
            </form>
        </div>

    )

}


const NewMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'newMessageForm'
})(NewMessageForm)





export default NewMessage
import React from 'react'
import {Field, reduxForm} from "redux-form";
import Post from "../Content/MyPosts/Post/Post";
import {alphaNumeric, minLength1, renderField, requiredString} from "./Validation";


class NewPost extends React.Component {
    constructor(props) {
        super(props);
    }

    submit = values => {
        console.log(values);
        // print the form values to the console
        this.props.onClickHandler(values.newPost)
        values.newPost = ''

    }
    render() {
        return <NewPostReduxForm onSubmit={this.submit}/>
    }

}

const NewPostForm = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        label={"enter new post here"}
                        name={"newPost"}
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


const NewPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'NewPostForm'
})(NewPostForm)





export default NewPost
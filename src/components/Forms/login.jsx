import React from 'react'
import {Field, reduxForm} from "redux-form";
import {alphaNumeric, minLength1, renderField, requiredString} from "./Validation";
import ReCAPTCHA from "react-google-recaptcha";


class Login extends React.Component {

     submit = values => {
          // print the form values to the console
          console.log(values)
     }


     render() {

          return (
              <div>
              <LoginReduxForm onSubmit={this.submit}/>
              </div>
              )
     }

}

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedCaptcha : false
        }
    }



    onChangecaptcha = (value) => {
       this.setState({
           checkedCaptcha: (value? true: false)
       })
    }
render() {
     return (
         <div>
              <p>LOGIN</p>
              <form onSubmit={this.props.handleSubmit}>
                   <div>
                        <Field
                            label={"Login"}
                            name={"login"}
                            type="text"
                            component={renderField}
                            validate={[requiredString, minLength1]}
                            warn={alphaNumeric}
                        />
                   </div>
                   <div>
                        <Field
                            label={"Password"}
                            name={"password"}
                            type="text"
                            component={renderField}
                            validate={[requiredString, minLength1]}
                            warn={alphaNumeric}
                        />
                   </div>
                   <div>
                        <Field
                            name={"rememberMe"}
                            type={"checkbox"}
                            component={renderField}
                        />remember me
                   </div>
                   <div>
                        <button disabled={!this.state.checkedCaptcha} type={"submit"}>Login</button>
                       <ReCAPTCHA sitekey='6Le4-a8ZAAAAAAdxK3R8n7ntfVnbLYJqwT87stUC' onChange={this.onChangecaptcha}/>
                   </div>
              </form>
         </div>

     )
}

}


const LoginReduxForm = reduxForm({
     // a unique name for the form
     form: 'LoginForm'
})(LoginForm)





export default Login
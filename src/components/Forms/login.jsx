import React from 'react'
import {Field, reduxForm} from "redux-form";
import {alphaNumeric, minLength1, renderField, requiredString} from "./Validation";


class Login extends React.Component {

     submit = values => {
          // print the form values to the console
          console.log(values)
     }
     render() {
          return <LoginReduxForm onSubmit={this.submit} />
     }

}

const LoginForm = (props) => {
     const { handleSubmit } = props
     return (
         <div>
              <p>LOGIN</p>
              <form onSubmit={handleSubmit}>
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
                        <button type={"submit"}>Login</button>
                   </div>
              </form>
         </div>

     )

}


const LoginReduxForm = reduxForm({
     // a unique name for the form
     form: 'LoginForm'
})(LoginForm)





export default Login
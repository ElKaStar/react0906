import React from 'react'
import {Field, reduxForm} from "redux-form";
import {alphaNumeric, minLength1, renderField, requiredString} from "./Validation";
import ReCAPTCHA from "react-google-recaptcha";
import {connect} from "react-redux";
import {addMessageActionCreator, addNewMessageTextActionCreator} from "../../Redux/message-reducer";
import {loginThunkCreator, logoutThunkCreator} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


class Login extends React.Component {

     submit = values => {
         console.log(values)

          // print the form values to the console
          this.props.login(values.login, values.password, values.rememberMe)
     }
     componentDidUpdate(prevProps, prevState, snapshot) {
         console.log('login is DIDupdated ' + Date())
     }


    render() {
         console.log('props:', this.props)
         if (this.props.isAuth) {
             return <Redirect to={"/profile"}/>
         }
         //console.log('login is updated ' + Date())
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

                        />
                   </div>
                   <div>
                        <Field
                            label={"Password"}
                            name={"password"}
                            type={"password"}
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

let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(loginThunkCreator(email, password, rememberMe))
        },
        logout: () => {
            dispatch(logoutThunkCreator())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
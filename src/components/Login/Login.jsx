import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, "Email", "email", [required])}
      {createField(Input, "Password", "password", [required], {type: "password"})}
      {createField(Input, null, "rememberMe", [], {type: "checkbox"}, "remember me")}

      {error &&
      <div className={style.formSummaryError}>
        {error}
      </div>
      }

      <div>
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }
  console.log(props.isAuth)

  return <div className={s.loginForm}>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
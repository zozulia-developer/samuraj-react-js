import React from 'react';
import s from './Login.module.css';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
  return (
    <div className={s.wrapLogin}>
      <form className={s.loginForm} onSubmit={handleSubmit}>
        <span className={`${s.loginFormTitle} ${s.pb26}`}>Welcome</span>
        {createField(Input, "Email", "email", [required])}
        {createField(Input, "Password", "password", [required], {type: "password"})}
        {createField(Input, null, "rememberMe", [], {type: "checkbox"}, "Remember me")}

        {error &&
        <div className={style.formSummaryError}>
          {error}
        </div>
        }

        <div className={s.containerLoginFormBtn}>
          <div className={s.wrapLoginFormBtn}>
            <div className={s.loginFormBgBtn}></div>
            <button className={s.loginFormBtn}>Login</button>
          </div>
        </div>
      </form>
    </div>
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

  return <LoginReduxForm onSubmit={onSubmit}/>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
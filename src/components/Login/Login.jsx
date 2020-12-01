import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.input}>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div className={s.input}>
                <Field placeholder={"Password"} name={"password"} component={"input"} type={"password"}/>
            </div>
            <div className={s.input}>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            <div className={s.loginBtn}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;
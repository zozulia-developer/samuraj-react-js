import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.input}>
                <Field
                    component={Input}
                    placeholder={"Email"}
                    name={"email"}
                    validate={[required]}
                />
            </div>
            <div className={s.input}>
                <Field
                    component={Input}
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    validate={[required]}
                />
            </div>
            <div className={s.input}>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
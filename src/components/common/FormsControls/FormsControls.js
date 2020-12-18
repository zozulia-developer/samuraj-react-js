import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (component, placeholder, name, validators, props = {}, text = "") => {
    return <div className={`${styles.wrapInput} ${styles.validateInput}`}>
        <Field
            component={component}
            placeholder={placeholder}
            name={name}
            validate={validators}
            {...props}/>{text}
    </div>
}
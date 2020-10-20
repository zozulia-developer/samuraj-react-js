import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Василий" id="1"/>
                <DialogItem name="Леха" id="2" />
                <DialogItem name="Жека" id="3" />
            </div>
            <div className={s.messages}>
                <Message message="Hi!" />
                <Message message="Hello!" />
                <Message message="Ni hao!" />
            </div>
        </div>
    )
}

export default Dialogs;

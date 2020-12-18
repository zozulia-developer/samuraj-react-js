import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={`${s.chat} ${s.chatLeft}`}>
            <div className={s.chatUser}>
                <NavLink className="avatar m-0" to="/profile">
                    <img className={s.avatar35} src="https://www.nationalplasto.in/img/profile.png" alt="avatar" />
                </NavLink>
            </div>
            <div className={s.chatDetail}>
                <div className={s.chatMessage}>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;
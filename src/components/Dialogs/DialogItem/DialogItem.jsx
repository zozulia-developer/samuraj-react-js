import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <ul className={`${s.iqChatUi} nav flex-column nav-pills`}>
                <li>
                    <NavLink to={"/dialogs/" + props.id}>
                        <div className="d-flex align-items-center">
                            <div className={`${s.avatar} mr-2`}>
                                <img class={s.avatar50} src="https://www.nationalplasto.in/img/profile.png" alt="chat-user-img"/>
                            </div>
                            <div className={s.chatSidebarName}>
                                <h6 className="mb-0">{props.name}</h6>
                                <span>random message</span>
                            </div>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default DialogItem;
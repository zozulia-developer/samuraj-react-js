import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={`${s.chatContent} ${s.scroller}`}>
            <div className={`${s.chat} ${s.chatLeft}`}>
                <div className={s.chatUser}>
                    <a className="avatar m-0" href="#">
                        <img className={s.avatar35} src="https://www.nationalplasto.in/img/profile.png" alt="avatar"/>
                    </a>  
                </div>
                <div className={s.chatDetail}>
                    <div className={s.chatMessage}>
                        <p>{props.message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;
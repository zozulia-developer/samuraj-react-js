import React from 'react';
import s from './../Dialogs.module.css';

const MessageHeader = ({login}) => {
    return (
        <div className="chat-head">
            <header className="d-flex justify-content-between align-items-center bg-white pt-3 pr-3 pb-3">
                <div className="d-flex align-items-center">
                    <div className={`${s.avatar} ${s.chatUserProfile} m-0 mr-3`}>
                        <img className={s.avatar50} src="https://www.nationalplasto.in/img/profile.png" alt="avatar"/>
                    </div>
                    <h5 className="mb-0">{login}</h5>
                </div>
                <div className={`${s.chatUserDetailPopup} ${s.scroller}`}>

                </div>
                <div className={`${s.chatHeaderIcons} d-flex`}>

                </div>
            </header>
        </div>
    )
}

export default MessageHeader;
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessage = state.newMessageText;

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className="col-sm-12">
            <div className={s.iqCard}>
                <div className={`${s.iqCardBody} ${s.chatPage} p-0`}>
                    <div className={s.chatDataBlock}>
                        <div className="row">
                            <div className="col-lg-3 chat-data-left scroller">
                                <div className="chat-search pt-3 pl-3">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-profile mr-3">
                                            <img className={s.avatar60} src="https://www.nationalplasto.in/img/profile.png" alt="chat-user" />
                                        </div>
                                        <div className="chat-caption">
                                            <h5 className="mb-0">Test Info</h5>
                                            <p className="m-0">React Developer</p>
                                        </div>
                                    </div>
                                    <div className={`${s.chatSearchBar} mt-4`}>
                                        <div className="form-group chat-search-data m-0">
                                            <input id="chat-search" className="form-control round" type="text" placeholder="Поиск..." />
                                            <i className="re-search-line"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${s.chatSidebarChannel} ${s.scroller} mt-4 pl-3`}>
                                    <h5>Публичные Каналы</h5>
                                    <h5>Приватные Каналы</h5>
                                    <h5>Сообщения</h5>
                                    {dialogsElements}
                                </div>
                            </div>
                            <div className={`col-lg-9 ${s.chatData} p-0 chat-data-right`}>
                                <div className={s.tabContent}>
                                    <div className={s.messages}>
                                        {messagesElements}
                                        <div className={s.newMessage}>
                                            <div>
                                                <textarea
                                                    onChange={onMessageChange}
                                                    value={newMessage}
                                                    placeholder="Введите сообщение..."></textarea>
                                            </div>
                                            <div>
                                                <button onClick={onAddMessage}>Send message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

    let newMessage = props.state.newMessageText;

    let addMessage = () => {
        props.dispatch(addMessageCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextCreator(text);
        props.dispatch(action);
    }

    return (
        <div className="col-sm-12">
            <div className={s.iqCard}>
                <div className={`${s.iqCardBody} ${s.chatPage} p-0`}>
                    <div className={s.chatDataBlock}>
                        <div className="row">
                            <div className="col-lg-3 chat-data-left scroller">
                                <div className={s.dialogsItems}>
                                    {dialogsElements}
                                </div>
                            </div>
                            <div className="col-lg-9 chat-data p-0 chat-data-right">
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
                                            <button onClick={addMessage}>Send message</button>
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

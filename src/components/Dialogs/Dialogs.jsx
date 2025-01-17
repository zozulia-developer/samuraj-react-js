import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageHeader from './Message/MessageHeader';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to="/login" />

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
                      <h5 className="mb-0">{props.auth.login}</h5>
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
                  <div id="chatbox" className="tab-pane fade active show">
                    <MessageHeader login={props.auth.login}/>
                    <div className={`${s.chatContent} ${s.scroller}`}>
                      {messagesElements}
                    </div>
                    <div className="chat-footer p-3 bg-white">
                      <div className="d-flex align-items-center">
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field
            component={Input}
            name={"newMessageBody"}
            validate={[required, maxLength100]}
            className="form-control mr-3"
            type="text"
            placeholder="Введите сообщение..."
            size="120"/>
        <button className="btn btn-primary btn-lg btn-block">
          <span className="d-none d-lg-block ml-1">Отправить</span>
        </button>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;

import React from 'react';
import Dialogs from './Dialogs';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

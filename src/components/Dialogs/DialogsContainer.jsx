import React from 'react';
import Dialogs from './Dialogs';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            let onAddMessage = () => {
                store.dispatch(addMessageCreator());
            }

            let onMessageChange = (text) => {
                let action = updateNewMessageTextCreator(text);
                store.dispatch(action);
            }
            return <Dialogs
                updateNewMessageText={onMessageChange}
                addMessage={onAddMessage}
                dialogsPage={state} />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;

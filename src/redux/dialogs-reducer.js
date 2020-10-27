const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hello!' },
        { id: 3, message: 'Ni hao!' },
    ],
    newMessageText: '',
    dialogs: [
        { id: 1, name: 'Василий' },
        { id: 2, name: 'Леха' },
        { id: 3, name: 'Жека' },
    ],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default newsReducer;
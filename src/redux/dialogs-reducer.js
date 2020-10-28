const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Василий' },
        { id: 2, name: 'Леха' },
        { id: 3, name: 'Жека' },
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hello!' },
        { id: 3, message: 'Ni hao!' },
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, message: state.newMessageText }]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.newText };
        default:
            return state;
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;
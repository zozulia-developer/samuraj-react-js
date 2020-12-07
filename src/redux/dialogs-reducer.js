const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }]
            };
        default:
            return state;
    }
}

export const addMessageCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;
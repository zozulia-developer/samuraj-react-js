import {applyMiddleware, combineReducers, createStore} from 'redux';
import newsReducer from "./news-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    newsPage: newsReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
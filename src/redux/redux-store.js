import {combineReducers, createStore} from 'redux';
import newsReducer from "./news-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    newsPage: newsReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store;
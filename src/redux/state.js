import newsReducer from "./news-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    newsPage: {
      posts: [
        {
          id: 1,
          message: 'Reprehenderit elit fugiat laboris officia laboris sint. Nostrud magna id dolor occaecat est commodo tempor voluptate exercitation sunt nostrud id voluptate. ' +
            'Ea tempor duis consectetur sit.',
          likesCount: 20
        },
        {
          id: 2,
          message: 'Occaecat dolor commodo ex sunt duis sint et pariatur Lorem tempor sint id. Ex ad eu officia consectetur amet laboris non do voluptate eiusmod cillum excepteur cupidatat labore. ' +
            'Consequat magna dolore est dolor exercitation tempor id amet tempor minim ipsum esse. Occaecat ad ea amet veniam adipisicing fugiat enim.',
          likesCount: 15
        }
      ],
      newPostText: 'new post text',
    },
    profilePage: {
      userInfo: [
        { firstname: 'Kirill', lastname: 'Creator' }
      ],
    },
    dialogsPage: {
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
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;  // наблюдатель, pattern observer
  },

  dispatch(action) {

    this._state.newsPage = newsReducer(this._state.newsPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.state = store;
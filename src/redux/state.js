let store = {
  _state: {
    newsPage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 20 },
        { id: 2, message: "It's my first post", likesCount: 15 }
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.newsPage.newPostText,
        likesCount: 0
      };
      this._state.newsPage.posts.push(newPost);
      this._state.newsPage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.newsPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.state = store;
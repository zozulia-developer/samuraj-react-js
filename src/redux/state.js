let rerenderEntireTree = () => {
  console.log('state changed');
}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 20 },
      { id: 2, message: "It's my first post", likesCount: 15 }
    ],
    newPostText: 'new post text',
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
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;  // наблюдатель, pattern observer
}

export default state;
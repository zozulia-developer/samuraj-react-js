let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 20 },
      { id: 2, message: "It's my first post", likesCount: 15 }
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
}

export default state;
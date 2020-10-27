const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default newsReducer;
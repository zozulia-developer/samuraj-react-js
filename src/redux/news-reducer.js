const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';

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
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case DELETE_POST:
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export default newsReducer;
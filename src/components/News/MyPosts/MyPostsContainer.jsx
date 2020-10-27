import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/news-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    //let state = props.store.getState();

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.newsPage.posts}
                    newPostText={state.newsPage.newPostText} />
            }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;
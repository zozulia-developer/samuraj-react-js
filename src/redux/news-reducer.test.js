import React from 'react';
import newsReducer, {addPostActionCreator, deletePost} from "./news-reducer";

let state = {
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
    ]
};

it('length of post should be incremented', () => {
    let action = addPostActionCreator("test text");

    let newState = newsReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator("test text");

    let newState = newsReducer(state, action);

    expect(newState.posts[2].message).toBe("test text");
});

it('after deleting of message should be decrement', () => {
    let action = deletePost(1);

    let newState = newsReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

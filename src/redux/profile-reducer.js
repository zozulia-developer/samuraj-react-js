import { usersAPI } from '../api/api';

const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    userInfo: [
        { firstname: 'Kirill', lastname: 'Creator' }
    ],
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export default profileReducer;
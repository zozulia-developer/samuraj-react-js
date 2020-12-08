import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            //const[userId, email, login, isAuth] = action.payload;
            return {
                ...state,
                ...action.payload,
                // userId, email, login, isAuth
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    });

export const getMyInfo = () => (dispatch) => {
    authAPI.getMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getMyInfo());
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;
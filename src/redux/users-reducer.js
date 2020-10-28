const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Vasilii', status: 'I am a boss!', location: { city: 'ZP', country: 'Ukraine' } },
        { id: 2, followed: true, fullName: 'Petya', status: 'I am a boss!', location: { city: 'ZP', country: 'Ukraine' } },
        { id: 3, followed: false, fullName: 'Alex', status: 'I am a boss!', location: { city: 'ZP', country: 'Ukraine' } },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUserAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
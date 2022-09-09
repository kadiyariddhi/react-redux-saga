import actions from './action';

const initState = {
    user: {},
    errorData: {},
    action: null,
    token: null,
    message: null,
    loading: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.SIGNUP_REQUEST:
            return {
                ...state,
                errorData: {},
                action: action.type,
                token: null,
                loading: true,
                message: null
            };
        case actions.SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                action: action.type,
                loading: false,
                token: action.payload.token
            };
        case actions.SIGNUP_ERROR:
            return {
                ...state,
                errorData: action.errors || {},
                action: action.type,
                token: null,
                loading: false,
                message: action.payload
            };
        default:
            return state;
    }
};
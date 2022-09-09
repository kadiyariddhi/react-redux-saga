import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosPost } from '../axiosHelper';
import { push } from 'connected-react-router';
import { getToken, clearToken } from '../../Helper/utility';

/**
 * Call to signUp.
 *
 */
export function* signUpRequest({ payload }) {
    try {
        const { data } = yield axiosPost(payload, `api/auth/signup`);
        let { token } = data.data.user;
        if (token) {
            yield localStorage.setItem('auth_token', token);
            yield localStorage.setItem('user', JSON.stringify(data.data.user));
            yield put(actions.signupSuccess(data.data.user, token));
            yield put(push('/user'));
        } else {
            throw new Error('Invalid credentials provided.');
        }
        yield put(actions.signupSuccess(data));
    } catch (error) {
        yield put(actions.signupFailure(error.message, error.data || {}));
    }
}

export function* checkAuthorization() {
    const token = getToken().get('authToken');
    const user = getToken().get('user');
    if (token && user) {
        yield put(actions.signupSuccess(user, token));
    } else {
        clearToken();
        yield put(push('/'));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.CHECK_AUTHORIZATION, checkAuthorization),
        takeEvery(actions.SIGNUP_REQUEST, signUpRequest),
    ]);
}
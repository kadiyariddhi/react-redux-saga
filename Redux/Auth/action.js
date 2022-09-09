const actions = {
    SIGNUP_REQUEST: 'SIGNUP_REQUEST',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_ERROR: 'SIGNUP_ERROR',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',

     /**
     * checks the authorization.
     */
      checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),

      /**
       *signup request
       */
      signupRequest: (payload = {}) => ({
          type: actions.SIGNUP_REQUEST,
          payload
      }),

      /**
       *signup success
       */
     signupSuccess: (payload = {}, token = '') => ({
          type: actions.SIGNUP_SUCCESS,
          payload,
          token
      }),

      /**
       *something went wrong whilesignup .
       */
       signupFailure: (payload = '', errors = {}) => ({
          type: actions.SIGNUP_ERROR,
          payload,
          errors
      }),

}

export default actions;
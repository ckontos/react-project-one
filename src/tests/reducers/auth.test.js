import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid on logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid:'anything'}, action);
    expect(state).toEqual({});
});
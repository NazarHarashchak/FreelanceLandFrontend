const requestSignIn = 'REQUEST_SIGN_IN';
const receiveSignIn = 'RECEIVE_SIGN_IN';
const requestNotifCount = 'REQUEST_NOTIFICATION_COUNT';
const receiveNotifCount = 'RECEIVE_NOTIFICATION_COUNT';

import { reducer } from '../LoginPage/reducers';

const User = { Login: "user", pass: "123456" };
const Count = 1;
const state = { user: [], isLoading: false, count: 0 };

describe('Login reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                user: [],
                isLoading: false, 
                count: 0
            });
    });

    it('should handle requestSignIn', () => {
        expect(reducer([], {
            type: requestSignIn
        })
        ).toEqual(
            {
                isLoading: true
            });
    })

    it('should handle receiveSignIn', () => {
        expect(reducer([], {
            type: receiveSignIn,
            user: User
        })
        ).toEqual(
            {
                user: User,
                isLoading: false
            });
    })

    it('should handle requestNotifCount', () => {
        expect(reducer([], {
            type: requestNotifCount
        })
        ).toEqual(
            {
                isLoading: true
            });
    })

    it('should handle receiveNotifCount', () => {
        expect(reducer([], {
            type: receiveNotifCount,
            count: Count
        })
        ).toEqual(
            {
                count: Count,
                isLoading: false
            });
    })
})
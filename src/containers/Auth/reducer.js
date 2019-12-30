import {
    SET_LOADING,
    SET_USER_DATA
} from './actions'

const INITIAL_STATE = {
    accessToken: '',
    user: {
        id: '',
        name: '',
        email: '',
        phone: '',
        countryCode: '',
        device: '',
        deviceToken: '',
        referralCode: '',
        role: '',
        createdAt: '',
        status: '',
        isPhoneVerified: null,
        isEmailVerified: null
    },
    isLoggedIn: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload.loading };
    }
}
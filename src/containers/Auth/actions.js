import Service from '../../utils/networkutilites';
import Constants from '../../utils/Constants';

export const SET_LOADING = 'set_loading'
export const SET_USER_DATA = 'set_user_data'

export const loginWithPhoneNumber = (phoneNumber, callback) => {
    return (dispatch) => {
        dispatch({ type: SET_LOADING, payload: { loading: true } });
        Service.post(
            Constants.DEV_SERVER + Constants.LOGIN, 
            { 
                phone: phoneNumber, 
                username_type: 'phone',
                type: 'otp' 
            },{})
        .then(
            (response) => {
                //check if code was sent and route accordingly
                if (response.status.toString() === '210') {
                    // console.log(data)
                    dispatch({ type: SET_LOADING, payload: { loading: false } });
                    callback('register')
                } else if (response.data && resposne.data.response.status.toString() === '200') {
                    console.log(data)
                    dispatch({ type: SET_LOADING, payload: { loading: false } });
                    callback('verifyOTP');
                } else {
                    console.log('else part');
                    dispatch({ type: SET_LOADING, payload: { loading: false } });
                    callback('error')
                }
            }
        )
        .catch((error) => {
                console.log(error);
                dispatch({ type: SET_LOADING, payload: { loading: false } });
                callback('error')
        });
    };
};
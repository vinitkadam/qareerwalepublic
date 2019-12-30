// The server api constants
const Constants = {
    DEV_SERVER: 'http://18.191.87.240/v1/',


    //routes 
    // user management routes
    LOGIN: 'auth/login/',
    REGISTER: 'auth/register/',
    VERIFY_OTP: 'auth/verifyotp/',
    
    //Service routes
    HOMESCREEN_SERVICE_LIST: 'service/',
    SERVICE_DETAILS: 'service/detail/',

    //Depart Services
    DEPT_SERVICE_LIST: 'service/all/',

    //Error Messages
    EMPTY_PHONE: 'Please enter a valid phone number.'

};

export default Constants;

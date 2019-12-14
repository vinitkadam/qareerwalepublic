const INITIAL_STATE = {
    theme: 'theme1'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'set-theme':
            return { ...state, theme: action.payload };
        default:
            return state;
    }
}
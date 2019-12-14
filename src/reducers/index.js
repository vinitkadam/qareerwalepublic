import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import TempReducer from './TempReducer';

const config = {
    key: 'primary',
    storage,
    whitelist: ['theme']
};

export default persistCombineReducers(config, {
    theme: TempReducer,
});
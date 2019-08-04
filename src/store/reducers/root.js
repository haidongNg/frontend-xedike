import { combineReducers } from 'redux';
import errorsReducer from './errors';
import authReducer from './auth';
import driverProfileReducer from './driver';

const rootReducer = combineReducers({
    errors: errorsReducer,
    auth: authReducer,
    driverProfile: driverProfileReducer 
});

export default rootReducer;
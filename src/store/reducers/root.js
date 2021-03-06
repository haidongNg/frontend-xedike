import { combineReducers } from 'redux';
import errorsReducer from './errors';
import authReducer from './auth';
import driverProfileReducer from './driver';
import userReducer from './listUser';
import tripsReducer from './trips';
import districReducer from './district';
import listHistoryReducer from './listHistory';
import tripDriverReducer from './tripDriver';

const rootReducer = combineReducers({
    errors: errorsReducer,
    auth: authReducer,
    driverProfile: driverProfileReducer,
    listUser: userReducer,
    listTrip: tripsReducer,
    district: districReducer,
    listHistory: listHistoryReducer,
    tripDriver: tripDriverReducer
});

export default rootReducer;
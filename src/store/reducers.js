import { combineReducers } from 'redux';
import GlobalReducer from './global/reducer';

const combine = combineReducers({
    global: GlobalReducer,
})

export { combine }
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import QrReducer from './QrReducer';


export default combineReducers({
  auth: AuthReducer,
  qr: QrReducer
});
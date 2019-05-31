import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firestoreReducer } from './node_modules/redux-firestore';
import { combineReducers } from './node_modules/redux';
import { firebaseReducer } from './node_modules/react-redux-firebase';
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase : firebaseReducer
})
export default rootReducer;
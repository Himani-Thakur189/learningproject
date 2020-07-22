import Reducer from './Reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as reduxFormReducer } from 'redux-form'
// const rootReducer=combineReducers({
//     firestore:firestoreReducer,
//     Reducer:Reducer
// })
const RootReducer = combineReducers({
    Reducer: Reducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    form: reduxFormReducer
})
export default RootReducer
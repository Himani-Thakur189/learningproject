import Reducer from './Reducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore'

const rootReducer=combineReducers({
    firestore:firestoreReducer,
    Reducer:Reducer
})
export default rootReducer
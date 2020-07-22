import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import fbase from '../../firebase';
import firebase from 'firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore'
import RootReducer from '../reducers'
import { reactReduxFirebase, getFirebase, firebaseReducer, ReactReduxFirebaseProvider } from 'react-redux-firebase'

const middleware = compose(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbase)
)

const store = createStore(RootReducer, middleware)
export default store;

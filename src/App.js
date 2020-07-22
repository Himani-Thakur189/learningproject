import React, { Component } from 'react';
import './App.css';

// import Romance from './Pages/Romance'
// import Description from './Pages/Description'
// import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
// import Footer from './components/subComponents/Footer'
// import Admin from './Pages/Admin'
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import Reducer from './Redux/reducers/Reducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import fbase from './firebase';
import firebase from 'firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore'
import { reactReduxFirebase, getFirebase, firebaseReducer, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import store from './Redux/store'
import RootRouter from './routers/routes'
// const Root = combineReducers({
//   Reducer: Reducer,
//   firestore: firestoreReducer,
//   firebase: firebaseReducer
// })
const rrfconfig = {
  useFirestoreForProfile: true,
  userProfiles: 'users',
  enableLogging: true
}
// const middleware=compose(applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
// reduxFirestore(firebase,fbase)
// )

//  const store=createStore(Root,middleware)
const rrfProps = {
  firebase,
  config: rrfconfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <RootRouter />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}


export default App;

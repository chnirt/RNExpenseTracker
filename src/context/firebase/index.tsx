import React, {createContext, useContext} from 'react';
import {IFirebaseContext, IFirebaseProvider} from './types';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAT5nIMlaI1pENRg0XusYG6gd4t9_p2nPE',
  authDomain: 'myfirebase-549da.firebaseapp.com',
  projectId: 'myfirebase-549da',
  storageBucket: 'myfirebase-549da.appspot.com',
  messagingSenderId: '723412122451',
  appId: '1:723412122451:web:f1dc1b9568b3211a6cffa6',
  measurementId: 'G-WJ1PFNJCLR',
};

firebase.initializeApp(firebaseConfig);

const FirebaseContext = createContext<IFirebaseContext>({
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
  postData: () => {},
  getUserData: () => {},
  getDataWithWhere: () => {},
});

export const FirebaseProvider = ({children}: IFirebaseProvider) => {
  const signUp = async (email: string, password: string) => {
    if (email && password) {
      const {user} = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);
      return user;
    } else {
      console.log(`Errors`);
    }
  };

  const signIn = async (email: string, password: string) => {
    if (email && password) {
      const {user} = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(user);
      getData('users');
      return user;
    } else {
      console.log(`Errors`);
    }
  };

  const signOut = () => {
    firebase.auth().signOut();
  };

  const postData = async (tableName: any, params: Object) => {
    try {
      await firebase.firestore().collection(tableName).add(params);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserData = async (tableName: any, id: any) => {
    try {
      const uid = id ?? firebase.auth().currentUser.uid;
      const data = await firebase
        .firestore()
        .collection(tableName)
        .doc(uid)
        .get();
      console.log(data.data());
    } catch (err) {
      console.log(err);
    }
  };

  const getDataWithWhere = async (tableName: any, con: Array<any>) => {
    try {
      const data = await firebase
        .firestore()
        .collection(tableName)
        .where(con[0], con[1], con[2])
        // .where(id, '==', 1)
        .get();
      console.log(data.data());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        postData,
        getUserData,
        getDataWithWhere,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBmwk5Hr8m9eqmBVPlkQkSLvOi7HI3g1Js",
    authDomain: "crown-db-6861c.firebaseapp.com",
    databaseURL: "https://crown-db-6861c.firebaseio.com",
    projectId: "crown-db-6861c",
    storageBucket: "crown-db-6861c.appspot.com",
    messagingSenderId: "461823958927",
    appId: "1:461823958927:web:4f7ace5778720acce5b5fa"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
     
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
      }
      catch(error){
        console.log('error created by user',error.message);
      }

    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase; 
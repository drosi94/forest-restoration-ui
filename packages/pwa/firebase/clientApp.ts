import firebase from "firebase";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export let firebaseApp;

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
  if(process.env.NEXT_PUBLIC_USE_FIREBASE_ANALYTICS === 'true') {
    firebase.analytics();
  }
}

if (process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true') {
  console.info('%c!!!!USING FIREBASE EMULATORS!!!!', "color:green; font-size: 26px")
  firebase.firestore().useEmulator("localhost", parseInt(process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_FIRESTORE_PORT || '0'));
  firebase.functions().useEmulator("localhost", parseInt(process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_FUNCTIONS_PORT || '0'));
}

if (process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_USE_FIREBASE_AUTH_EMULATOR === 'true') {
  console.info('%c!!!!USING FIREBASE AUTH EMULATOR!!!!', "color:green; font-size: 26px")
  firebase.auth().useEmulator(`http://localhost:${process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_AUTH_PORT}`);
}

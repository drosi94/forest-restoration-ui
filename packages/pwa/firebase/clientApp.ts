import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

if (!firebase.apps.length) {
  // Enable analytics if env variable is set and the process is in browser
  if (process.browser && process.env.NEXT_PUBLIC_USE_FIREBASE_ANALYTICS === 'true') {
    require('firebase/analytics')
    firebase.analytics()
  }

  // Enable app check if env variable is set and the process is in browser
  if (process.browser && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_API_KEY) {
    require('firebase/app-check')
    const appCheck = firebase.appCheck()
    appCheck.activate(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_API_KEY, true)
  }
}

// Use firebase emulators if the process is not in production and env variable is set
if (
  process.env.NODE_ENV !== 'production' &&
  process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true'
) {
  console.info('%c!!!!USING FIREBASE EMULATORS!!!!', 'color:green; font-size: 26px')
  firebase
    .firestore()
    .useEmulator(
      'localhost',
      parseInt(process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_FIRESTORE_PORT || '0')
    )
  firebase
    .functions()
    .useEmulator(
      'localhost',
      parseInt(process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_FUNCTIONS_PORT || '0')
    )
}

// Use firebase authentication emulator if the process is not in production and env variable is set
if (
  process.env.NODE_ENV !== 'production' &&
  process.env.NEXT_PUBLIC_USE_FIREBASE_AUTH_EMULATOR === 'true'
) {
  console.info('%c!!!!USING FIREBASE AUTH EMULATOR!!!!', 'color:green; font-size: 26px')
  firebase
    .auth()
    .useEmulator(`http://localhost:${process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_AUTH_PORT}`)
}

export { firebaseApp, firebase }

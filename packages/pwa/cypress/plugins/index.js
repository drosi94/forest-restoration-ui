/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const admin = require('firebase-admin')
const cypressFirebasePlugin = require('cypress-firebase').plugin

module.exports = (on, config) => {
    const extendedConfig = cypressFirebasePlugin(on, config, admin)

    extendedConfig.env.FIRESTORE_EMULATOR_HOST = process.env.FIRESTORE_EMULATOR_HOST =
        'localhost:' + process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_FIRESTORE_PORT

    extendedConfig.env.FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
    extendedConfig.env.FIREBASE_APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    extendedConfig.env.FIREBASE_AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
    extendedConfig.env.FIREBASE_EMULATOR_AUTH_PORT =
        process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_AUTH_PORT
    extendedConfig.env.FIREBASE_EMULATOR_FIRESTORE_PORT =
        process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_FIRESTORE_PORT
    extendedConfig.env.FIREBASE_EMULATOR_FUNCTIONS_PORT =
        process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_FUNCTIONS_PORT
    extendedConfig.env.FIREBASE_MESSAGING_SENDER_ID =
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
    extendedConfig.env.FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    extendedConfig.env.FIREBASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET

    extendedConfig.env.TEST_UID = 'b9E4z9kb8Pzm3vrf4amhusIByxYx'

    // Add other plugins/tasks such as code coverage here

    return extendedConfig
}
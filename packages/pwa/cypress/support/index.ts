/// <reference types="cypress" />

import './commands'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// @ts-ignore
import { attachCustomCommands } from 'cypress-firebase'

firebase.initializeApp({
  apiKey: Cypress.env('FIREBASE_API_KEY'),
  authDomain: Cypress.env('FIREBASE_AUTH_DOMAIN'),
  projectId: Cypress.env('FIREBASE_PROJECT_ID'),
  storageBucket: Cypress.env('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: Cypress.env('FIREBASE_MESSAGING_SENDER_ID'),
  appId: Cypress.env('FIREBASE_APP_ID'),
})

firebase.firestore().settings({
  host: `localhost:${Cypress.env('FIREBASE_EMULATOR_FIRESTORE_PORT')}`,
  experimentalForceLongPolling: true,
  ssl: false,
})
firebase.auth().useEmulator(`http://localhost:${Cypress.env('FIREBASE_EMULATOR_AUTH_PORT')}`)

attachCustomCommands({ Cypress, cy, firebase })

declare namespace Cypress {
  interface Chainable<Element> {
    /**
     * Custom command to select DOM element by data-testid attribute.
     * @example cy.getByTestId('greeting')
     */
    getByTestId(value: string): Chainable<Element>
    /**
     * Custom command to login using UI
     * @example cy.loginUI('facebook.com')
     */
    loginUI(value: string): void
  }
}

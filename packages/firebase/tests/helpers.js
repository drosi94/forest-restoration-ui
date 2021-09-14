const firebase = require('@firebase/rules-unit-testing')
const { readFileSync } = require('fs')
const path = require('path')

const projectId = `forestrestoration-dev-17429`

module.exports.setup = async (auth, data) => {
  try {
    const app = await firebase.initializeTestApp({
      projectId,
      auth,
    })

    const db = app.firestore()

    if (data) {
      const admin = firebase.initializeAdminApp({
        projectId,
      })
      for (const key in data) {
        const ref = admin.firestore().doc(key)
        await ref.set(data[key])
      }
    }

    // Apply rules
    await firebase.loadFirestoreRules({
      projectId,
      rules: readFileSync(path.resolve(__dirname, '../firestore.rules'), 'utf8'),
    })

    return db
  } catch (err) {
    console.error(err)
  }
}

module.exports.teardown = async () => {
  Promise.all(firebase.apps().map((app) => app.delete()))
  await firebase.clearFirestoreData({
    projectId,
  })
}

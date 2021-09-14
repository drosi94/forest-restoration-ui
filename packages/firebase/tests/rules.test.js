const { assertFails, assertSucceeds } = require('@firebase/rules-unit-testing')
const { setup, teardown } = require('./helpers')

jest.setTimeout(20000)

const mockUser = {
  uid: 'userid1',
}

const mockData = {
  'users/userid1': {
    username: 'user1',
  },
  'users/userid2': {
    username: 'user2',
  },
  'usernames/user1': {
    uid: 'userid1',
  },
  'usernames/user2': {
    uid: 'userid2',
  },
}

describe('Database rules', () => {
  let db

  // Applies only to tests in this describe block
  beforeAll(async () => {
    db = await setup(mockUser, mockData)
  })

  afterAll(async () => {
    await teardown()
  })

  test('deny when reading an unauthorized collection', async () => {
    const ref = db.collection('secret-stuff')

    expect(await assertFails(ref.get()))
  })

  test('allow when reading authenticated user document', async () => {
    const ref = db.collection('users').doc('userid1')

    expect(await assertSucceeds(ref.get()))
  })

  test('deny when reading anothers user document', async () => {
    const ref = db.collection('users').doc('userid2')

    expect(await assertFails(ref.get()))
  })

  test('deny when reading anothers user document', async () => {
    const ref = db.collection('users').doc('userid2')

    expect(await assertFails(ref.get()))
  })

  test('deny when trying to create a user document', async () => {
    const ref = db.collection('users').doc('shouldFail')

    expect(await assertFails(ref.set({ username: 'shouldFail' })))
  })

  test('deny when trying to update a user document that its not authorized', async () => {
    const ref = db.collection('users').doc('userid2')

    expect(await assertFails(ref.update({ username: 'user2', displayName: 'xazos' })))
  })

  test('deny when trying to update a user document with email field', async () => {
    const ref = db.collection('users').doc('userid1')

    expect(await assertFails(ref.update({ username: 'user1', email: 'shouldFail@mail.com' })))
  })

  test('deny when trying to update a user document with emailVerified field', async () => {
    const ref = db.collection('users').doc('userid1')

    expect(await assertFails(ref.update({ username: 'user1', emailVerified: true })))
  })
  test('allow when trying to update an authorized user document with allowed keys', async () => {
    const ref = db.collection('users').doc('userid1')

    expect(await assertSucceeds(ref.update({ displayName: 'ekspynos' })))
  })
})

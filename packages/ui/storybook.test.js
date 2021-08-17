jest.mock('global', () => Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: '' } }))

const initStoryshots = require('@storybook/addon-storyshots').default

initStoryshots()

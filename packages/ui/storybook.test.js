jest.mock('global', () => Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: '' } }))
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const initStoryshots = require('@storybook/addon-storyshots').default

initStoryshots()

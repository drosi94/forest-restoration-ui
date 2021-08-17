import React from 'react'
import { render } from '../../test/testUtils'
import Home from '.'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

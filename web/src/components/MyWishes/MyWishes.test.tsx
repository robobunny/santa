import { render } from '@redwoodjs/testing/web'

import MyWishes from './MyWishes'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyWishes', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyWishes />)
    }).not.toThrow()
  })
})

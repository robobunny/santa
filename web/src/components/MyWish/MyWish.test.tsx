import { render } from '@redwoodjs/testing/web'

import MyWish from './MyWish'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyWish', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyWish />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing/web'

import LoginStatus from './LoginStatus'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginStatus', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginStatus />)
    }).not.toThrow()
  })
})

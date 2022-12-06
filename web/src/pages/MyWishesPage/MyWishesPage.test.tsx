import { render } from '@redwoodjs/testing/web'

import MyWishesPage from './MyWishesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyWishesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyWishesPage />)
    }).not.toThrow()
  })
})

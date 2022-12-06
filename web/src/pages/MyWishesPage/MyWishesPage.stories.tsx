import type { ComponentMeta } from '@storybook/react'

import MyWishesPage from './MyWishesPage'

export const generated = () => {
  return <MyWishesPage />
}

export default {
  title: 'Pages/MyWishesPage',
  component: MyWishesPage,
} as ComponentMeta<typeof MyWishesPage>

// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MyWish> = (args) => {
//   return <MyWish {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MyWish from './MyWish'

const wishy = {
  id: 1,
  title: "My wish",
  description: "Damn I really wish I had this shit",
  url: "www.example.com/wish",
  createdAt: new Date('2000-01-01').toISOString(),
  userId: 1,
}

export const generated = () => {
  return <MyWish wish={wishy}/>
}

export default {
  title: 'Components/MyWish',
  component: MyWish,
} as ComponentMeta<typeof MyWish>

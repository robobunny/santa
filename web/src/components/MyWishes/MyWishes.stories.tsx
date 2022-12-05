// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MyWishes> = (args) => {
//   return <MyWishes {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MyWishes from './MyWishes'

export const generated = () => {
  return <MyWishes />
}

export default {
  title: 'Components/MyWishes',
  component: MyWishes,
} as ComponentMeta<typeof MyWishes>

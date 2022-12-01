import type { Wish } from '@prisma/client'

import { wishes, wish, createWish, updateWish, deleteWish } from './wishes'
import type { StandardScenario } from './wishes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('wishes', () => {
  scenario('returns all wishes', async (scenario: StandardScenario) => {
    const result = await wishes()

    expect(result.length).toEqual(Object.keys(scenario.wish).length)
  })

  scenario('returns a single wish', async (scenario: StandardScenario) => {
    const result = await wish({ id: scenario.wish.one.id })

    expect(result).toEqual(scenario.wish.one)
  })

  scenario('creates a wish', async (scenario: StandardScenario) => {
    const result = await createWish({
      input: {
        userId: scenario.wish.two.userId,
        name: 'String',
        description: 'String',
        price: 'String',
        url: 'String',
      },
    })

    expect(result.userId).toEqual(scenario.wish.two.userId)
    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.price).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a wish', async (scenario: StandardScenario) => {
    const original = (await wish({ id: scenario.wish.one.id })) as Wish
    const result = await updateWish({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a wish', async (scenario: StandardScenario) => {
    const original = (await deleteWish({ id: scenario.wish.one.id })) as Wish
    const result = await wish({ id: original.id })

    expect(result).toEqual(null)
  })
})

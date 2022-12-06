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
    const newWish = {
      title: "New test wish",
      description: "A new test wish",
      url: "www.exmaple.com/new_test",
    };
    const result = await createWish({ input: newWish });
    Object.keys(newWish).forEach(k=>expect(result[k]===newWish[k]));
    const allWishes = await wishes()
    expect(allWishes.length).toEqual(Object.keys(scenario.wish).length+1)
  })

  scenario('updates a wish', async (scenario: StandardScenario) => {
    const description = "A new test wish description"
    const result = await updateWish({ id: scenario.wish.one.id, input: {description} });
    expect(result.description).toEqual(description)
    expect(result.id).toEqual(scenario.wish.one.id)
    expect(result.title).toEqual(scenario.wish.one.title)
  })

  scenario('deletes a wish', async (scenario: StandardScenario) => {
    const original = (await deleteWish({ id: scenario.wish.one.id })) as Wish
    const result = await wish({ id: original.id })

    expect(result).toEqual(null)
  })
})

import type { Exchange } from '@prisma/client'

import {
  exchanges,
  exchange,
  createExchange,
  updateExchange,
  deleteExchange,
} from './exchanges'
import type { StandardScenario } from './exchanges.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('exchanges', () => {
  scenario('returns all exchanges', async (scenario: StandardScenario) => {
    const result = await exchanges()

    expect(result.length).toEqual(Object.keys(scenario.exchange).length)
  })

  scenario('returns a single exchange', async (scenario: StandardScenario) => {
    const result = await exchange({ id: scenario.exchange.one.id })

    expect(result).toEqual(scenario.exchange.one)
  })

  scenario('creates a exchange', async (scenario: StandardScenario) => {
    const result = await createExchange({
      input: { name: 'String', adminId: scenario.exchange.two.adminId },
    })

    expect(result.name).toEqual('String')
    expect(result.adminId).toEqual(scenario.exchange.two.adminId)
  })

  scenario('updates a exchange', async (scenario: StandardScenario) => {
    const original = (await exchange({
      id: scenario.exchange.one.id,
    })) as Exchange
    const result = await updateExchange({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a exchange', async (scenario: StandardScenario) => {
    const original = (await deleteExchange({
      id: scenario.exchange.one.id,
    })) as Exchange
    const result = await exchange({ id: original.id })

    expect(result).toEqual(null)
  })
})

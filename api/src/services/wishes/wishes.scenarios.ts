import type { Prisma, Wish } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishCreateArgs>({
  wish: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        price: 'String',
        url: 'String',
        user: { create: { name: 'String', email: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        price: 'String',
        url: 'String',
        user: { create: { name: 'String', email: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Wish, 'wish'>

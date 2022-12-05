import type { Prisma, Wish } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishCreateArgs>({
  wish: {
    one: {
      data: {
        user: {
          create: {
            name: 'String6363829',
            email: 'String6834194',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            name: 'String2907652',
            email: 'String6509250',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Wish, 'wish'>

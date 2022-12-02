import type { Prisma, Exchange } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ExchangeCreateArgs>({
  exchange: {
    one: {
      data: {
        name: 'String',
        admin: {
          create: {
            name: 'String119895',
            email: 'String4593093',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        admin: {
          create: {
            name: 'String7527353',
            email: 'String2655778',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Exchange, 'exchange'>

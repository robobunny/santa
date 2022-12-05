import type { Prisma, Exchange } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ExchangeCreateArgs>({
  exchange: {
    one: {
      data: {
        name: 'String',
        admin: {
          create: {
            name: 'String7193330',
            email: 'String2303838',
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
            name: 'String4203213',
            email: 'String2061825',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Exchange, 'exchange'>

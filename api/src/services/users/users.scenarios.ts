import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: 'String3422859',
        email: 'String4056177',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        name: 'String7014817',
        email: 'String2431829',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>

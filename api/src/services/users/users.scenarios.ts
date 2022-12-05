import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: 'String4662068',
        email: 'String9553077',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        name: 'String4483716',
        email: 'String2156284',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>

import type { Prisma, Wish } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishCreateArgs>({
  wish: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Wish, 'wish'>

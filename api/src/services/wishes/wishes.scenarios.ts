import type { Prisma, Wish } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishCreateArgs>({
  wish: { one: { data: {
    title: "Test 1",
    description: "Test wish",
    url: "www.example.com/test1",
  } }, two: { data: {
    title: "Test 1",
    description: "Test wish",
  } } },
})

export type StandardScenario = ScenarioData<Wish, 'wish'>

/*
  Warnings:

  - You are about to drop the `Exchange` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExchangeToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exchange" DROP CONSTRAINT "Exchange_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Wish" DROP CONSTRAINT "Wish_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ExchangeToUser" DROP CONSTRAINT "_ExchangeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExchangeToUser" DROP CONSTRAINT "_ExchangeToUser_B_fkey";

-- DropTable
DROP TABLE "Exchange";

-- DropTable
DROP TABLE "_ExchangeToUser";

/*
  Warnings:

  - Made the column `categoryId` on table `heroes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "heroes" DROP CONSTRAINT "heroes_categoryId_fkey";

-- AlterTable
ALTER TABLE "heroes" ALTER COLUMN "categoryId" SET NOT NULL,
ALTER COLUMN "categoryId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

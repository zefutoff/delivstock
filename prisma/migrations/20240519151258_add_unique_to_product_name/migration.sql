/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Products_name_key" ON "Products"("name");

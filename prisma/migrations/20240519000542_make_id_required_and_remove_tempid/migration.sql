/*
  Warnings:

  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tempId` on the `Products` table. All the data in the column will be lost.
  - Made the column `id` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
DROP COLUMN "tempId",
ALTER COLUMN "id" SET NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

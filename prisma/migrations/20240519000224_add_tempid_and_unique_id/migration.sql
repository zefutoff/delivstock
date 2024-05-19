/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `access_token` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `provider` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `providerAccountId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `invetoryDate` on the `InventoryDetails` table. All the data in the column will be lost.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - The required column `Id` was added to the `Account` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `inventoryDate` to the `InventoryDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CollectDetails" DROP CONSTRAINT "CollectDetails_productId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryDetails" DROP CONSTRAINT "InventoryDetails_productId_fkey";

-- DropIndex
DROP INDEX "Account_provider_providerAccountId_key";

-- DropIndex
DROP INDEX "ProductType_typeName_key";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "access_token",
DROP COLUMN "id",
DROP COLUMN "provider",
DROP COLUMN "providerAccountId",
DROP COLUMN "refresh_token",
ADD COLUMN     "Id" TEXT NOT NULL,
ADD COLUMN     "access_Token" TEXT,
ADD COLUMN     "refresh_Token" TEXT,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "InventoryDetails" DROP COLUMN "invetoryDate",
ADD COLUMN     "inventoryDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
DROP COLUMN "productId",
DROP COLUMN "productName",
ADD COLUMN     "id" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "tempId" SERIAL NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("tempId");

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- AddForeignKey
ALTER TABLE "InventoryDetails" ADD CONSTRAINT "InventoryDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectDetails" ADD CONSTRAINT "CollectDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

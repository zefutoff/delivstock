/*
  Warnings:

  - A unique constraint covering the columns `[typeName]` on the table `ProductType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductType_typeName_key" ON "ProductType"("typeName");

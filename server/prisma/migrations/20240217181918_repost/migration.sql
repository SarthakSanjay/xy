/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Tweet` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tweet_id_key" ON "Tweet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

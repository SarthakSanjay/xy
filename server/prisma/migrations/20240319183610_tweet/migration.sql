/*
  Warnings:

  - You are about to drop the column `commentCount` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `commentCount` on the `Tweet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "commentCount";

-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "commentCount";

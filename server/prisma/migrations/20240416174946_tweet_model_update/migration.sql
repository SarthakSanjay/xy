/*
  Warnings:

  - You are about to drop the column `bookmarks` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `reposts` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `Tweet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "bookmarks",
DROP COLUMN "likes",
DROP COLUMN "reposts",
DROP COLUMN "views",
ADD COLUMN     "isReposted" BOOLEAN NOT NULL DEFAULT false;

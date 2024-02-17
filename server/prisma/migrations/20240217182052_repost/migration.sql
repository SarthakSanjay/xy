/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tweetId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Repost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tweetId]` on the table `Repost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_key" ON "Like"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_tweetId_key" ON "Like"("tweetId");

-- CreateIndex
CREATE UNIQUE INDEX "Repost_userId_key" ON "Repost"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Repost_tweetId_key" ON "Repost"("tweetId");

/*
  Warnings:

  - You are about to drop the column `commentId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_commentId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "commentId",
ADD COLUMN     "parentCommentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

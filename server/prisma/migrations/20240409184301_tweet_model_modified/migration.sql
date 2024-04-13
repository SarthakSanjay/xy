-- AlterTable
ALTER TABLE "Tweet" ADD COLUMN     "isBookmarked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isLiked" BOOLEAN NOT NULL DEFAULT false;

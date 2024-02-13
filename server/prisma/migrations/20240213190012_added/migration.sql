-- CreateTable
CREATE TABLE "Tweet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "commentCount" INTEGER NOT NULL,
    "reposts" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "bookmarks" INTEGER NOT NULL,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

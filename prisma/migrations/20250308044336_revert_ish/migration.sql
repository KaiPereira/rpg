-- AlterTable
ALTER TABLE "User" ALTER COLUMN "inventory" DROP DEFAULT,
ALTER COLUMN "inventory" SET DATA TYPE TEXT[];

-- DropIndex
DROP INDEX "public"."Pokemon_imageUrl_key";

-- DropIndex
DROP INDEX "public"."Trainer_imageUrl_key";

-- AlterTable
ALTER TABLE "public"."Pokemon" ALTER COLUMN "imageUrl" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."Trainer" ALTER COLUMN "imageUrl" DROP DEFAULT;

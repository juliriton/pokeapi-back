/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Trainer` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Pokemon_imageUrl_key";

-- DropIndex
DROP INDEX "public"."Trainer_imageUrl_key";

-- AlterTable
ALTER TABLE "public"."Pokemon" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "public"."Trainer" DROP COLUMN "imageUrl";

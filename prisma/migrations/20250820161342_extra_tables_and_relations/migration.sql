/*
  Warnings:

  - A unique constraint covering the columns `[imageUrl]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageUrl]` on the table `Trainer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Trainer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Pokemon" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Trainer" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_imageUrl_key" ON "public"."Pokemon"("imageUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Trainer_imageUrl_key" ON "public"."Trainer"("imageUrl");

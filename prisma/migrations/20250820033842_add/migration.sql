/*
  Warnings:

  - You are about to drop the column `generation` on the `Ability` table. All the data in the column will be lost.
  - You are about to drop the column `specialty` on the `Trainer` table. All the data in the column will be lost.
  - Added the required column `type` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `Pokemon` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `type` to the `Trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Trainer` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `Trainer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "public"."Ability" DROP COLUMN "generation";

-- AlterTable
ALTER TABLE "public"."Pokemon" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Trainer" DROP COLUMN "specialty",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."_PokemonToTrainer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PokemonToTrainer_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_AbilityToPokemon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AbilityToPokemon_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PokemonToTrainer_B_index" ON "public"."_PokemonToTrainer"("B");

-- CreateIndex
CREATE INDEX "_AbilityToPokemon_B_index" ON "public"."_AbilityToPokemon"("B");

-- AddForeignKey
ALTER TABLE "public"."_PokemonToTrainer" ADD CONSTRAINT "_PokemonToTrainer_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PokemonToTrainer" ADD CONSTRAINT "_PokemonToTrainer_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Trainer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

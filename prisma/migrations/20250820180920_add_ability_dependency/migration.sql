/*
  Warnings:

  - You are about to drop the `_PokemonToTrainer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_PokemonToTrainer" DROP CONSTRAINT "_PokemonToTrainer_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_PokemonToTrainer" DROP CONSTRAINT "_PokemonToTrainer_B_fkey";

-- AlterTable
ALTER TABLE "public"."Pokemon" ALTER COLUMN "imageUrl" SET DEFAULT '';

-- AlterTable
ALTER TABLE "public"."Trainer" ALTER COLUMN "imageUrl" SET DEFAULT '';

-- DropTable
DROP TABLE "public"."_PokemonToTrainer";

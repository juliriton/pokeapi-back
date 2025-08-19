-- CreateTable
CREATE TABLE "public"."Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "generation" INTEGER NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Trainer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,

    CONSTRAINT "Trainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ability" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "generation" INTEGER NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "public"."Pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_imageUrl_key" ON "public"."Pokemon"("imageUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Trainer_imageUrl_key" ON "public"."Trainer"("imageUrl");

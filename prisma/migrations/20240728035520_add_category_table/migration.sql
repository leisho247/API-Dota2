


-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL UNIQUE

);

-- CreateIndex
Alter Table "heroes" ADD COLUMN "categoryId" INTEGER default 1;

-- AddForeignKey
ALTER TABLE "heroes" ADD CONSTRAINT "heroes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id");

Insert into "categories" (name) values ('Default');
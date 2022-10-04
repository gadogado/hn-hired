/*
  Warnings:

  - Added the required column `by` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "by" TEXT NOT NULL,
ADD COLUMN     "company" TEXT;

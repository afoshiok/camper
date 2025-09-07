/*
  Warnings:

  - Added the required column `email` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Member" ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "first_name" SET DATA TYPE TEXT,
ALTER COLUMN "last_name" SET DATA TYPE TEXT;

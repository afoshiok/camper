/*
  Warnings:

  - Added the required column `date_created` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date` to the `Campaign` table without a default value. This is not possible if the table is not empty.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- AlterTable
ALTER TABLE "public"."Campaign" ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

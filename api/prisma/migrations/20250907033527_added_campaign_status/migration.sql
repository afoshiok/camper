/*
  Warnings:

  - Added the required column `campaign_status` to the `Campaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Campaign" ADD COLUMN     "campaign_status" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."CampaignTypes" ALTER COLUMN "type_name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."MemberTypes" ALTER COLUMN "type_name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."VisitStatus" ALTER COLUMN "status_name" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "public"."CampaignStatus" (
    "id" SERIAL NOT NULL,
    "status_name" TEXT NOT NULL,

    CONSTRAINT "CampaignStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Campaign" ADD CONSTRAINT "Campaign_campaign_status_fkey" FOREIGN KEY ("campaign_status") REFERENCES "public"."CampaignStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

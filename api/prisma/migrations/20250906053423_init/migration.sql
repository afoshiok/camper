-- CreateTable
CREATE TABLE "public"."MemberTypes" (
    "id" SERIAL NOT NULL,
    "type_name" CHAR(20) NOT NULL,

    CONSTRAINT "MemberTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CampaignTypes" (
    "id" SERIAL NOT NULL,
    "type_name" CHAR(20) NOT NULL,

    CONSTRAINT "CampaignTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VisitStatus" (
    "id" SERIAL NOT NULL,
    "status_name" CHAR(25) NOT NULL,

    CONSTRAINT "VisitStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Visit" (
    "id" SERIAL NOT NULL,
    "door_id" INTEGER NOT NULL,
    "volunteer_id" INTEGER NOT NULL,
    "campaign_id" UUID NOT NULL,
    "visit_status" INTEGER NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Member" (
    "id" SERIAL NOT NULL,
    "first_name" CHAR(20) NOT NULL,
    "last_name" CHAR(20) NOT NULL,
    "member_type" INTEGER NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Campaign" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR NOT NULL,
    "city" CHAR(50),
    "state" CHAR(50) NOT NULL,
    "country" CHAR(50) NOT NULL,
    "zipcode" CHAR(20),
    "campaign_type" INTEGER NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CampaignMember" (
    "id" SERIAL NOT NULL,
    "campaign_id" UUID NOT NULL,
    "member_id" INTEGER NOT NULL,

    CONSTRAINT "CampaignMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Door" (
    "id" SERIAL NOT NULL,
    "first_name" CHAR(20) NOT NULL,
    "last_name" CHAR(20) NOT NULL,
    "address1" VARCHAR(50) NOT NULL,
    "address2" VARCHAR(50) NOT NULL,
    "city" CHAR(20) NOT NULL,
    "state" CHAR(20) NOT NULL,
    "country" CHAR(40) NOT NULL,

    CONSTRAINT "Door_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Visit" ADD CONSTRAINT "Visit_visit_status_fkey" FOREIGN KEY ("visit_status") REFERENCES "public"."VisitStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Visit" ADD CONSTRAINT "Visit_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "public"."Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Visit" ADD CONSTRAINT "Visit_volunteer_id_fkey" FOREIGN KEY ("volunteer_id") REFERENCES "public"."CampaignMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Visit" ADD CONSTRAINT "Visit_door_id_fkey" FOREIGN KEY ("door_id") REFERENCES "public"."Door"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Member" ADD CONSTRAINT "Member_member_type_fkey" FOREIGN KEY ("member_type") REFERENCES "public"."MemberTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Campaign" ADD CONSTRAINT "Campaign_campaign_type_fkey" FOREIGN KEY ("campaign_type") REFERENCES "public"."CampaignTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CampaignMember" ADD CONSTRAINT "CampaignMember_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "public"."Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CampaignMember" ADD CONSTRAINT "CampaignMember_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "public"."Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

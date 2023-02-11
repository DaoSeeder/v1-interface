import React from "react";
import { RiShareBoxFill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import CampaignList from "../CampaignList";
import { useSingleCampaign } from "../../../hooks/useSingleCampaign";

function SingleCampaign() {
  const { campaign, mediaLinkIdx, prevItem, nextItem, campaigns } =
    useSingleCampaign();
  const style = {
    campaignDiv:
      "text-light-font-lightV1 dark:text-dark-font-lightV1 mt-12 w-full",
    mainCampaign:
      "rounded-md bg-gradient-to-r from-white to-white dark:from-transparent dark:to-transparent p-[2px] w-full drop-shadow-xl",
    signleCampaign:
      "rounded-md bg-gradient-to-r from-white to-white dark:from-transparent dark:to-transparent p-[2px] drop-shadow-xl",
    campaignImageContainer:
      "flex flex-col w-[910px] h-full items-center justify-center bg-gradient-to-b from-[#9A9A9A]/20 to-[#9A9A9A]/10 dark:from-dark-box dark:to-dark-box rounded-md px-6 py-2",
    signleCampaignContainer:
      "flex flex-col w-full h-full items-center justify-center bg-gradient-to-b from-[#9A9A9A]/20 to-[#9A9A9A]/10 dark:from-dark-box dark:to-dark-box rounded-md px-6 py-2",
    campaignName: "flex flex-row justify-between mt-4 w-full items-center",
    campaignTitle: "font-bold",
    campaignCategory: "text-xs",
    campaignMoney: "text-sm",
    allCampaigns: "mb-12",
    campaignMoneyRaised: "text-xs",
    campaignTime: "text-sm",
    campaignTimeLeft: "text-xs",
    campaingDesc: "text-sm my-4",
    campaignData: "flex justify-between w-full mb-4",
    campaingImage: "cursor-zoom-in w-full h-[400px]",
    carouselArrows: "flex justify-center items-center gap-4 mt-8 select-none",
    carouselLeft:
      "cursor-pointer w-fit rounded-full bg-gradient-to-r from-light-primary-primary to-light-primary-secondary py-1 px-3 text-light-font-lightV2 font-bold text-lg",
    campaignDetails:
      "font-bold text-2xl text-light-font-lightV1 dark:text-dark-font-lightV1 mt-12",
    stageDetails:
      "font-bold text-2xl text-light-font-lightV1 dark:text-dark-font-lightV1 mt-12 mb-4",
    campaignWebsite:
      "flex items-center gap-4 mt-4 text-light-font-lightV1 dark:text-dark-font-lightV1",
    globe: "w-[20px]",
    link: "w-[10px] cursor-pointer",
    eachStage: "flex gap-4 items-center font-semibold",
    stages:
      "flex flex-col gap-2 text-light-font-lightV1 dark:text-dark-font-lightV1",
    stageLink: "w-[10px]",
    openIcon: "cursor-pointer",
  };
  return (
    <>
      <div className={style.campaignDiv}>
        <div className={style.mainCampaign}>
          <div className={style.campaignImageContainer}>
            {/* TODO: get cross origin error solution */}
            <div
              className={style.campaingImage}
              style={{
                backgroundImage: `url(${campaign?.mediaLinks[mediaLinkIdx]})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={style.carouselArrows}>
        <div
          className={style.carouselLeft}
          onClick={() => {
            prevItem();
          }}
        >
          {"<"}
        </div>
        <div
          className={style.carouselLeft}
          onClick={() => {
            nextItem();
          }}
        >
          {">"}
        </div>
      </div>
      <div className={style.campaignDetails}>
        <p>Campaign Details</p>
      </div>
      <div className={style.campaignWebsite}>
        <p>{campaign?.name}</p>
      </div>
      <div className={style.campaignWebsite}>
        <p>{campaign?.description}</p>
      </div>
      <div className={style.campaignWebsite}>
        <AiOutlineGlobal />
        <p>{campaign?.websiteLink}</p>
        <RiShareBoxFill
          className={style.openIcon}
          onClick={() => {
            `${window.open("//" + campaign?.websiteLink)}`;
          }}
        />
      </div>
      <div className={style.campaignDetails}>
        <p>Token Address</p>
      </div>
      <div className={style.campaignWebsite}>
        <FaEthereum />
        <p>{campaign?.tokenAddress}</p>
      </div>
      <div className={style.stageDetails}>
        <p>Stages</p>
      </div>
      <div className={style.stages}>
        <div className={style.eachStage}>
          <p>First Stage</p>
          <RiShareBoxFill className={style.openIcon} />
        </div>
        <div className={style.eachStage}>
          <p>Second Stage</p>
          <RiShareBoxFill className={style.openIcon} />
        </div>
        <div className={style.eachStage}>
          <p>Third Stage</p>
          <RiShareBoxFill className={style.openIcon} />
        </div>
      </div>
      <div className={style.stageDetails}>
        <p>Recent Campaigns</p>
      </div>
      <div className={`${style.allCampaigns} campaignsMain`}>
        {campaigns &&
          campaigns.map((item, i) => {
            return (
              <CampaignList
                key={i}
                name={item.name}
                description={item.description}
                logoLink={item.logoLink}
                websiteLink={item.websiteLink}
                mediaLinks={item.mediaLinks}
                tokenAddress={item.tokenAddress}
                campaignKey={item.campaignKey}
              />
            );
          })}
      </div>
    </>
  );
}

export default SingleCampaign;

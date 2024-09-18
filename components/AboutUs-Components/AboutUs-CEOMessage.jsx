import React from "react";
import jordan from "@/public/images/jordan.png";

function AboutUsCEOMessage() {
  return (
    <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
      <div className="pt-0 pb-0 pl-5 pr-5 md:pt-0 md:pl-[30px] md:pr-[30px] w-full">
        <div className="gap-6 flex justify-center md:justify-start items-center md:items-start flex-col md:flex-row w-full mt-0 au-hoh-inner-wrapper">
          <div className="flex bg-[#FFF] rounded-[24px] p-3 h-full md:h-96 justify-center gap-4 md:justify-start items-center md:items-start flex-col">
            <div className="il-services-wrapper flex justify-center items-center flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M4.95833 6.52083H8.5M4.95833 9H10.625M4.95833 13.25V14.9043C4.95833 15.2817 4.95833 15.4705 5.0357 15.5674C5.10299 15.6517 5.20502 15.7007 5.31288 15.7006C5.4369 15.7005 5.58427 15.5826 5.87899 15.3468L7.56869 13.995C7.91387 13.7189 8.08645 13.5808 8.27864 13.4827C8.44914 13.3955 8.63064 13.3319 8.81819 13.2934C9.0296 13.25 9.25062 13.25 9.69266 13.25H11.475C12.6651 13.25 13.2602 13.25 13.7147 13.0184C14.1146 12.8147 14.4397 12.4896 14.6434 12.0897C14.875 11.6352 14.875 11.0401 14.875 9.85V6.025C14.875 4.83489 14.875 4.23983 14.6434 3.78527C14.4397 3.38543 14.1146 3.06034 13.7147 2.85661C13.2602 2.625 12.6651 2.625 11.475 2.625H5.525C4.33489 2.625 3.73983 2.625 3.28527 2.85661C2.88543 3.06034 2.56034 3.38543 2.35661 3.78527C2.125 4.23983 2.125 4.83489 2.125 6.025V10.4167C2.125 11.0754 2.125 11.4048 2.19741 11.675C2.3939 12.4083 2.96669 12.9811 3.70001 13.1776C3.97024 13.25 4.2996 13.25 4.95833 13.25Z"
                  stroke="#FF27A0"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="il-services-heading ms-2">Message From CEO</div>
            </div>
            <img
              src={jordan.src}
              alt=""
              className="object-contain rounded-3xl w-full h-full"
            />
          </div>
          <div className="w-full h-full md:h-96 flex justify-center md:justify-start items-center md:items-start gap-4 flex-col">
            <div className="w-full p-5 bg-[#fff] md:p-[32px] h-full rounded-[24px] gap-4 flex justify-center  items-center md:items-start flex-col">
              <div className="w-full text-center md:text-start au-mfc-heading pb-4 border-b-[1px] border-[#EAECF0]">
                “At Harvv our aim in Simple yet Profound: to empower selling and
                purchasing of all sizes in today’s dynamic market”
              </div>
              <div className="w-full text-center md:text-start au-mfc-heading2">
                It's all about Flexibility and Ease
              </div>
              <div className="w-full text-center md:text-start au-mfc-sub-text">
                Our 30, 60, and 90-day terms empower businesses to maintain cash
                flow while offering customers extended payment options. Boost
                sales, enhance customer loyalty, and drive growth with seamless
                financing solutions tailored to your needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCEOMessage;

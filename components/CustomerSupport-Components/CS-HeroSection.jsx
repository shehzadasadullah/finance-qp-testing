import React from "react";

function CSHeroSection() {
  return (
    <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
      <div className="w-full tb-wrapper border-2 flex justify-center items-center flex-col">
        <div className="w-full flex p-8 md:pt-[100px] md:pr-[16px] md:pb-[100px] md:pl-[16px] justify-center items-center flex-col tb-div1-wrapper">
          <div className="w-full">
            <div className="w-full flex text-center tb-main-heading2 justify-center items-center">
              How Can We Help You?
            </div>
            <div className="w-full flex tb-sub-heading text-center justify-center mt-5 items-center">
              We're Here to Help – Get in Touch with Our Support Team
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSHeroSection;

import React from "react";

function FAQsHeroSection() {
  return (
    <>
      {/* Top banner */}

      <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
        <div className="w-full tb-wrapper border-2 flex justify-center items-center flex-col">
          <div className="w-full flex p-8 md:pt-[100px] md:pr-[16px] md:pb-[100px] md:pl-[16px] justify-center items-center flex-col tb-div1-wrapper">
            <div className="w-full">
              <div className="w-full flex text-center tb-main-heading2 justify-center items-center">
                Frequently asked questions
              </div>
              <div className="w-full flex tb-sub-heading text-center justify-center mt-5 items-center">
                Everything you need to know about the product and billing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQsHeroSection;

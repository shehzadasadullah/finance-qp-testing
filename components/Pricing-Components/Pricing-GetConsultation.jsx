import React from "react";

function PricingGetConsultation() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
        <div className="w-full tb-wrapper border-2 flex justify-center items-center flex-col">
          <div className="w-full tb-div1-wrapper">
            <div className="w-full flex p-10 md:pt-[100px] md:pr-[16px] md:pb-[100px] md:pl-[16px] justify-center items-center flex-col tb-div2-wrapper">
              <div className="w-full flex justify-center items-center">
                <button className="tb-button-too-wrapper flex justify-center items-center flex-row tb-button-top-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      d="M14.875 13.25V9C14.875 5.47918 12.0208 2.625 8.5 2.625C4.97919 2.625 2.125 5.47918 2.125 9V13.25M3.89583 15.375C2.91783 15.375 2.125 14.5822 2.125 13.6042V12.1875C2.125 11.2095 2.91783 10.4167 3.89583 10.4167C4.87384 10.4167 5.66667 11.2095 5.66667 12.1875V13.6042C5.66667 14.5822 4.87384 15.375 3.89583 15.375ZM13.1042 15.375C12.1262 15.375 11.3333 14.5822 11.3333 13.6042V12.1875C11.3333 11.2095 12.1262 10.4167 13.1042 10.4167C14.0822 10.4167 14.875 11.2095 14.875 12.1875V13.6042C14.875 14.5822 14.0822 15.375 13.1042 15.375Z"
                      stroke="white"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="ms-2">Get Consultation</div>
                </button>
              </div>
              <div className="flex text-center tb-main-heading justify-center mt-5 items-center">
                Get a Personalized Consultation
              </div>
              <div className="flex tb-sub-heading text-center justify-center mt-5 items-center">
                Enter Your Email for Special Offers and Expert Advice
              </div>
              <div className="flex justify-between items-center gap-3 mt-5 flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Enter you email"
                  className="pricing-input-field"
                />
                <a
                  href="#"
                  className="pricing-footer-button w-full text-center"
                >
                  Get Started
                </a>
              </div>
              <div className="w-full flex pricing-input-filed-sub-text text-center justify-center mt-5 items-center flex-row">
                <div>
                  We care about your data in our{" "}
                  <span className="underline cursor-pointer">
                    privacy policy
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingGetConsultation;

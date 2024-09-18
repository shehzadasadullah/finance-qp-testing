import React from "react";

function AboutUsHistory() {
  return (
    <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
      <div className="p-5 md:pt-0 md:pb-[48px] md:pl-[30px] md:pr-[30px] gap-6 flex justify-center items-center md:items-start flex-col md:flex-row w-full md:mt-8 mt-0">
        <div className="w-full md:w-auto flex md:justify-start justify-center items-center md:items-start flex-col">
          <div className="w-full flex md:justify-between justify-center flex-col md:flex-row items-center">
            <div className="il-services-wrapper flex justify-center items-center flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M9.91671 8.29163H5.66671M7.08337 11.125H5.66671M11.3334 5.45829H5.66671M14.1667 5.31663V12.6833C14.1667 13.8734 14.1667 14.4685 13.9351 14.923C13.7314 15.3229 13.4063 15.648 13.0064 15.8517C12.5519 16.0833 11.9568 16.0833 10.7667 16.0833H6.23337C5.04326 16.0833 4.44821 16.0833 3.99364 15.8517C3.5938 15.648 3.26872 15.3229 3.06499 14.923C2.83337 14.4685 2.83337 13.8734 2.83337 12.6833V5.31663C2.83337 4.12651 2.83337 3.53146 3.06499 3.0769C3.26872 2.67705 3.5938 2.35197 3.99364 2.14824C4.44821 1.91663 5.04326 1.91663 6.23337 1.91663H10.7667C11.9568 1.91663 12.5519 1.91663 13.0064 2.14824C13.4063 2.35197 13.7314 2.67705 13.9351 3.0769C14.1667 3.53146 14.1667 4.12651 14.1667 5.31663Z"
                  stroke="#FF27A0"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="il-services-heading ms-2">History</div>
            </div>
          </div>
          <div className="w-full mt-2 md:mt-2 flex md:justify-between justify-center flex-col md:flex-row items-center">
            <div className="w-full flex md:justify-start justify-center items-center flex-col">
              <div className="w-full text-center md:text-start il-industries-serve">
                What does Harvv means
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-4 flex-col">
          <div className="w-full text-center md:text-start au-history-details">
            Harvv was founded with a clear vision to revolutionize the way
            businesses manage their cash flow and financial health.
          </div>
          <div className="w-full text-center md:text-start au-history-details">
            The name "Harvv" is derived from the concept of "harvest,"
            symbolizing growth, prosperity, and the fruits of hard work. Since
            its inception, Harvv has been committed to providing innovative
            financial solutions that empower businesses to thrive.
          </div>
          <div className="w-full text-center md:text-start au-history-details">
            Our journey began with a simple idea – to make financial processes
            easier, more efficient, and more accessible for businesses of all
            sizes. Over the years, we have grown into a trusted partner for
            countless businesses, helping them navigate financial challenges and
            achieve their goals
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHistory;

import React, { useState } from "react";
import Head from "next/head";
import img1 from "@/public/images/cu-live-chat.png";
import ContactUs from "@/components/contact-us/ContactUs";
import Footer from "@/components/footer/Footer";
import Navbar from "../Navbar/Navbar";

function CustomerSupport() {
  return (
    <>
      <Head>
        <title>Harvv Financing</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full bg-white">
        {/* Navbar Section */}

        <Navbar activePage={"customer-support"}></Navbar>

        {/* About us top banner */}

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

        {/* Contact Us */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <ContactUs></ContactUs>
        </div>

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full">
            <div className="flex p-5 md:pt-0 md:pl-[40px] md:pr-[40px] justify-center items-center flex-col md:flex-row w-full">
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src={img1.src}
                  alt=""
                  className="object-contain md:h-96 w-full"
                />
              </div>
              <div className="w-full gap-5 mt-8 md:mt-0 md:w-1/2 flex justify-center items-center flex-col">
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
                        d="M15.5832 12.5417V9.70833C15.5832 5.79632 12.4119 2.625 8.49984 2.625C4.58782 2.625 1.4165 5.79632 1.4165 9.70833V12.5417M5.31234 15.375C4.33433 15.375 3.5415 14.5822 3.5415 13.6042V11.4792C3.5415 10.5012 4.33433 9.70833 5.31234 9.70833C6.29034 9.70833 7.08317 10.5012 7.08317 11.4792V13.6042C7.08317 14.5822 6.29034 15.375 5.31234 15.375ZM11.6873 15.375C10.7093 15.375 9.9165 14.5822 9.9165 13.6042V11.4792C9.9165 10.5012 10.7093 9.70833 11.6873 9.70833C12.6653 9.70833 13.4582 10.5012 13.4582 11.4792V13.6042C13.4582 14.5822 12.6653 15.375 11.6873 15.375Z"
                        stroke="#FF27A0"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="il-services-heading ms-2">Live Chat</div>
                  </div>
                </div>
                <div className="w-full flex md:justify-between justify-center flex-col md:flex-row items-center">
                  <div className="w-full flex md:justify-start justify-center items-center flex-col">
                    <div className="w-full text-center md:text-start il-industries-serve">
                      Need Immediate Assistance?
                    </div>
                    <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
                      Click here to start a live chat with one of our support
                      representatives
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:justify-start items-center">
                  <button className="il-view-all-button w-full md:w-auto">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="w-full mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full bg-[#0C111D] rounded-[24px]">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSupport;

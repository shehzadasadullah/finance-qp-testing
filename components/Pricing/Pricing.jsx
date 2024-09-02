import React, { useState } from "react";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import xBrand from "@/public/images/x-brand.png";
import Navbar from "../Navbar/Navbar";

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  const tabs = [
    { id: 0, label: "I Want to Offer Net Terms" },
    { id: 1, label: "I Want Financing" },
  ];

  const tabs2 = [
    { id: 0, label: "Monthly" },
    { id: 1, label: "Annually" },
  ];
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

        <Navbar activePage={"pricing"}></Navbar>

        {/* Top banner */}

        <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full tb-wrapper border-2 flex justify-center items-center flex-col">
            <div className="w-full flex p-8 md:pt-[100px] md:pr-[16px] md:pb-[100px] md:pl-[16px] justify-center items-center flex-col tb-div1-wrapper">
              <div className="w-full">
                <div className="w-full flex text-center tb-main-heading2 justify-center items-center">
                  Tailored Solutions, Flexible
                  <br />
                  Plans for Every Need
                </div>
                <div className="w-full flex text-center justify-center mt-5 md:mt-8 items-center">
                  <div className="w-full flex justify-center gap-3 lg:gap-5 items-center">
                    {tabs.map((tab, index) => (
                      <button
                        key={index}
                        className={`transition-all ${
                          activeTab === index ? "tab-active" : "tab-non-active"
                        }`}
                        onClick={() => setActiveTab(index)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}

        {activeTab === 0 && (
          <>
            <div className="mt-5 w-full px-2 lg:px-4 pb-2 lg:pb-4">
              <div className="w-full flex text-center justify-center items-center">
                <div className="w-full flex justify-center gap-3 lg:gap-5 items-center">
                  <div className="tab-wrapper flex justify-center items-center flex-row gap-3">
                    {tabs2.map((tab, index) => (
                      <button
                        key={index}
                        className={`transition-all ${
                          activeTab2 === index
                            ? "tab-active2"
                            : "tab-non-active2"
                        }`}
                        onClick={() => setActiveTab2(index)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full flex justify-center items-center">
                {activeTab2 === 0 && (
                  <>
                    <div className="w-full pt-0 p-5 pb-0 md:pb-0 md:p-8 md:pt-0 flex justify-center items-center flex-col">
                      <div className="w-full gap-5 mt-3 md:mt-4 flex justify-center items-center flex-col md:flex-row">
                        {/* Pricing Section 1 */}

                        <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="33"
                                  height="32"
                                  viewBox="0 0 33 32"
                                  fill="none"
                                >
                                  <path
                                    d="M8.37695 3.43041V19.6923L13.3373 16.1834L24.6231 8.34044L24.6221 7.83882L19.6618 4.39165V5.77831L13.3373 10.1734V0L8.37695 3.43041Z"
                                    fill="url(#paint0_linear_7275_5963)"
                                  />
                                  <path
                                    d="M24.6231 28.5696V12.3077L19.6627 15.8166L8.37695 23.6596L8.37792 24.1612L13.3383 27.6084V26.2217L19.6627 21.8266V32L24.6231 28.5696Z"
                                    fill="url(#paint1_linear_7275_5963)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_7275_5963"
                                      x1="19.1369"
                                      y1="35.6639"
                                      x2="5.00191"
                                      y2="8.48704"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#EC008C" />
                                      <stop offset="1" stop-color="#FC6767" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_7275_5963"
                                      x1="19.1369"
                                      y1="35.6639"
                                      x2="5.00191"
                                      y2="8.48704"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#EC008C" />
                                      <stop offset="1" stop-color="#FC6767" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <div className="pricing-harvv-brand">Harvv</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Standard Plan
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Essentials for Growth
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Branded invoicing, flexible terms, and adaptive
                              credit lines to support your growing business.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                300
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per month
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              I am Just Starting
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors For Invoices
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors On Checkout
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Apple Pay, GPay, Credit, & Debit - 3%
                                  Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Bank Transfer - $10 Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Up To Net 90 Days Terms
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Lines Up To $500,000 Per Invoice
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section 2 */}

                        <div className="w-full pricing-div-wrapper flex justify-start items-start flex-col">
                          <div className="relative w-full flex justify-end items-center">
                            <div className="absolute mt-7 most-popular">
                              Most Popular
                            </div>
                          </div>
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 41 40"
                                  fill="none"
                                >
                                  <g filter="url(#filter0_i_7483_8169)">
                                    <g clip-path="url(#clip0_7483_8169)">
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="#F27B2C"
                                      />
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                        fill-opacity="0.1"
                                      />
                                      <path
                                        d="M11.8335 24.0002C11.8335 30.1838 6.95282 35.2277 0.833496 35.4894V28.0699C2.86202 27.8233 4.43347 26.0952 4.43347 24.0002C4.43347 21.905 2.86203 20.1769 0.833496 19.9302V12.5108C6.95282 12.7726 11.8335 17.8164 11.8335 24.0002Z"
                                        fill="url(#paint0_linear_7483_8169)"
                                        fill-opacity="0.72"
                                        stroke="url(#paint1_linear_7483_8169)"
                                      />
                                      <path
                                        d="M33.8334 15.5004C35.9192 15.5004 37.9329 15.8043 39.8335 16.3699V29.6585C38.232 28.2531 36.1322 27.4003 33.8334 27.4003C28.8077 27.4003 24.7336 31.4746 24.7336 36.5003C24.7336 37.5509 24.9118 38.5606 25.2397 39.5004H13.0461C12.906 38.5208 12.8335 37.5192 12.8335 36.5003C12.8335 24.9025 22.2354 15.5004 33.8334 15.5004Z"
                                        fill="url(#paint2_linear_7483_8169)"
                                        fill-opacity="0.88"
                                        stroke="url(#paint3_linear_7483_8169)"
                                      />
                                      <path
                                        d="M20.3335 15.5004C11.5175 15.5004 4.22344 8.98087 3.01066 0.500366H14.9879C15.9286 2.50835 17.9679 3.90035 20.3335 3.90035C22.699 3.90035 24.7384 2.50837 25.679 0.500366H37.6563C36.4436 8.98087 29.1495 15.5004 20.3335 15.5004Z"
                                        fill="url(#paint4_linear_7483_8169)"
                                        fill-opacity="0.72"
                                        stroke="url(#paint5_linear_7483_8169)"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_i_7483_8169"
                                      x="0.333496"
                                      y="-4"
                                      width="40"
                                      height="44"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-4" />
                                      <feGaussianBlur stdDeviation="4" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_7483_8169"
                                      />
                                    </filter>
                                    <linearGradient
                                      id="paint0_linear_7483_8169"
                                      x1="6.33349"
                                      y1="12.0001"
                                      x2="6.33349"
                                      y2="48.3926"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_7483_8169"
                                      x1="27.5146"
                                      y1="-46.2507"
                                      x2="-22.7573"
                                      y2="-25.8594"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint2_linear_7483_8169"
                                      x1="26.3335"
                                      y1="15.0004"
                                      x2="26.3335"
                                      y2="52.9092"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint3_linear_7483_8169"
                                      x1="75.756"
                                      y1="-45.6776"
                                      x2="0.928641"
                                      y2="22.31"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint4_linear_7483_8169"
                                      x1="20.3335"
                                      y1="0.000366211"
                                      x2="20.3335"
                                      y2="24.2621"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint5_linear_7483_8169"
                                      x1="83.4889"
                                      y1="-38.8336"
                                      x2="42.8105"
                                      y2="34.9632"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <clipPath id="clip0_7483_8169">
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <div className="pricing-harvv-your-brand ms-2">
                                  Your Brand
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              White Label
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Full Control for Scaling
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Custom branding, extended payment options, and
                              enhanced credit limits to elevate your brand.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                995
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per month
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              I want Everything
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors For Invoices
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors On Checkout
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Apple Pay, GPay, Credit, & Debit - 3%
                                  Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Bank Transfer - $10 Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Up To Net 90 Days Terms
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Lines Up To $1.5M Per Invoice
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Rewards (Coming Soon)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section 3 */}

                        <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  className="rounded-full"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="31"
                                  height="30"
                                  viewBox="0 0 41 40"
                                  fill="none"
                                >
                                  <g
                                    clip-path="url(#clip0_7730_986)"
                                    filter="url(#filter0_i_7730_986)"
                                  >
                                    <rect
                                      width="40"
                                      height="40"
                                      transform="translate(0.666504)"
                                      fill="#E2E4E9"
                                    />
                                    <g filter="url(#filter1_b_7730_986)">
                                      <rect
                                        x="5.6665"
                                        y="15.7858"
                                        width="18.9998"
                                        height="39.0001"
                                        rx="1.99999"
                                        fill="url(#paint0_radial_7730_986)"
                                      />
                                      <rect
                                        x="6.1665"
                                        y="16.2858"
                                        width="17.9998"
                                        height="38.0001"
                                        rx="1.49999"
                                        stroke="url(#paint1_radial_7730_986)"
                                        stroke-width="0.999995"
                                      />
                                    </g>
                                    <rect
                                      x="9.6665"
                                      y="20"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="9.6665"
                                      y="27"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="9.6665"
                                      y="34"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <g filter="url(#filter2_bdi_7730_986)">
                                      <rect
                                        x="15.6665"
                                        y="8"
                                        width="18.9997"
                                        height="39.0001"
                                        rx="1.99999"
                                        fill="url(#paint2_radial_7730_986)"
                                        shape-rendering="crispEdges"
                                      />
                                      <rect
                                        x="16.1665"
                                        y="8.5"
                                        width="17.9998"
                                        height="38.0001"
                                        rx="1.49999"
                                        stroke="url(#paint3_radial_7730_986)"
                                        stroke-width="0.999995"
                                        shape-rendering="crispEdges"
                                      />
                                    </g>
                                    <rect
                                      x="19.6665"
                                      y="12.2142"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="19.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="26.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="33.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="12.2142"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="19.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="26.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="33.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_i_7730_986"
                                      x="0.666504"
                                      y="-8"
                                      width="40"
                                      height="48"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-8" />
                                      <feGaussianBlur stdDeviation="8" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.7712 0 0 0 0 0.78 0 0 0 0 0.7888 0 0 0 0.48 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_7730_986"
                                      />
                                    </filter>
                                    <filter
                                      id="filter1_b_7730_986"
                                      x="1.66653"
                                      y="11.7858"
                                      width="26.9995"
                                      height="47.0001"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="1.99999"
                                      />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_7730_986"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_7730_986"
                                        result="shape"
                                      />
                                    </filter>
                                    <filter
                                      id="filter2_bdi_7730_986"
                                      x="11.6665"
                                      y="0"
                                      width="26.9995"
                                      height="55.0001"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="1.99999"
                                      />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_7730_986"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="4" />
                                      <feGaussianBlur stdDeviation="2" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.24 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="effect1_backgroundBlur_7730_986"
                                        result="effect2_dropShadow_7730_986"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect2_dropShadow_7730_986"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-8" />
                                      <feGaussianBlur stdDeviation="4" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect3_innerShadow_7730_986"
                                      />
                                    </filter>
                                    <radialGradient
                                      id="paint0_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(15.1664 15.7858) rotate(90) scale(44.0001 21.4356)"
                                    >
                                      <stop
                                        offset="0.45232"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint1_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(15.1664 15.7858) rotate(90) scale(39.0001 18.9998)"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint2_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(25.1664 8) rotate(90) scale(44.0001 21.4356)"
                                    >
                                      <stop
                                        offset="0.45232"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint3_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(25.1664 8) rotate(90) scale(39.0001 18.9997)"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <clipPath id="clip0_7730_986">
                                      <rect
                                        width="40"
                                        height="40"
                                        fill="white"
                                        transform="translate(0.666504)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Enterprise
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Top-Tier Growth Support
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Custom integration, marketing consulting, and
                              comprehensive financial solutions for major
                              expansion.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                2,995
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per month
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              This is Perfect
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Everything In White Label
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Monthly Marketing Consulting
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Custom Integration & ERP Support
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  2x Rewards
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Auto Invoice & PO Approval(Coming Soon)
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Custom Feature Request
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Up To $2M Per Invoice For Your Customers
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Rewards For Credit Card Transaction
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeTab2 === 1 && (
                  <>
                    <div className="w-full pt-0 p-5 pb-0 md:pb-0 md:p-8 md:pt-0 flex justify-center items-center flex-col">
                      <div className="w-full gap-5 mt-3 md:mt-4 flex justify-center items-center flex-col md:flex-row">
                        {/* Pricing Section 1 */}

                        <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="33"
                                  height="32"
                                  viewBox="0 0 33 32"
                                  fill="none"
                                >
                                  <path
                                    d="M8.37695 3.43041V19.6923L13.3373 16.1834L24.6231 8.34044L24.6221 7.83882L19.6618 4.39165V5.77831L13.3373 10.1734V0L8.37695 3.43041Z"
                                    fill="url(#paint0_linear_7275_5963)"
                                  />
                                  <path
                                    d="M24.6231 28.5696V12.3077L19.6627 15.8166L8.37695 23.6596L8.37792 24.1612L13.3383 27.6084V26.2217L19.6627 21.8266V32L24.6231 28.5696Z"
                                    fill="url(#paint1_linear_7275_5963)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_7275_5963"
                                      x1="19.1369"
                                      y1="35.6639"
                                      x2="5.00191"
                                      y2="8.48704"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#EC008C" />
                                      <stop offset="1" stop-color="#FC6767" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_7275_5963"
                                      x1="19.1369"
                                      y1="35.6639"
                                      x2="5.00191"
                                      y2="8.48704"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#EC008C" />
                                      <stop offset="1" stop-color="#FC6767" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <div className="pricing-harvv-brand">Harvv</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Standard Plan
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Essentials for Growth
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Branded invoicing, flexible terms, and adaptive
                              credit lines to support your growing business.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                300
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per year
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              I am Just Starting
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors For Invoices
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors On Checkout
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Apple Pay, GPay, Credit, & Debit - 3%
                                  Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Bank Transfer - $10 Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Up To Net 90 Days Terms
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Lines Up To $500,000 Per Invoice
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section 2 */}

                        <div className="w-full pricing-div-wrapper flex justify-start items-start flex-col">
                          <div className="relative w-full flex justify-end items-center">
                            <div className="absolute mt-7 most-popular">
                              Most Popular
                            </div>
                          </div>
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 41 40"
                                  fill="none"
                                >
                                  <g filter="url(#filter0_i_7483_8169)">
                                    <g clip-path="url(#clip0_7483_8169)">
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="#F27B2C"
                                      />
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                        fill-opacity="0.1"
                                      />
                                      <path
                                        d="M11.8335 24.0002C11.8335 30.1838 6.95282 35.2277 0.833496 35.4894V28.0699C2.86202 27.8233 4.43347 26.0952 4.43347 24.0002C4.43347 21.905 2.86203 20.1769 0.833496 19.9302V12.5108C6.95282 12.7726 11.8335 17.8164 11.8335 24.0002Z"
                                        fill="url(#paint0_linear_7483_8169)"
                                        fill-opacity="0.72"
                                        stroke="url(#paint1_linear_7483_8169)"
                                      />
                                      <path
                                        d="M33.8334 15.5004C35.9192 15.5004 37.9329 15.8043 39.8335 16.3699V29.6585C38.232 28.2531 36.1322 27.4003 33.8334 27.4003C28.8077 27.4003 24.7336 31.4746 24.7336 36.5003C24.7336 37.5509 24.9118 38.5606 25.2397 39.5004H13.0461C12.906 38.5208 12.8335 37.5192 12.8335 36.5003C12.8335 24.9025 22.2354 15.5004 33.8334 15.5004Z"
                                        fill="url(#paint2_linear_7483_8169)"
                                        fill-opacity="0.88"
                                        stroke="url(#paint3_linear_7483_8169)"
                                      />
                                      <path
                                        d="M20.3335 15.5004C11.5175 15.5004 4.22344 8.98087 3.01066 0.500366H14.9879C15.9286 2.50835 17.9679 3.90035 20.3335 3.90035C22.699 3.90035 24.7384 2.50837 25.679 0.500366H37.6563C36.4436 8.98087 29.1495 15.5004 20.3335 15.5004Z"
                                        fill="url(#paint4_linear_7483_8169)"
                                        fill-opacity="0.72"
                                        stroke="url(#paint5_linear_7483_8169)"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_i_7483_8169"
                                      x="0.333496"
                                      y="-4"
                                      width="40"
                                      height="44"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-4" />
                                      <feGaussianBlur stdDeviation="4" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_7483_8169"
                                      />
                                    </filter>
                                    <linearGradient
                                      id="paint0_linear_7483_8169"
                                      x1="6.33349"
                                      y1="12.0001"
                                      x2="6.33349"
                                      y2="48.3926"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_7483_8169"
                                      x1="27.5146"
                                      y1="-46.2507"
                                      x2="-22.7573"
                                      y2="-25.8594"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint2_linear_7483_8169"
                                      x1="26.3335"
                                      y1="15.0004"
                                      x2="26.3335"
                                      y2="52.9092"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint3_linear_7483_8169"
                                      x1="75.756"
                                      y1="-45.6776"
                                      x2="0.928641"
                                      y2="22.31"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint4_linear_7483_8169"
                                      x1="20.3335"
                                      y1="0.000366211"
                                      x2="20.3335"
                                      y2="24.2621"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint5_linear_7483_8169"
                                      x1="83.4889"
                                      y1="-38.8336"
                                      x2="42.8105"
                                      y2="34.9632"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <clipPath id="clip0_7483_8169">
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <div className="pricing-harvv-your-brand ms-2">
                                  Your Brand
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              White Label
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Full Control for Scaling
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Custom branding, extended payment options, and
                              enhanced credit limits to elevate your brand.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                995
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per year
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              I want Everything
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors For Invoices
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors On Checkout
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Apple Pay, GPay, Credit, & Debit - 3%
                                  Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Bank Transfer - $10 Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Up To Net 90 Days Terms
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Lines Up To $1.5M Per Invoice
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Rewards (Coming Soon)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section 3 */}

                        <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  className="rounded-full"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="31"
                                  height="30"
                                  viewBox="0 0 41 40"
                                  fill="none"
                                >
                                  <g
                                    clip-path="url(#clip0_7730_986)"
                                    filter="url(#filter0_i_7730_986)"
                                  >
                                    <rect
                                      width="40"
                                      height="40"
                                      transform="translate(0.666504)"
                                      fill="#E2E4E9"
                                    />
                                    <g filter="url(#filter1_b_7730_986)">
                                      <rect
                                        x="5.6665"
                                        y="15.7858"
                                        width="18.9998"
                                        height="39.0001"
                                        rx="1.99999"
                                        fill="url(#paint0_radial_7730_986)"
                                      />
                                      <rect
                                        x="6.1665"
                                        y="16.2858"
                                        width="17.9998"
                                        height="38.0001"
                                        rx="1.49999"
                                        stroke="url(#paint1_radial_7730_986)"
                                        stroke-width="0.999995"
                                      />
                                    </g>
                                    <rect
                                      x="9.6665"
                                      y="20"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="9.6665"
                                      y="27"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="9.6665"
                                      y="34"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <g filter="url(#filter2_bdi_7730_986)">
                                      <rect
                                        x="15.6665"
                                        y="8"
                                        width="18.9997"
                                        height="39.0001"
                                        rx="1.99999"
                                        fill="url(#paint2_radial_7730_986)"
                                        shape-rendering="crispEdges"
                                      />
                                      <rect
                                        x="16.1665"
                                        y="8.5"
                                        width="17.9998"
                                        height="38.0001"
                                        rx="1.49999"
                                        stroke="url(#paint3_radial_7730_986)"
                                        stroke-width="0.999995"
                                        shape-rendering="crispEdges"
                                      />
                                    </g>
                                    <rect
                                      x="19.6665"
                                      y="12.2142"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="19.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="26.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="33.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="12.2142"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="19.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="26.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="33.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_i_7730_986"
                                      x="0.666504"
                                      y="-8"
                                      width="40"
                                      height="48"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-8" />
                                      <feGaussianBlur stdDeviation="8" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.7712 0 0 0 0 0.78 0 0 0 0 0.7888 0 0 0 0.48 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_7730_986"
                                      />
                                    </filter>
                                    <filter
                                      id="filter1_b_7730_986"
                                      x="1.66653"
                                      y="11.7858"
                                      width="26.9995"
                                      height="47.0001"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="1.99999"
                                      />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_7730_986"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_7730_986"
                                        result="shape"
                                      />
                                    </filter>
                                    <filter
                                      id="filter2_bdi_7730_986"
                                      x="11.6665"
                                      y="0"
                                      width="26.9995"
                                      height="55.0001"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="1.99999"
                                      />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_7730_986"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="4" />
                                      <feGaussianBlur stdDeviation="2" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.24 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="effect1_backgroundBlur_7730_986"
                                        result="effect2_dropShadow_7730_986"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect2_dropShadow_7730_986"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-8" />
                                      <feGaussianBlur stdDeviation="4" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect3_innerShadow_7730_986"
                                      />
                                    </filter>
                                    <radialGradient
                                      id="paint0_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(15.1664 15.7858) rotate(90) scale(44.0001 21.4356)"
                                    >
                                      <stop
                                        offset="0.45232"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint1_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(15.1664 15.7858) rotate(90) scale(39.0001 18.9998)"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint2_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(25.1664 8) rotate(90) scale(44.0001 21.4356)"
                                    >
                                      <stop
                                        offset="0.45232"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint3_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(25.1664 8) rotate(90) scale(39.0001 18.9997)"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <clipPath id="clip0_7730_986">
                                      <rect
                                        width="40"
                                        height="40"
                                        fill="white"
                                        transform="translate(0.666504)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Enterprise
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Top-Tier Growth Support
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Custom integration, marketing consulting, and
                              comprehensive financial solutions for major
                              expansion.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                2,995
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per year
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              This is Perfect
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Everything In White Label
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Monthly Marketing Consulting
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Custom Integration & ERP Support
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  2x Rewards
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Auto Invoice & PO Approval(Coming Soon)
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Custom Feature Request
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Up To $2M Per Invoice For Your Customers
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Rewards For Credit Card Transaction
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="mt-5 w-full px-2 lg:px-4 pb-2 lg:pb-4">
              <div className="w-full flex text-center justify-center items-center">
                <div className="w-full flex justify-center gap-3 lg:gap-5 items-center">
                  <div className="tab-wrapper flex justify-center items-center flex-row gap-3">
                    {tabs2.map((tab, index) => (
                      <button
                        key={index}
                        className={`transition-all ${
                          activeTab2 === index
                            ? "tab-active2"
                            : "tab-non-active2"
                        }`}
                        onClick={() => setActiveTab2(index)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full flex justify-center items-center">
                {activeTab2 === 0 && (
                  <>
                    <div className="w-full pt-0 p-5 pb-0 md:pb-0 md:p-8 md:pt-0 flex justify-center items-center flex-col">
                      <div className="w-full gap-5 mt-3 md:mt-4 flex justify-center items-center flex-col md:flex-row">
                        {/* Pricing Section 1 */}

                        <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="33"
                                  height="32"
                                  viewBox="0 0 33 32"
                                  fill="none"
                                >
                                  <path
                                    d="M8.37695 3.43041V19.6923L13.3373 16.1834L24.6231 8.34044L24.6221 7.83882L19.6618 4.39165V5.77831L13.3373 10.1734V0L8.37695 3.43041Z"
                                    fill="url(#paint0_linear_7275_5963)"
                                  />
                                  <path
                                    d="M24.6231 28.5696V12.3077L19.6627 15.8166L8.37695 23.6596L8.37792 24.1612L13.3383 27.6084V26.2217L19.6627 21.8266V32L24.6231 28.5696Z"
                                    fill="url(#paint1_linear_7275_5963)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_7275_5963"
                                      x1="19.1369"
                                      y1="35.6639"
                                      x2="5.00191"
                                      y2="8.48704"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#EC008C" />
                                      <stop offset="1" stop-color="#FC6767" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_7275_5963"
                                      x1="19.1369"
                                      y1="35.6639"
                                      x2="5.00191"
                                      y2="8.48704"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#EC008C" />
                                      <stop offset="1" stop-color="#FC6767" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <div className="pricing-harvv-brand">Harvv</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Finance Plan
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Essentials for Growth
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Branded invoicing, flexible terms, and adaptive
                              credit lines to support your growing business.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                300
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per month
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              I am Just Starting
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors For Invoices
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors On Checkout
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Apple Pay, GPay, Credit, & Debit - 3%
                                  Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Bank Transfer - $10 Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Up To Net 90 Days Terms
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Lines Up To $500,000 Per Invoice
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section 2 */}

                        <div className="w-full pricing-div-wrapper flex justify-start items-start flex-col">
                          <div className="relative w-full flex justify-end items-center">
                            <div className="absolute mt-7 most-popular">
                              Most Popular
                            </div>
                          </div>
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 41 40"
                                  fill="none"
                                >
                                  <g filter="url(#filter0_i_7483_8169)">
                                    <g clip-path="url(#clip0_7483_8169)">
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="#F27B2C"
                                      />
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                        fill-opacity="0.1"
                                      />
                                      <path
                                        d="M11.8335 24.0002C11.8335 30.1838 6.95282 35.2277 0.833496 35.4894V28.0699C2.86202 27.8233 4.43347 26.0952 4.43347 24.0002C4.43347 21.905 2.86203 20.1769 0.833496 19.9302V12.5108C6.95282 12.7726 11.8335 17.8164 11.8335 24.0002Z"
                                        fill="url(#paint0_linear_7483_8169)"
                                        fill-opacity="0.72"
                                        stroke="url(#paint1_linear_7483_8169)"
                                      />
                                      <path
                                        d="M33.8334 15.5004C35.9192 15.5004 37.9329 15.8043 39.8335 16.3699V29.6585C38.232 28.2531 36.1322 27.4003 33.8334 27.4003C28.8077 27.4003 24.7336 31.4746 24.7336 36.5003C24.7336 37.5509 24.9118 38.5606 25.2397 39.5004H13.0461C12.906 38.5208 12.8335 37.5192 12.8335 36.5003C12.8335 24.9025 22.2354 15.5004 33.8334 15.5004Z"
                                        fill="url(#paint2_linear_7483_8169)"
                                        fill-opacity="0.88"
                                        stroke="url(#paint3_linear_7483_8169)"
                                      />
                                      <path
                                        d="M20.3335 15.5004C11.5175 15.5004 4.22344 8.98087 3.01066 0.500366H14.9879C15.9286 2.50835 17.9679 3.90035 20.3335 3.90035C22.699 3.90035 24.7384 2.50837 25.679 0.500366H37.6563C36.4436 8.98087 29.1495 15.5004 20.3335 15.5004Z"
                                        fill="url(#paint4_linear_7483_8169)"
                                        fill-opacity="0.72"
                                        stroke="url(#paint5_linear_7483_8169)"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_i_7483_8169"
                                      x="0.333496"
                                      y="-4"
                                      width="40"
                                      height="44"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-4" />
                                      <feGaussianBlur stdDeviation="4" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_7483_8169"
                                      />
                                    </filter>
                                    <linearGradient
                                      id="paint0_linear_7483_8169"
                                      x1="6.33349"
                                      y1="12.0001"
                                      x2="6.33349"
                                      y2="48.3926"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_7483_8169"
                                      x1="27.5146"
                                      y1="-46.2507"
                                      x2="-22.7573"
                                      y2="-25.8594"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint2_linear_7483_8169"
                                      x1="26.3335"
                                      y1="15.0004"
                                      x2="26.3335"
                                      y2="52.9092"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint3_linear_7483_8169"
                                      x1="75.756"
                                      y1="-45.6776"
                                      x2="0.928641"
                                      y2="22.31"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint4_linear_7483_8169"
                                      x1="20.3335"
                                      y1="0.000366211"
                                      x2="20.3335"
                                      y2="24.2621"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint5_linear_7483_8169"
                                      x1="83.4889"
                                      y1="-38.8336"
                                      x2="42.8105"
                                      y2="34.9632"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <clipPath id="clip0_7483_8169">
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <div className="pricing-harvv-your-brand ms-2">
                                  Your Brand
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Finance Label
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Full Control for Scaling
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Custom branding, extended payment options, and
                              enhanced credit limits to elevate your brand.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                995
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per month
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              I want Everything
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors For Invoices
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors On Checkout
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Apple Pay, GPay, Credit, & Debit - 3%
                                  Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Bank Transfer - $10 Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Up To Net 90 Days Terms
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Lines Up To $1.5M Per Invoice
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Rewards (Coming Soon)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section 3 */}

                        <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  className="rounded-full"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="31"
                                  height="30"
                                  viewBox="0 0 41 40"
                                  fill="none"
                                >
                                  <g
                                    clip-path="url(#clip0_7730_986)"
                                    filter="url(#filter0_i_7730_986)"
                                  >
                                    <rect
                                      width="40"
                                      height="40"
                                      transform="translate(0.666504)"
                                      fill="#E2E4E9"
                                    />
                                    <g filter="url(#filter1_b_7730_986)">
                                      <rect
                                        x="5.6665"
                                        y="15.7858"
                                        width="18.9998"
                                        height="39.0001"
                                        rx="1.99999"
                                        fill="url(#paint0_radial_7730_986)"
                                      />
                                      <rect
                                        x="6.1665"
                                        y="16.2858"
                                        width="17.9998"
                                        height="38.0001"
                                        rx="1.49999"
                                        stroke="url(#paint1_radial_7730_986)"
                                        stroke-width="0.999995"
                                      />
                                    </g>
                                    <rect
                                      x="9.6665"
                                      y="20"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="9.6665"
                                      y="27"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="9.6665"
                                      y="34"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <g filter="url(#filter2_bdi_7730_986)">
                                      <rect
                                        x="15.6665"
                                        y="8"
                                        width="18.9997"
                                        height="39.0001"
                                        rx="1.99999"
                                        fill="url(#paint2_radial_7730_986)"
                                        shape-rendering="crispEdges"
                                      />
                                      <rect
                                        x="16.1665"
                                        y="8.5"
                                        width="17.9998"
                                        height="38.0001"
                                        rx="1.49999"
                                        stroke="url(#paint3_radial_7730_986)"
                                        stroke-width="0.999995"
                                        shape-rendering="crispEdges"
                                      />
                                    </g>
                                    <rect
                                      x="19.6665"
                                      y="12.2142"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="19.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="26.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="33.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="12.2142"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="19.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="26.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="33.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_i_7730_986"
                                      x="0.666504"
                                      y="-8"
                                      width="40"
                                      height="48"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-8" />
                                      <feGaussianBlur stdDeviation="8" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.7712 0 0 0 0 0.78 0 0 0 0 0.7888 0 0 0 0.48 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_7730_986"
                                      />
                                    </filter>
                                    <filter
                                      id="filter1_b_7730_986"
                                      x="1.66653"
                                      y="11.7858"
                                      width="26.9995"
                                      height="47.0001"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="1.99999"
                                      />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_7730_986"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_7730_986"
                                        result="shape"
                                      />
                                    </filter>
                                    <filter
                                      id="filter2_bdi_7730_986"
                                      x="11.6665"
                                      y="0"
                                      width="26.9995"
                                      height="55.0001"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="1.99999"
                                      />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_7730_986"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="4" />
                                      <feGaussianBlur stdDeviation="2" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.24 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="effect1_backgroundBlur_7730_986"
                                        result="effect2_dropShadow_7730_986"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect2_dropShadow_7730_986"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-8" />
                                      <feGaussianBlur stdDeviation="4" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect3_innerShadow_7730_986"
                                      />
                                    </filter>
                                    <radialGradient
                                      id="paint0_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(15.1664 15.7858) rotate(90) scale(44.0001 21.4356)"
                                    >
                                      <stop
                                        offset="0.45232"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint1_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(15.1664 15.7858) rotate(90) scale(39.0001 18.9998)"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint2_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(25.1664 8) rotate(90) scale(44.0001 21.4356)"
                                    >
                                      <stop
                                        offset="0.45232"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint3_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(25.1664 8) rotate(90) scale(39.0001 18.9997)"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <clipPath id="clip0_7730_986">
                                      <rect
                                        width="40"
                                        height="40"
                                        fill="white"
                                        transform="translate(0.666504)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Finance ERP
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Top-Tier Growth Support
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Custom integration, marketing consulting, and
                              comprehensive financial solutions for major
                              expansion.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                2,995
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per month
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              This is Perfect
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Everything In White Label
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Monthly Marketing Consulting
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Custom Integration & ERP Support
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  2x Rewards
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Auto Invoice & PO Approval(Coming Soon)
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Custom Feature Request
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Up To $2M Per Invoice For Your Customers
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Rewards For Credit Card Transaction
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeTab2 === 1 && (
                  <>
                    <div className="w-full pt-0 p-5 pb-0 md:pb-0 md:p-8 md:pt-0 flex justify-center items-center flex-col">
                      <div className="w-full gap-5 mt-3 md:mt-4 flex justify-center items-center flex-col md:flex-row">
                        {/* Pricing Section 1 */}

                        <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="33"
                                  height="32"
                                  viewBox="0 0 33 32"
                                  fill="none"
                                >
                                  <path
                                    d="M8.37695 3.43041V19.6923L13.3373 16.1834L24.6231 8.34044L24.6221 7.83882L19.6618 4.39165V5.77831L13.3373 10.1734V0L8.37695 3.43041Z"
                                    fill="url(#paint0_linear_7275_5963)"
                                  />
                                  <path
                                    d="M24.6231 28.5696V12.3077L19.6627 15.8166L8.37695 23.6596L8.37792 24.1612L13.3383 27.6084V26.2217L19.6627 21.8266V32L24.6231 28.5696Z"
                                    fill="url(#paint1_linear_7275_5963)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_7275_5963"
                                      x1="19.1369"
                                      y1="35.6639"
                                      x2="5.00191"
                                      y2="8.48704"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#EC008C" />
                                      <stop offset="1" stop-color="#FC6767" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_7275_5963"
                                      x1="19.1369"
                                      y1="35.6639"
                                      x2="5.00191"
                                      y2="8.48704"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#EC008C" />
                                      <stop offset="1" stop-color="#FC6767" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <div className="pricing-harvv-brand">Harvv</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Standard Plan
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Essentials for Growth
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Branded invoicing, flexible terms, and adaptive
                              credit lines to support your growing business.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                300
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per year
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              I am Just Starting
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors For Invoices
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors On Checkout
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Apple Pay, GPay, Credit, & Debit - 3%
                                  Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Bank Transfer - $10 Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Up To Net 90 Days Terms
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Lines Up To $500,000 Per Invoice
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section 2 */}

                        <div className="w-full pricing-div-wrapper flex justify-start items-start flex-col">
                          <div className="relative w-full flex justify-end items-center">
                            <div className="absolute mt-7 most-popular">
                              Most Popular
                            </div>
                          </div>
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 41 40"
                                  fill="none"
                                >
                                  <g filter="url(#filter0_i_7483_8169)">
                                    <g clip-path="url(#clip0_7483_8169)">
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="#F27B2C"
                                      />
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                        fill-opacity="0.1"
                                      />
                                      <path
                                        d="M11.8335 24.0002C11.8335 30.1838 6.95282 35.2277 0.833496 35.4894V28.0699C2.86202 27.8233 4.43347 26.0952 4.43347 24.0002C4.43347 21.905 2.86203 20.1769 0.833496 19.9302V12.5108C6.95282 12.7726 11.8335 17.8164 11.8335 24.0002Z"
                                        fill="url(#paint0_linear_7483_8169)"
                                        fill-opacity="0.72"
                                        stroke="url(#paint1_linear_7483_8169)"
                                      />
                                      <path
                                        d="M33.8334 15.5004C35.9192 15.5004 37.9329 15.8043 39.8335 16.3699V29.6585C38.232 28.2531 36.1322 27.4003 33.8334 27.4003C28.8077 27.4003 24.7336 31.4746 24.7336 36.5003C24.7336 37.5509 24.9118 38.5606 25.2397 39.5004H13.0461C12.906 38.5208 12.8335 37.5192 12.8335 36.5003C12.8335 24.9025 22.2354 15.5004 33.8334 15.5004Z"
                                        fill="url(#paint2_linear_7483_8169)"
                                        fill-opacity="0.88"
                                        stroke="url(#paint3_linear_7483_8169)"
                                      />
                                      <path
                                        d="M20.3335 15.5004C11.5175 15.5004 4.22344 8.98087 3.01066 0.500366H14.9879C15.9286 2.50835 17.9679 3.90035 20.3335 3.90035C22.699 3.90035 24.7384 2.50837 25.679 0.500366H37.6563C36.4436 8.98087 29.1495 15.5004 20.3335 15.5004Z"
                                        fill="url(#paint4_linear_7483_8169)"
                                        fill-opacity="0.72"
                                        stroke="url(#paint5_linear_7483_8169)"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_i_7483_8169"
                                      x="0.333496"
                                      y="-4"
                                      width="40"
                                      height="44"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-4" />
                                      <feGaussianBlur stdDeviation="4" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_7483_8169"
                                      />
                                    </filter>
                                    <linearGradient
                                      id="paint0_linear_7483_8169"
                                      x1="6.33349"
                                      y1="12.0001"
                                      x2="6.33349"
                                      y2="48.3926"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_7483_8169"
                                      x1="27.5146"
                                      y1="-46.2507"
                                      x2="-22.7573"
                                      y2="-25.8594"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint2_linear_7483_8169"
                                      x1="26.3335"
                                      y1="15.0004"
                                      x2="26.3335"
                                      y2="52.9092"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint3_linear_7483_8169"
                                      x1="75.756"
                                      y1="-45.6776"
                                      x2="0.928641"
                                      y2="22.31"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint4_linear_7483_8169"
                                      x1="20.3335"
                                      y1="0.000366211"
                                      x2="20.3335"
                                      y2="24.2621"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.313079"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint5_linear_7483_8169"
                                      x1="83.4889"
                                      y1="-38.8336"
                                      x2="42.8105"
                                      y2="34.9632"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </linearGradient>
                                    <clipPath id="clip0_7483_8169">
                                      <rect
                                        x="0.333496"
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <div className="pricing-harvv-your-brand ms-2">
                                  Your Brand
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              White Label
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Full Control for Scaling
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Custom branding, extended payment options, and
                              enhanced credit limits to elevate your brand.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                995
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per year
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              I want Everything
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors For Invoices
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Harvv Brand & Colors On Checkout
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Apple Pay, GPay, Credit, & Debit - 3%
                                  Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Bank Transfer - $10 Flat
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Offer Up To Net 90 Days Terms
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Lines Up To $1.5M Per Invoice
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Rewards (Coming Soon)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section 3 */}

                        <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                          <div className="p-6 pb-0 md:p-6 md:pb-0 flex justify-start items-center w-full">
                            <div className="pricing-header-wrapper flex justify-start items-center flex-row">
                              <div className="flex justify-start items-center flex-row">
                                <svg
                                  className="rounded-full"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="31"
                                  height="30"
                                  viewBox="0 0 41 40"
                                  fill="none"
                                >
                                  <g
                                    clip-path="url(#clip0_7730_986)"
                                    filter="url(#filter0_i_7730_986)"
                                  >
                                    <rect
                                      width="40"
                                      height="40"
                                      transform="translate(0.666504)"
                                      fill="#E2E4E9"
                                    />
                                    <g filter="url(#filter1_b_7730_986)">
                                      <rect
                                        x="5.6665"
                                        y="15.7858"
                                        width="18.9998"
                                        height="39.0001"
                                        rx="1.99999"
                                        fill="url(#paint0_radial_7730_986)"
                                      />
                                      <rect
                                        x="6.1665"
                                        y="16.2858"
                                        width="17.9998"
                                        height="38.0001"
                                        rx="1.49999"
                                        stroke="url(#paint1_radial_7730_986)"
                                        stroke-width="0.999995"
                                      />
                                    </g>
                                    <rect
                                      x="9.6665"
                                      y="20"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="9.6665"
                                      y="27"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="9.6665"
                                      y="34"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <g filter="url(#filter2_bdi_7730_986)">
                                      <rect
                                        x="15.6665"
                                        y="8"
                                        width="18.9997"
                                        height="39.0001"
                                        rx="1.99999"
                                        fill="url(#paint2_radial_7730_986)"
                                        shape-rendering="crispEdges"
                                      />
                                      <rect
                                        x="16.1665"
                                        y="8.5"
                                        width="17.9998"
                                        height="38.0001"
                                        rx="1.49999"
                                        stroke="url(#paint3_radial_7730_986)"
                                        stroke-width="0.999995"
                                        shape-rendering="crispEdges"
                                      />
                                    </g>
                                    <rect
                                      x="19.6665"
                                      y="12.2142"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="19.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="26.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="19.6665"
                                      y="33.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="12.2142"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="19.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="26.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                    <rect
                                      x="26.6665"
                                      y="33.2144"
                                      width="3.99995"
                                      height="4.00001"
                                      rx="0.5"
                                      fill="#E2E4E9"
                                    />
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter0_i_7730_986"
                                      x="0.666504"
                                      y="-8"
                                      width="40"
                                      height="48"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-8" />
                                      <feGaussianBlur stdDeviation="8" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.7712 0 0 0 0 0.78 0 0 0 0 0.7888 0 0 0 0.48 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_7730_986"
                                      />
                                    </filter>
                                    <filter
                                      id="filter1_b_7730_986"
                                      x="1.66653"
                                      y="11.7858"
                                      width="26.9995"
                                      height="47.0001"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="1.99999"
                                      />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_7730_986"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_7730_986"
                                        result="shape"
                                      />
                                    </filter>
                                    <filter
                                      id="filter2_bdi_7730_986"
                                      x="11.6665"
                                      y="0"
                                      width="26.9995"
                                      height="55.0001"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="1.99999"
                                      />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_7730_986"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="4" />
                                      <feGaussianBlur stdDeviation="2" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.24 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="effect1_backgroundBlur_7730_986"
                                        result="effect2_dropShadow_7730_986"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect2_dropShadow_7730_986"
                                        result="shape"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="-8" />
                                      <feGaussianBlur stdDeviation="4" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect3_innerShadow_7730_986"
                                      />
                                    </filter>
                                    <radialGradient
                                      id="paint0_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(15.1664 15.7858) rotate(90) scale(44.0001 21.4356)"
                                    >
                                      <stop
                                        offset="0.45232"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint1_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(15.1664 15.7858) rotate(90) scale(39.0001 18.9998)"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint2_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(25.1664 8) rotate(90) scale(44.0001 21.4356)"
                                    >
                                      <stop
                                        offset="0.45232"
                                        stop-color="white"
                                      />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <radialGradient
                                      id="paint3_radial_7730_986"
                                      cx="0"
                                      cy="0"
                                      r="1"
                                      gradientUnits="userSpaceOnUse"
                                      gradientTransform="translate(25.1664 8) rotate(90) scale(39.0001 18.9997)"
                                    >
                                      <stop stop-color="white" />
                                      <stop
                                        offset="1"
                                        stop-color="white"
                                        stop-opacity="0"
                                      />
                                    </radialGradient>
                                    <clipPath id="clip0_7730_986">
                                      <rect
                                        width="40"
                                        height="40"
                                        fill="white"
                                        transform="translate(0.666504)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                            <div className="w-full pricing-card-plan-heading text-start">
                              Enterprise
                            </div>
                            <div className="w-full pricing-new-sub-heading">
                              Top-Tier Growth Support
                            </div>
                            <div className="w-full pricing-new-sub-heading2">
                              Custom integration, marketing consulting, and
                              comprehensive financial solutions for major
                              expansion.
                            </div>
                            <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                              <div className="pricing-dollar-sign mt-[-5%]">
                                $
                              </div>
                              <div className="pricing-dollar-text ms-1">
                                2,995
                              </div>
                              <div className="pricing-dollar-per-month mt-[3%] ms-1">
                                per year
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex p-6 gap-2 justify-start items-center flex-col">
                            <button
                              href="#"
                              className="w-full pricing-footer-button text-center"
                            >
                              This is Perfect
                            </button>
                            <div className="w-full text-start mt-3 pricing-the-includes">
                              THE INCLUDES:
                            </div>
                            <div className="w-full md:h-96">
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Everything In White Label
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Monthly Marketing Consulting
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Custom Integration & ERP Support
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  2x Rewards
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Auto Invoice & PO Approval(Coming Soon)
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Custom Feature Request
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Up To $2M Per Invoice For Your Customers
                                </div>
                              </div>
                              <div className="w-full gap-3 mt-3 flex justify-start items-center flex-row">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                    fill="#DCFAE6"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                                    fill="#079455"
                                  />
                                </svg>
                                <div className="pricing-card-items-heading">
                                  Rewards For Credit Card Transaction
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        {/* Get a Personalized Consultation */}

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

export default Pricing;

import React, { useState, useEffect } from "react";
import Head from "next/head";
import xBrand from "@/public/images/x-brand.png";
import Navbar from "../common/Navbar";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import qb_Logo from "@/public/images/quickBooks_logo.png";

function PricingHeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [activeTabSellerOrBuyer, setActiveTabSellerOrBuyer] = useState(0);
  const [open, setOpen] = useState(false);

  const tabs = [
    { id: 0, label: "I Want to Offer Net Terms" },
    { id: 1, label: "I Want Financing" },
  ];

  const tabs2 = [
    { id: 0, label: "Monthly" },
    { id: 1, label: "Annually" },
  ];

  const tabsSellerOrBuyer = [
    { id: 0, label: "As Seller" },
    { id: 1, label: "As Buyer" },
  ];

  useEffect(() => {
    console.log(activeTabSellerOrBuyer);
    if (activeTabSellerOrBuyer === 1) {
      setOpen(true);
      console.log("Called 1");
    }
  }, [activeTabSellerOrBuyer]);
  return (
    <>
      <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
        <div className="w-full tb-wrapper border-2 flex justify-center items-center flex-col">
          <div className="w-full flex p-8 md:pt-[100px] md:pr-[16px] md:pb-[100px] md:pl-[16px] justify-center items-center flex-col tb-div1-wrapper">
            <div className="w-full">
              <div className="w-full flex text-center justify-center items-center">
                <div className="w-full flex justify-center gap-2 items-center">
                  <div className="tab-wrapper-seller-buyer flex justify-center items-center flex-row gap-2">
                    {tabsSellerOrBuyer.map((tab, index) => (
                      <button
                        key={index}
                        className={`transition-all ${
                          activeTabSellerOrBuyer === index
                            ? "tab-wrapper-seller-buyer-active"
                            : "tab-wrapper-seller-buyer-non-active"
                        }`}
                        onClick={() => {
                          setActiveTabSellerOrBuyer(index);
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 md:mt-8 w-full flex text-center tb-main-heading2 justify-center items-center">
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
                        activeTab2 === index ? "tab-active2" : "tab-non-active2"
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
                            <div className="pricing-dollar-text ms-1">300</div>
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
                                Offer Apple Pay, GPay, Credit, & Debit - 3% Flat
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
                            <div className="pricing-dollar-text ms-1">995</div>
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
                                Offer Apple Pay, GPay, Credit, & Debit - 3% Flat
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
                                    <stop offset="0.45232" stop-color="white" />
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
                                    <stop offset="0.45232" stop-color="white" />
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
                            <div className="pricing-dollar-text ms-1">300</div>
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
                                Offer Apple Pay, GPay, Credit, & Debit - 3% Flat
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
                            <div className="pricing-dollar-text ms-1">995</div>
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
                                Offer Apple Pay, GPay, Credit, & Debit - 3% Flat
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
                                    <stop offset="0.45232" stop-color="white" />
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
                                    <stop offset="0.45232" stop-color="white" />
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
                        activeTab2 === index ? "tab-active2" : "tab-non-active2"
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
                            <div className="pricing-dollar-text ms-1">300</div>
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
                                Offer Apple Pay, GPay, Credit, & Debit - 3% Flat
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
                            <div className="pricing-dollar-text ms-1">995</div>
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
                                Offer Apple Pay, GPay, Credit, & Debit - 3% Flat
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
                                    <stop offset="0.45232" stop-color="white" />
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
                                    <stop offset="0.45232" stop-color="white" />
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
                            <div className="pricing-dollar-text ms-1">300</div>
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
                                Offer Apple Pay, GPay, Credit, & Debit - 3% Flat
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
                            <div className="pricing-dollar-text ms-1">995</div>
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
                                Offer Apple Pay, GPay, Credit, & Debit - 3% Flat
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
                                    <stop offset="0.45232" stop-color="white" />
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
                                    <stop offset="0.45232" stop-color="white" />
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

      {/* Modal */}

      <Dialog open={open} onClose={() => {}} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-[#0C111D] bg-opacity-60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative modal-custom-css transform overflow-hidden rounded-xl bg-white text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="w-full flex justify-center items-center flex-col">
                {/* Modal Header */}

                <div className="w-full border-b-[1px] p-6 border-[#EAECF0] flex justify-between items-start flex-row">
                  <div className="w-full gap-3 flex justify-start items-center flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                    >
                      <rect
                        x="0.444336"
                        width="48"
                        height="48"
                        rx="8"
                        fill="url(#paint0_linear_8081_11179)"
                      />
                      <path
                        d="M17.1108 12.4793V27.7925L21.7818 24.4883L32.4092 17.1029L32.4083 16.6305L27.7373 13.3845V14.6902L21.7818 18.829V9.24902L17.1108 12.4793Z"
                        fill="white"
                      />
                      <path
                        d="M32.4092 36.1519V20.8387L27.7382 24.1429L17.1108 31.5283L17.1118 32.0007L21.7827 35.2468V33.941L27.7382 29.8023V39.3822L32.4092 36.1519Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_8081_11179"
                          x1="32.235"
                          y1="53.4959"
                          x2="19.4502"
                          y2="5.07886"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#EC008C" />
                          <stop offset="1" stop-color="#FC6767" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="text-start c-modal-heading">
                      Welcome to Harvv! 🌟
                    </div>
                  </div>

                  {/* Close Button */}

                  <svg
                    onClick={() => {
                      setOpen(false);
                      setActiveTabSellerOrBuyer(0);
                    }}
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M18.4443 6L6.44434 18M6.44434 6L18.4443 18"
                      stroke="#98A2B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                {/* Modal Body */}

                <div className="w-full p-6 gap-3 flex justify-center items-center flex-col">
                  <div className="w-full c-modal-benefits text-center md:text-start">
                    Discover the Benefits of Shopping with Harvv:
                  </div>

                  {/* Feature 1 */}

                  <div className="c-modal-features-wrapper gap-3 w-full flex justify-start items-center flex-row">
                    <div className="rounded-full flex justify-center items-center bg-[#38C793] p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M13.626 5.2726L7.26304 11.6365L3.44434 7.8178L4.71694 6.5452L7.26304 9.0913L12.3534 4L13.626 5.2726Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="w-full text-start">
                      As a buyer, you can sign up for free.
                    </div>
                  </div>

                  {/* Feature 2 */}

                  <div className="c-modal-features-wrapper gap-3 w-full flex justify-start items-center flex-row">
                    <div className="rounded-full flex justify-center items-center bg-[#38C793] p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M13.626 5.2726L7.26304 11.6365L3.44434 7.8178L4.71694 6.5452L7.26304 9.0913L12.3534 4L13.626 5.2726Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="w-full text-start">Fast Approvals.</div>
                  </div>

                  {/* Feature 3 */}

                  <div className="c-modal-features-wrapper gap-3 w-full flex justify-start items-center flex-row">
                    <div className="rounded-full flex justify-center items-center bg-[#38C793] p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M13.626 5.2726L7.26304 11.6365L3.44434 7.8178L4.71694 6.5452L7.26304 9.0913L12.3534 4L13.626 5.2726Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="w-full text-start">
                      Quick and easy sign up.
                    </div>
                  </div>

                  {/* Buttons */}

                  <Link
                    href="https://b2b.harvv.com/register"
                    target="_blank"
                    className="w-full mt-2 pricing-footer-button text-center"
                  >
                    Sign Up
                  </Link>

                  <div className="w-full c-modal-benefits text-center">OR</div>

                  <Link
                    href="https://b2b.harvv.com/register"
                    target="_blank"
                    className="w-full flex justify-center items-center"
                  >
                    <svg
                      width="201"
                      height="48"
                      viewBox="0 0 201 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0H197C199.209 0 201 1.79086 201 4V44C201 46.2091 199.209 48 197 48H4C1.79086 48 0 46.2091 0 44V4Z"
                        fill="#0077C5"
                      />
                      <path
                        d="M30.4805 18C29.4005 16.98 27.7805 16.48 26.3605 16.48C23.8005 16.48 21.1805 17.76 21.1805 20.64C21.1805 23.28 23.0405 24.12 24.7605 24.66C26.5405 25.22 28.0205 25.64 28.0205 27.12C28.0205 28.64 26.6405 29.22 25.4605 29.22C24.3405 29.22 23.0605 28.62 22.3605 27.66L20.5605 29.34C21.6805 30.66 23.5805 31.36 25.4205 31.36C28.2005 31.36 30.5805 29.88 30.5805 26.84C30.5805 24.06 28.2605 23.26 26.4405 22.7C24.8405 22.2 23.7405 21.82 23.7405 20.52C23.7405 19.14 25.0805 18.58 26.2405 18.58C27.2405 18.58 28.3005 19.1 28.8405 19.8L30.4805 18ZM33.0249 31H35.4249V21.4H33.0249V31ZM32.6849 18.14C32.6849 18.9 33.3249 19.58 34.2049 19.58C35.0849 19.58 35.7649 18.96 35.7649 18.14C35.7649 17.32 35.0849 16.7 34.2049 16.7C33.3249 16.7 32.6849 17.38 32.6849 18.14ZM45.8165 21.4V22.84H45.7765C45.0765 21.68 43.8165 21.12 42.4765 21.12C39.5765 21.12 37.7765 23.38 37.7765 26.16C37.7765 28.88 39.6365 31.16 42.5165 31.16C43.8365 31.16 44.9565 30.66 45.6565 29.72H45.6965V30.42C45.6965 32.32 44.9765 33.72 42.6565 33.72C41.4565 33.72 40.2165 33.24 39.2965 32.36L37.9165 34.22C39.1565 35.24 41.1165 35.8 42.6765 35.8C46.4165 35.8 48.0965 33.6 48.0965 30.14V21.4H45.8165ZM42.9765 23.08C44.7165 23.08 45.8165 24.48 45.8165 26.14C45.8165 27.74 44.7365 29.18 42.9565 29.18C41.2365 29.18 40.2165 27.66 40.2165 26.14C40.2165 24.44 41.2365 23.08 42.9765 23.08ZM50.9732 31H53.3732V25.72C53.3732 24.44 54.0932 23.12 55.6132 23.12C57.1532 23.12 57.4132 24.54 57.4132 25.68V31H59.8132V25C59.8132 23.04 58.7732 21.12 56.2732 21.12C54.8532 21.12 53.7132 21.98 53.2932 22.94H53.2532V21.4H50.9732V31ZM67.6538 31H70.0538V21.4H67.6538V31ZM67.3138 18.14C67.3138 18.9 67.9538 19.58 68.8338 19.58C69.7138 19.58 70.3938 18.96 70.3938 18.14C70.3938 17.32 69.7138 16.7 68.8338 16.7C67.9538 16.7 67.3138 17.38 67.3138 18.14ZM72.9654 31H75.3654V25.72C75.3654 24.44 76.0854 23.12 77.6054 23.12C79.1454 23.12 79.4054 24.54 79.4054 25.68V31H81.8054V25C81.8054 23.04 80.7654 21.12 78.2654 21.12C76.8454 21.12 75.7054 21.98 75.2854 22.94H75.2454V21.4H72.9654V31ZM91.586 31H94.026L96.186 24.28H96.226L98.406 31H100.846L104.166 21.4H101.666L99.626 28.28H99.586L97.506 21.4H94.946L92.886 28.28H92.846L90.846 21.4H88.246L91.586 31ZM105.72 31H108.12V21.4H105.72V31ZM105.38 18.14C105.38 18.9 106.02 19.58 106.9 19.58C107.78 19.58 108.46 18.96 108.46 18.14C108.46 17.32 107.78 16.7 106.9 16.7C106.02 16.7 105.38 17.38 105.38 18.14ZM111.332 23.32V27.8C111.332 29.64 111.912 31.2 114.452 31.2C114.992 31.2 115.632 31.1 116.052 30.94L115.972 29.06C115.692 29.2 115.272 29.26 114.952 29.26C113.892 29.26 113.692 28.64 113.692 27.78V23.32H116.092V21.4H113.692V18.62H111.332V21.4H109.652V23.32H111.332ZM123.169 21.12C121.749 21.12 120.689 21.94 120.309 22.74H120.269V15.88H117.869V31H120.269V25.76C120.269 24.48 121.009 23.18 122.529 23.18C124.069 23.18 124.309 24.58 124.309 25.72V31H126.709V25C126.709 23.04 125.669 21.12 123.169 21.12ZM134.628 31H137.148V16.84H134.628V31ZM140.153 31H142.553V25.72C142.553 24.44 143.273 23.12 144.793 23.12C146.333 23.12 146.593 24.54 146.593 25.68V31H148.993V25C148.993 23.04 147.953 21.12 145.453 21.12C144.033 21.12 142.893 21.98 142.473 22.94H142.433V21.4H140.153V31ZM152.094 23.32V27.8C152.094 29.64 152.674 31.2 155.214 31.2C155.754 31.2 156.394 31.1 156.814 30.94L156.734 29.06C156.454 29.2 156.034 29.26 155.714 29.26C154.654 29.26 154.454 28.64 154.454 27.78V23.32H156.854V21.4H154.454V18.62H152.094V21.4H150.414V23.32H152.094ZM167.35 21.4H164.95V26.68C164.95 27.96 164.23 29.28 162.71 29.28C161.17 29.28 160.91 27.86 160.91 26.72V21.4H158.51V27.4C158.51 29.36 159.55 31.28 162.05 31.28C163.47 31.28 164.61 30.42 165.03 29.46H165.07V31H167.35V21.4ZM170.271 31H172.671V21.4H170.271V31ZM169.931 18.14C169.931 18.9 170.571 19.58 171.451 19.58C172.331 19.58 173.011 18.96 173.011 18.14C173.011 17.32 172.331 16.7 171.451 16.7C170.571 16.7 169.931 17.38 169.931 18.14ZM175.883 23.32V27.8C175.883 29.64 176.463 31.2 179.003 31.2C179.543 31.2 180.183 31.1 180.603 30.94L180.523 29.06C180.243 29.2 179.823 29.26 179.503 29.26C178.443 29.26 178.243 28.64 178.243 27.78V23.32H180.643V21.4H178.243V18.62H175.883V21.4H174.203V23.32H175.883Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default PricingHeroSection;

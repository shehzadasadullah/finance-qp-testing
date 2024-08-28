import React, { useState } from "react";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import xBrand from "@/public/images/x-brand.png";
import Navbar from "../Navbar/Navbar";

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Invoice Factoring & Loans" },
    { id: 1, label: "Agency" },
    { id: 2, label: "Customer.io Clients" },
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

        {/* Tabs */}

        <div className="mt-5 w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full flex justify-center lg:justify-start gap-3 lg:gap-5 items-center flex-wrap">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-wrapper transition-all ${
                  activeTab === index ? "tab-active" : "tab-non-active"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-5 w-full flex justify-center items-center">
            {activeTab === 0 && (
              <>
                <div className="flex justify-center items-center flex-col">
                  <div className="w-full text-3xl lg:text-5xl text-center mt-5 tab-top-main-heading lg:px-[20%]">
                    Tailored Solutions, Flexible Plans for Every Need
                  </div>
                  <div className="w-full text-center mt-4 tab-top-sub-heading">
                    Make this more prominent
                  </div>
                  <div className="w-full gap-5 mt-4 flex justify-center items-center flex-col md:flex-row">
                    <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                      <div className="w-full pricing-header-wrapper flex justify-center items-center flex-row">
                        <div className="pricing-pay-with">Pay with</div>
                        <div className="flex justify-center items-center flex-row">
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
                      <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                        <div className="w-full pricing-card-plan-heading text-start">
                          Standard Plan
                        </div>
                        <div className="w-full pricing-card-plan-sub-heading">
                          Ideal for small teams and startups.
                        </div>
                        <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                          <div className="pricing-dollar-sign mt-[-5%]">$</div>
                          <div className="pricing-dollar-text ms-1">300</div>
                          <div className="pricing-dollar-per-month mt-[3%] ms-1">
                            per month
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex h-96 p-6 border-b-[1px] border-[#EAECF0] gap-3 justify-start items-center flex-col">
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Automated Invoice Management
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Standard Financing Speed
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Direct Payment Capability
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            All Essential Integrations
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Flexible Fee Options
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Business Hours Support
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Optimized Cash Flow
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center flex-col p-6">
                        <a
                          href="#"
                          className="w-full pricing-footer-button text-center"
                        >
                          I am Just Starting
                        </a>
                      </div>
                    </div>
                    <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                      <div className="w-full pricing-header-wrapper gap-2 flex justify-center items-center flex-row">
                        <div className="pricing-pay-with">Pay with</div>
                        <div className="flex gap-2 justify-center items-center flex-row">
                          <div className="h-8 w-8 flex pricing-x-brand-wrapper justify-center items-center">
                            <img src={xBrand.src} alt="Image" className="" />
                          </div>
                          <div className="pricing-x-brand">Your Brand Logo</div>
                        </div>
                      </div>
                      <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                        <div className="w-full flex justify-start gap-2 items-center flex-row pricing-card-plan-heading">
                          <div className="text-start">Premium Plan</div>
                          <div className="badge flex justify-center items-center">
                            Popular
                          </div>
                        </div>
                        <div className="w-full pricing-card-plan-sub-heading">
                          Advanced features and reporting.
                        </div>
                        <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                          <div className="pricing-dollar-sign mt-[-5%]">$</div>
                          <div className="pricing-dollar-text ms-1">995</div>
                          <div className="pricing-dollar-per-month mt-[3%] ms-1">
                            per month
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex h-96 p-6 border-b-[1px] border-[#EAECF0] gap-3 justify-start items-center flex-col">
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            White-Labeled
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Fast-Track Financing
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Instant Payment Processing
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Expanded Integration Suite
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Customer Fee Flexibility
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            24/7 Priority Support
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Customizable Financing Terms
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Advanced Analytics
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Early Feature Access
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center flex-col p-6">
                        <a
                          href="#"
                          className="w-full pricing-footer-button text-center"
                        >
                          I want Everything
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === 1 && (
              <>
                <div className="flex justify-center items-center flex-col">
                  <div className="w-full text-3xl lg:text-5xl text-center mt-5 tab-top-main-heading lg:px-[20%]">
                    Tailored Solutions, Flexible Plans for Every Need
                  </div>
                  <div className="w-full text-center mt-4 tab-top-sub-heading">
                    Make this more prominent
                  </div>
                  <div className="w-full gap-5 mt-4 flex justify-center items-center flex-col md:flex-row">
                    <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                      <div className="w-full pricing-header-wrapper flex justify-center items-center flex-row">
                        <div className="pricing-pay-with">Pay with</div>
                        <div className="flex justify-center items-center flex-row">
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
                      <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                        <div className="w-full pricing-card-plan-heading text-start">
                          Standard Plan
                        </div>
                        <div className="w-full pricing-card-plan-sub-heading">
                          Ideal for small teams and startups.
                        </div>
                        <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                          <div className="pricing-dollar-sign mt-[-5%]">$</div>
                          <div className="pricing-dollar-text ms-1">600</div>
                          <div className="pricing-dollar-per-month mt-[3%] ms-1">
                            per month
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex h-96 p-6 border-b-[1px] border-[#EAECF0] gap-3 justify-start items-center flex-col">
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Automated Invoice Management
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Standard Financing Speed
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Direct Payment Capability
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            All Essential Integrations
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Flexible Fee Options
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Business Hours Support
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Optimized Cash Flow
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center flex-col p-6">
                        <a
                          href="#"
                          className="w-full pricing-footer-button text-center"
                        >
                          I am Just Starting
                        </a>
                      </div>
                    </div>
                    <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                      <div className="w-full pricing-header-wrapper gap-2 flex justify-center items-center flex-row">
                        <div className="pricing-pay-with">Pay with</div>
                        <div className="flex gap-2 justify-center items-center flex-row">
                          <div className="h-8 w-8 flex pricing-x-brand-wrapper justify-center items-center">
                            <img src={xBrand.src} alt="Image" className="" />
                          </div>
                          <div className="pricing-x-brand">Your Brand Logo</div>
                        </div>
                      </div>
                      <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                        <div className="w-full flex justify-start gap-2 items-center flex-row pricing-card-plan-heading">
                          <div className="text-start">Premium Plan</div>
                          <div className="badge flex justify-center items-center">
                            Popular
                          </div>
                        </div>
                        <div className="w-full pricing-card-plan-sub-heading">
                          Advanced features and reporting.
                        </div>
                        <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                          <div className="pricing-dollar-sign mt-[-5%]">$</div>
                          <div className="pricing-dollar-text ms-1">1500</div>
                          <div className="pricing-dollar-per-month mt-[3%] ms-1">
                            per month
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex h-96 p-6 border-b-[1px] border-[#EAECF0] gap-3 justify-start items-center flex-col">
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            White-Labeled
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Fast-Track Financing
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Instant Payment Processing
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Expanded Integration Suite
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Customer Fee Flexibility
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            24/7 Priority Support
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Customizable Financing Terms
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Advanced Analytics
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Early Feature Access
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center flex-col p-6">
                        <a
                          href="#"
                          className="w-full pricing-footer-button text-center"
                        >
                          I want Everything
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === 2 && (
              <>
                <div className="flex justify-center items-center flex-col">
                  <div className="w-full text-3xl lg:text-5xl text-center mt-5 tab-top-main-heading lg:px-[20%]">
                    Tailored Solutions, Flexible Plans for Every Need
                  </div>
                  <div className="w-full text-center mt-4 tab-top-sub-heading">
                    Make this more prominent
                  </div>
                  <div className="w-full gap-5 mt-4 flex justify-center items-center flex-col md:flex-row">
                    <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                      <div className="w-full pricing-header-wrapper flex justify-center items-center flex-row">
                        <div className="pricing-pay-with">Pay with</div>
                        <div className="flex justify-center items-center flex-row">
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
                      <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                        <div className="w-full pricing-card-plan-heading text-start">
                          Standard Plan
                        </div>
                        <div className="w-full pricing-card-plan-sub-heading">
                          Ideal for small teams and startups.
                        </div>
                        <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                          <div className="pricing-dollar-sign mt-[-5%]">$</div>
                          <div className="pricing-dollar-text ms-1">900</div>
                          <div className="pricing-dollar-per-month mt-[3%] ms-1">
                            per month
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex h-96 p-6 border-b-[1px] border-[#EAECF0] gap-3 justify-start items-center flex-col">
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Automated Invoice Management
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Standard Financing Speed
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Direct Payment Capability
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            All Essential Integrations
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Flexible Fee Options
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Business Hours Support
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Optimized Cash Flow
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center flex-col p-6">
                        <a
                          href="#"
                          className="w-full pricing-footer-button text-center"
                        >
                          I am Just Starting
                        </a>
                      </div>
                    </div>
                    <div className="w-full pricing-div-wrapper flex justify-center items-center flex-col">
                      <div className="w-full pricing-header-wrapper gap-2 flex justify-center items-center flex-row">
                        <div className="pricing-pay-with">Pay with</div>
                        <div className="flex gap-2 justify-center items-center flex-row">
                          <div className="h-8 w-8 flex pricing-x-brand-wrapper justify-center items-center">
                            <img src={xBrand.src} alt="Image" className="" />
                          </div>
                          <div className="pricing-x-brand">Your Brand Logo</div>
                        </div>
                      </div>
                      <div className="w-full pricing-card-header-wrapper flex justify-center items-center flex-col">
                        <div className="w-full flex justify-start gap-2 items-center flex-row pricing-card-plan-heading">
                          <div className="text-start">Premium Plan</div>
                          <div className="badge flex justify-center items-center">
                            Popular
                          </div>
                        </div>
                        <div className="w-full pricing-card-plan-sub-heading">
                          Advanced features and reporting.
                        </div>
                        <div className="w-full flex justify-start items-center flex-row mt-5 pricing-card-plan-sub-heading">
                          <div className="pricing-dollar-sign mt-[-5%]">$</div>
                          <div className="pricing-dollar-text ms-1">2300</div>
                          <div className="pricing-dollar-per-month mt-[3%] ms-1">
                            per month
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex h-96 p-6 border-b-[1px] border-[#EAECF0] gap-3 justify-start items-center flex-col">
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            White-Labeled
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Fast-Track Financing
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Instant Payment Processing
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Expanded Integration Suite
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Customer Fee Flexibility
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            24/7 Priority Support
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Customizable Financing Terms
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Advanced Analytics
                          </div>
                        </div>
                        <div className="w-full gap-3 flex justify-start items-center flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#079455"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="pricing-card-items-heading">
                            Early Feature Access
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center flex-col p-6">
                        <a
                          href="#"
                          className="w-full pricing-footer-button text-center"
                        >
                          I want Everything
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

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

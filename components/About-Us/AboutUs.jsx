import React, { useState } from "react";
import Head from "next/head";
import HeroSection from "@/components/hero-section/HeroSection";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/logo/logo_harvv.png";
import Slider from "@/components/carousal/Slider";
import IndustriesSlider from "@/components/industries/IndustriesSlider";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import TransformBusiness from "@/components/transform-business/TransformBusiness";
import WhyHarvv from "@/components/why-harvv/WhyHarvv";
import ContactUs from "@/components/contact-us/ContactUs";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import xBrand from "@/public/images/x-brand.png";
import jordan from "@/public/images/jordan.png";

const navigation = [
  { name: "Home", href: "/home", current: false },
  { name: "About Us", href: "/about-us", current: true },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "Industries", href: "#", current: false },
  { name: "Other", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AboutUs() {
  const router = useRouter();
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

        <Disclosure as="nav" className="w-full bg-[#fff] navbar-wrapper">
          <div className="w-full bg-white px-2 sm:px-6 lg:px-12 lg:py-4 lg:pt-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex w-full flex-1 items-center justify-center sm:items-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img alt="Harvv Logo" src={logo.src} className="h-8 w-auto" />
                </div>
                <div className="hidden navbar-links-wrapper sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => {
                          router.push(item.href);
                        }}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "navbar-link-active text-[#FF007A]"
                            : "navbar-link hover:text-[#FF007A]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="absolute hidden inset-y-0 right-0 md:flex items-center pr-2 gap-x-3 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a
                    href={"https://b2b.harvv.com/"}
                    className="navbar-login-button"
                  >
                    Log In
                  </a>
                  <a
                    href={"https://b2b.harvv.com/register"}
                    className="navbar-sign-up-button"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  style={{
                    filter: item.current
                      ? "drop-shadow(0px 0px 4px #FF007A)"
                      : "",
                  }}
                  className={classNames(
                    item.current
                      ? "navbar-link-active bg-[#FF007A] text-white"
                      : "navbar-link hover:text-[#FF007A]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="w-full p-2 flex md:hidden items-center justify-center flex-col gap-3">
              <button
                style={{
                  borderRadius: "5px",
                }}
                type="button"
                className="navbar-login-button w-full border"
              >
                Log In
              </button>
              <button
                style={{
                  borderRadius: "5px",
                }}
                type="button"
                className="navbar-sign-up-button w-full"
              >
                Sign Up
              </button>
            </div>
          </DisclosurePanel>
        </Disclosure>

        {/* About us top banner */}

        <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full tb-wrapper border-2 flex justify-center items-center flex-col">
            <div className="w-full flex p-8 md:pt-[100px] md:pr-[16px] md:pb-[100px] md:pl-[16px] justify-center items-center flex-col tb-div1-wrapper">
              <div className="w-full">
                <div className="w-full flex text-center tb-main-heading2 justify-center items-center">
                  About Us
                </div>
                <div className="w-full flex tb-sub-heading text-center justify-center mt-5 items-center">
                  Empowering Businesses with Innovative Financing Solutions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History */}

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
                symbolizing growth, prosperity, and the fruits of hard work.
                Since its inception, Harvv has been committed to providing
                innovative financial solutions that empower businesses to
                thrive.
              </div>
              <div className="w-full text-center md:text-start au-history-details">
                Our journey began with a simple idea – to make financial
                processes easier, more efficient, and more accessible for
                businesses of all sizes. Over the years, we have grown into a
                trusted partner for countless businesses, helping them navigate
                financial challenges and achieve their goals
              </div>
            </div>
          </div>
        </div>

        {/* Streamlining Cash Flow For */}

        <div className="w-full hidden md:flex justify-center mb-8 items-center">
          <div className="w-full text-center au-streamlining-heading">
            Streamlining Cash Flow For
          </div>
        </div>

        {/* Streamlining Cash Flow For Slider/Carousal */}

        <div className="w-full hidden md:flex text-center mb-5">
          <Slider></Slider>
        </div>

        {/* The big picture */}

        <div className="w-full md:mt-16 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="p-5 md:pt-0 md:pb-[48px] md:pl-[30px] md:pr-[30px] gap-6 flex justify-center items-center flex-col w-full md:mt-8 mt-0">
            <div className="w-full md:w-auto flex justify-center items-center flex-col">
              <div className="w-full flex justify-center flex-col md:flex-row items-center">
                <div className="il-services-wrapper flex justify-center items-center flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M11.8334 6.16663V4.04163L13.9584 1.91663L14.6667 3.33329L16.0834 4.04163L13.9584 6.16663H11.8334ZM11.8334 6.16663L9.00006 8.99992M16.0834 8.99996C16.0834 12.912 12.9121 16.0833 9.00008 16.0833C5.08806 16.0833 1.91675 12.912 1.91675 8.99996C1.91675 5.08794 5.08806 1.91663 9.00008 1.91663M12.5417 8.99996C12.5417 10.956 10.9561 12.5416 9.00008 12.5416C7.04407 12.5416 5.45841 10.956 5.45841 8.99996C5.45841 7.04395 7.04407 5.45829 9.00008 5.45829"
                      stroke="#FF27A0"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="il-services-heading ms-2">
                    The Big Picture
                  </div>
                </div>
              </div>
              <div className="w-full mt-2 md:mt-2 flex justify-center flex-col items-center">
                <div className="w-full flex justify-center items-center flex-col">
                  <div className="w-full text-center il-industries-serve">
                    The Heart of Harvv
                  </div>
                  <div className="w-full md:w-[70%] lg:w-[60%] mt-0 md:mt-2 text-center il-industries-serve-sub">
                    Empowering businesses to achieve financial freedom and
                    sustainable growth through innovative and reliable financial
                    solutions.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full au-hoh-wrapper p-5 md:pt-[24px] md:pr-[40px] md:pl-[40px] md:pb-[24px] flex justify-center items-center gap-4 flex-col">
              <div className="w-full au-hoh-inner-wrapper gap-4 flex justify-center md:justify-start items-center md:items-start flex-col md:flex-row">
                <div className="h-12 w-12 flex justify-center items-center rounded-full bg-[#FFF0F9]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2.50047 13H8.50047M15.5005 13H21.5005M12.0005 7V21M12.0005 7C13.3812 7 14.5005 5.88071 14.5005 4.5M12.0005 7C10.6198 7 9.50047 5.88071 9.50047 4.5M4.00047 21L20.0005 21M4.00047 4.50001L9.50047 4.5M9.50047 4.5C9.50047 3.11929 10.6198 2 12.0005 2C13.3812 2 14.5005 3.11929 14.5005 4.5M14.5005 4.5L20.0005 4.5M8.88091 14.3364C8.48022 15.8706 7.11858 17 5.50047 17C3.88237 17 2.52073 15.8706 2.12004 14.3364C2.0873 14.211 2.07093 14.1483 2.06935 13.8979C2.06838 13.7443 2.12544 13.3904 2.17459 13.2449C2.25478 13.0076 2.34158 12.8737 2.51519 12.6059L5.50047 8L8.48576 12.6059C8.65937 12.8737 8.74617 13.0076 8.82636 13.2449C8.87551 13.3904 8.93257 13.7443 8.9316 13.8979C8.93002 14.1483 8.91365 14.211 8.88091 14.3364ZM21.8809 14.3364C21.4802 15.8706 20.1186 17 18.5005 17C16.8824 17 15.5207 15.8706 15.12 14.3364C15.0873 14.211 15.0709 14.1483 15.0693 13.8979C15.0684 13.7443 15.1254 13.3904 15.1746 13.2449C15.2548 13.0076 15.3416 12.8737 15.5152 12.6059L18.5005 8L21.4858 12.6059C21.6594 12.8737 21.7462 13.0076 21.8264 13.2449C21.8755 13.3904 21.9326 13.7443 21.9316 13.8979C21.93 14.1483 21.9137 14.211 21.8809 14.3364Z"
                      stroke="#FF27A0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-full gap-4 flex justify-center md:justify-start items-center md:mt-2 flex-col">
                  <div className="w-full au-hoh-heading text-center md:text-start">
                    Reduce Financial Stress
                  </div>
                  <div className="w-full au-hoh-sub-text text-center md:text-start">
                    Our customized financial services are designed to alleviate
                    the pressures of managing cash flow, allowing business
                    owners to focus on expanding their operations and driving
                    innovation without the burden of immediate financial
                    concerns.
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[24px] flex justify-center items-center flex-col md:flex-row gap-4">
                <div className="w-full au-hoh-inner-wrapper gap-4 flex justify-center md:justify-start items-center md:items-start flex-col md:flex-row">
                  <div className="h-12 w-12 flex justify-center items-center rounded-full bg-[#FFF0F9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                        stroke="#FF27A0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-full gap-4 flex justify-center md:justify-start items-center md:mt-2 flex-col">
                    <div className="w-full au-hoh-heading text-center md:text-start">
                      Enhance Payment Reliability
                    </div>
                    <div className="w-full au-hoh-sub-text text-center md:text-start">
                      We deliver dependable payment solutions that minimize the
                      risks of late payments and bad debts, offering our clients
                      peace of mind and ensuring their businesses remain
                      financially secure.
                    </div>
                  </div>
                </div>
                <div className="w-full au-hoh-inner-wrapper gap-4 flex justify-center md:justify-start items-center md:items-start flex-col md:flex-row">
                  <div className="h-12 w-12 flex justify-center items-center rounded-full bg-[#FFF0F9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13M12 8H16V12M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M3 13.3471C3.65194 13.4478 4.31987 13.5 5 13.5C9.38636 13.5 13.2653 11.3276 15.6197 8"
                        stroke="#FF27A0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-full gap-4 flex justify-center md:justify-start items-center md:mt-2 flex-col">
                    <div className="w-full au-hoh-heading text-center md:text-start">
                      Streamline Financial Processes
                    </div>
                    <div className="w-full au-hoh-sub-text text-center md:text-start">
                      By leveraging our advanced tools and dedicated support, we
                      streamline financial management, making it more efficient
                      for businesses to manage their accounts, optimize cash
                      flow, and plan for long-term success.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message from CEO */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="pt-0 pb-0 pl-5 pr-5 md:pt-0 md:pb-[48px] md:pl-[30px] md:pr-[30px] w-full">
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
                  <div className="il-services-heading ms-2">
                    Message From CEO
                  </div>
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
                    “At Harvv our aim in Simple yet Profound: to empower selling
                    and purchasing of all sizes in today’s dynamic market”
                  </div>
                  <div className="w-full text-center md:text-start au-mfc-heading2">
                    It's all about Flexibility and Ease
                  </div>
                  <div className="w-full text-center md:text-start au-mfc-sub-text">
                    Our 30, 60, and 90-day terms empower businesses to maintain
                    cash flow while offering customers extended payment options.
                    Boost sales, enhance customer loyalty, and drive growth with
                    seamless financing solutions tailored to your needs.
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

export default AboutUs;

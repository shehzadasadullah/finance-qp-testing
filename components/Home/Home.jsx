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

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "About Us", href: "/about-us", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "Industries", href: "#", current: false },
  { name: "Other", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Home({ headingText }) {
  const router = useRouter();
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

        {/* Hero Section */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <HeroSection></HeroSection>
        </div>

        {/* Trusted by text */}

        <div className="w-full hidden md:flex justify-center mt-3 mb-5 items-center">
          <div className="w-full text-center tb-text">
            Trust and Proven Reputation
          </div>
        </div>

        {/* Industries Slider/Carousal */}

        <div className="w-full hidden md:flex text-center mb-5">
          <Slider></Slider>
        </div>

        {/* Industries Slider/Carousal List */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <IndustriesSlider></IndustriesSlider>
        </div>

        {/* Ready to transform your business */}

        <div className="w-full flex justify-center items-center mt-5 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full tb-wrapper border-2 flex justify-center items-center flex-col">
            <div className="w-full tb-div1-wrapper">
              <div className="w-full flex p-10 md:pt-[100px] md:pr-[16px] md:pb-[100px] md:pl-[16px] justify-center items-center flex-col tb-div2-wrapper">
                <div className="w-full flex justify-center items-center">
                  <button className="tb-button-too-wrapper flex justify-center items-center flex-row tb-button-top-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M6.49999 7.99999L8.49999 9.99999C9.43122 9.64582 10.3246 9.19914 11.1667 8.66666C14.6467 6.33333 15.1667 3.14666 15.1667 1.33333C13.7018 1.32424 12.2589 1.69008 10.9753 2.39605C9.69174 3.10202 8.61011 4.12465 7.83332 5.36666C7.30146 6.19737 6.85475 7.07961 6.49999 7.99999Z"
                        fill="white"
                      />
                      <path
                        d="M11.1667 8.66666C10.3246 9.19914 9.43122 9.64582 8.49999 9.99999V13.3333C8.49999 13.3333 10.52 12.9667 11.1667 12C11.8867 10.92 11.1667 8.66666 11.1667 8.66666Z"
                        fill="white"
                      />
                      <path
                        d="M3.49999 11C2.49999 11.84 2.16666 14.3333 2.16666 14.3333C2.16666 14.3333 4.65999 14 5.49999 13C5.97332 12.44 5.96666 11.58 5.43999 11.06C5.18086 10.8127 4.83952 10.6698 4.48147 10.6587C4.12343 10.6476 3.77391 10.7691 3.49999 11Z"
                        fill="white"
                      />
                      <path
                        d="M6.49999 7.99999C6.85475 7.07961 7.30146 6.19737 7.83332 5.36666V5.33333C7.83332 5.33333 5.57999 4.61333 4.49999 5.33333C3.53332 5.97999 3.16666 7.99999 3.16666 7.99999H6.49999Z"
                        fill="white"
                      />
                    </svg>
                    <div className="ms-2">Get Started</div>
                  </button>
                </div>
                <div className="flex text-center tb-main-heading justify-center mt-5 items-center">
                  Ready to Transform Your Business?
                </div>
                <div className="flex tb-sub-heading text-center justify-center mt-5 items-center">
                  Unlock Your Business Potential with Our Tailored Financing
                  Solutions
                </div>
                <button className="tb-sign-up-button mt-5 w-full md:w-auto">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-0">
          <Testimonials></Testimonials>
        </div>

        {/* Why choose us Section */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full bg-[#F9FAFB] rounded-[16px]">
            <WhyChooseUs></WhyChooseUs>
            <TransformBusiness></TransformBusiness>
            <WhyHarvv></WhyHarvv>
          </div>
        </div>

        {/* Contact Us Section */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <ContactUs></ContactUs>
        </div>

        {/* Footer Section */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full bg-[#0C111D] rounded-[24px]">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

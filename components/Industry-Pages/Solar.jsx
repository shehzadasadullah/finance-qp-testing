import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../common/Navbar";
import bikeImage from "@/public/images/ps-img-bike.png";
import content from "@/public/images/ps-tm-content.png";
import { useMediaQuery } from "react-responsive";
import img1 from "@/public/images/ind-bg1.png";
import img2 from "@/public/images/ind-bg2.png";
import img3 from "@/public/images/ind-bg3.png";
import mouse1 from "@/public/images/mouse3.png";
import heroImage from "@/public/images/si-hero-bg.png";
import mouse2 from "@/public/images/ps-mouse-2.png";
import Rating from "@mui/material/Rating";
import Footer from "../common/Footer";

function Solar() {
  const isXLarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0);

  useEffect(() => {
    setSlidesToShow(isXLarge ? 3.2 : isLarge ? 2 : isMedium ? 1 : 1);
  }, [isXLarge, isLarge, isMedium, isSmall]);

  const slides = [
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img1.src,
      rating: 3,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img2.src,
      rating: 2,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img1.src,
      rating: 3,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img2.src,
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
      rating: 4,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img1.src,
      rating: 5,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
    {
      url: "#",
      name: "John Smith",
      company: "CEO of Tech Innovations",
      imgSrc: img3.src,
      rating: 3,
      review:
        "Harvv Financing has transformed our cash flow management. Their flexible terms and quick payouts have allowed us to scale our operations rapidly. Highly recommended!",
    },
  ];

  const slideCount = slides.length;
  const totalSlides = slideCount - slidesToShow;

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalSlides;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? totalSlides : prevIndex - 1
    );
  };

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

        <Navbar activePage={"solar"}></Navbar>

        {/* Hero Section */}

        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-full md:tracking-wide si-hero-heading text-2xl md:text-5xl p-5 md:pt-[40px] md:pr-[60px] md:pl-[60px] text-center md:text-start">
            Attention Solar Distributors: Offer Net 30, 60, and 90-Day Terms to
            Solar Installers.
          </div>
          <div className="w-full si-hero-sub-heading pt-0 p-5 md:pr-[60px] md:pl-[60px] text-center md:text-start">
            Accelerate Your Sales with Customizable Net Terms for Solar Projects
          </div>
          <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
            <div className="w-full flex justify-center md:justify-start items-center md:items-start flex-col">
              <div className="w-full relative">
                <img
                  src={heroImage.src}
                  alt=""
                  className="w-full h-full rounded-b-[16px]"
                />
              </div>
              <div className="absolute mt-5 md:mt-0">
                <div className="md:pl-[60px]">
                  <div className="flex si-top-learn-how-wrapper justify-center items-center flex-col rounded-[16px] gap-5 xl:gap-8 p-5 md:p-[24px]">
                    <div className="w-full text-center md:text-start si-check-our-plans">
                      Check Our Plans
                    </div>
                    <button className="flex justify-center gap-3 items-center flex-row w-full">
                      <div className="si-check-our-plans-2">
                        Brighten Your Future
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M3.33398 10H16.6673M16.6673 10L11.6673 5M16.6673 10L11.6673 15"
                          stroke="white"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}

        <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full si-top-wrapper p-5 md:p-10 flex justify-center items-center flex-col">
            <div className="w-full flex justify-center items-center flex-col gap-3">
              <div className="flex justify-center items-center flex-row gap-2 ps-badge-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M5.45833 6.52083H9M5.45833 9H11.125M5.45833 13.25V14.9043C5.45833 15.2817 5.45833 15.4705 5.5357 15.5674C5.60299 15.6517 5.70502 15.7007 5.81288 15.7006C5.9369 15.7005 6.08427 15.5826 6.37899 15.3468L8.06869 13.995C8.41387 13.7189 8.58645 13.5808 8.77864 13.4827C8.94914 13.3955 9.13064 13.3319 9.31819 13.2934C9.5296 13.25 9.75062 13.25 10.1927 13.25H11.975C13.1651 13.25 13.7602 13.25 14.2147 13.0184C14.6146 12.8147 14.9397 12.4896 15.1434 12.0897C15.375 11.6352 15.375 11.0401 15.375 9.85V6.025C15.375 4.83489 15.375 4.23983 15.1434 3.78527C14.9397 3.38543 14.6146 3.06034 14.2147 2.85661C13.7602 2.625 13.1651 2.625 11.975 2.625H6.025C4.83489 2.625 4.23983 2.625 3.78527 2.85661C3.38543 3.06034 3.06034 3.38543 2.85661 3.78527C2.625 4.23983 2.625 4.83489 2.625 6.025V10.4167C2.625 11.0754 2.625 11.4048 2.69741 11.675C2.8939 12.4083 3.46669 12.9811 4.20001 13.1776C4.47024 13.25 4.7996 13.25 5.45833 13.25Z"
                    stroke="white"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>Accelerating Success</div>
              </div>
              <div className="w-full text-2xl md:text-3xl ps-top-heading text-center">
                Powered by Harvv:
                <br />
                Solar Innovators Share Their Journey
              </div>
              <div className="w-full text-center ps-top-sub-heading">
                Discover the Benefits of Harvv Financing for Your Business
              </div>
              <div className="w-full hidden md:flex md:w-4/5 text-center">
                <img src={content.src} alt="" className="object-cover" />
              </div>
              <div className="w-full flex justify-center gap-3 items-center flex-col">
                <div className="w-full flex justify-center items-center">
                  <div className="w-full overflow-hidden">
                    <div
                      className="flex w-full transition-transform duration-300"
                      style={{
                        transform: `translateX(-${
                          currentIndex * (100 / slidesToShow)
                        }%)`,
                      }}
                    >
                      {slides.map((slide, index) => (
                        <div
                          key={index}
                          className="w-full mt-5 flex-shrink-0 flex justify-center items-center"
                          style={{ width: `${100 / slidesToShow}%` }}
                        >
                          <div className="ps-ts-card-wrapper mb-2 w-full md:w-[95%] flex items-start justify-start flex-col">
                            <div className="w-full h-full flex justify-center gap-4 items-center flex-col">
                              <div className="w-full flex justify-center gap-3 md:justify-start items-center flex-col md:flex-row">
                                <div className="h-[40px] w-[44px] text-center rounded-full">
                                  <img
                                    src={slide.imgSrc}
                                    alt="Img"
                                    className="object-cover w-full h-full rounded-full"
                                  />
                                </div>
                                <div className="w-full text-center md:text-start flex flex-col justify-center items-start">
                                  <div className="w-full ps-ts-name text-center md:text-start">
                                    {slide.name}
                                  </div>
                                  <div className="w-full ps-ts-company text-center md:text-start">
                                    {slide.company}
                                  </div>
                                </div>
                              </div>
                              <div className="w-full flex justify-center md:justify-start items-center">
                                <Rating
                                  sx={{
                                    "& .MuiRating-iconFilled": {
                                      color: "white",
                                    },
                                    "& .MuiRating-iconEmpty": {
                                      color: "white",
                                      opacity: 0.2,
                                    },
                                  }}
                                  value={slide.rating}
                                  readOnly
                                />
                              </div>
                              <div className="w-full ps-ts-review text-center md:text-start">
                                {slide.review}
                              </div>
                              <div className="w-full flex justify-center md:justify-start items-center flex-row gap-3">
                                <div className="ps-ts-rfcs-wrapper flex justify-center items-center gap-3">
                                  <div className="ps-ts-read-full">
                                    Read Full Case Study
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      d="M5.83301 14.1666L14.1663 5.83331M14.1663 5.83331H5.83301M14.1663 5.83331V14.1666"
                                      stroke="white"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-3 items-center flex-row">
                  <button
                    // disabled={canPrev === false}
                    onClick={prevSlide}
                    className="ps-li-slider-buttons flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M16.3337 10H4.66699M4.66699 10L10.5003 15.8334M4.66699 10L10.5003 4.16669"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    // disabled={canNext === false}
                    onClick={nextSlide}
                    className="ps-li-slider-buttons flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M4.66699 10H16.3337M16.3337 10L10.5003 4.16669M16.3337 10L10.5003 15.8334"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why choose us Section */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full bg-[#F9FAFB] rounded-[16px]">
            <div className="p-5 md:pt-[48px] md:pb-[48px] md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col w-full mt-3">
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
                      d="M8.50008 11.125C6.15287 11.125 4.25008 9.22221 4.25008 6.875V2.93982C4.25008 2.64668 4.25008 2.50011 4.2928 2.38274C4.36441 2.18599 4.5194 2.031 4.71615 1.95939C4.83352 1.91667 4.98009 1.91667 5.27323 1.91667H11.7269C12.0201 1.91667 12.1666 1.91667 12.284 1.95939C12.4808 2.031 12.6358 2.18599 12.7074 2.38274C12.7501 2.50011 12.7501 2.64668 12.7501 2.93982V6.87501C12.7501 9.22222 10.8473 11.125 8.50008 11.125ZM8.50008 11.125V13.25M12.7501 3.33334H14.5209C14.851 3.33334 15.016 3.33334 15.1461 3.38726C15.3197 3.45915 15.4576 3.59704 15.5295 3.7706C15.5834 3.90078 15.5834 4.0658 15.5834 4.39584V4.75001C15.5834 5.40873 15.5834 5.7381 15.511 6.00833C15.3145 6.74165 14.7417 7.31444 14.0084 7.51093C13.7382 7.58334 13.4088 7.58334 12.7501 7.58334M4.25008 3.33334H2.47925C2.14921 3.33334 1.98419 3.33334 1.85401 3.38726C1.68045 3.45915 1.54256 3.59704 1.47067 3.7706C1.41675 3.90078 1.41675 4.0658 1.41675 4.39584V4.75001C1.41675 5.40873 1.41675 5.7381 1.48916 6.00833C1.68565 6.74165 2.25844 7.31444 2.99176 7.51093C3.26199 7.58334 3.59135 7.58334 4.25008 7.58334M5.27323 16.0833H11.7269C11.9008 16.0833 12.0417 15.9424 12.0417 15.7685C12.0417 14.3776 10.9142 13.25 9.52323 13.25H7.47693C6.08599 13.25 4.95841 14.3776 4.95841 15.7685C4.95841 15.9424 5.09936 16.0833 5.27323 16.0833Z"
                      stroke="#FF27A0"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="il-services-heading ms-2">Why Choose Us</div>
                </div>
              </div>
              <div className="w-full mt-2 md:mt-2 flex md:justify-between justify-center flex-col md:flex-row items-center">
                <div className="w-full flex md:justify-start justify-center items-center flex-col">
                  <div className="w-full text-center md:text-start il-industries-serve">
                    Harnessing Growth
                  </div>
                </div>
                <div className="w-full flex justify-center items-center md:justify-end flex-row">
                  <div className="w-full text-center il-industries-serve-sub">
                    Discover the Benefits of Harvv Financing for Your Business
                  </div>
                </div>
              </div>
              <div className="w-full mt-7 gap-3 flex justify-center items-center flex-col md:flex-row">
                <div className="w-full flex gap-3 md:gap-8 justify-center items-center flex-col">
                  <div className="w-full gap-3 md:gap-5 flex justify-center items-center md:items-start flex-col md:flex-row">
                    <div className="ps-flash-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.9999 2L4.09332 12.6879C3.74451 13.1064 3.57011 13.3157 3.56744 13.4925C3.56512 13.6461 3.63359 13.7923 3.75312 13.8889C3.89061 14 4.16304 14 4.7079 14H11.9999L10.9999 22L19.9064 11.3121C20.2552 10.8936 20.4296 10.6843 20.4323 10.5075C20.4346 10.3539 20.3661 10.2077 20.2466 10.1111C20.1091 10 19.8367 10 19.2918 10H11.9999L12.9999 2Z"
                          stroke="#344054"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-full gap-1 flex justify-center md:justify-start items-center flex-col">
                      <div className="w-full ps-flash-heading text-center md:text-start">
                        Project Financing
                      </div>
                      <div className="w-full ps-flash-sub-heading text-center md:text-start">
                        Secure funds for solar panel installations and
                        large-scale renewable energy projects.
                      </div>
                    </div>
                  </div>
                  <div className="w-full gap-3 md:gap-5 flex justify-center items-center md:items-start flex-col md:flex-row">
                    <div className="ps-flash-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.9999 2L4.09332 12.6879C3.74451 13.1064 3.57011 13.3157 3.56744 13.4925C3.56512 13.6461 3.63359 13.7923 3.75312 13.8889C3.89061 14 4.16304 14 4.7079 14H11.9999L10.9999 22L19.9064 11.3121C20.2552 10.8936 20.4296 10.6843 20.4323 10.5075C20.4346 10.3539 20.3661 10.2077 20.2466 10.1111C20.1091 10 19.8367 10 19.2918 10H11.9999L12.9999 2Z"
                          stroke="#344054"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-full gap-1 flex justify-center md:justify-start items-center flex-col">
                      <div className="w-full ps-flash-heading text-center md:text-start">
                        Customer Financing
                      </div>
                      <div className="w-full ps-flash-sub-heading text-center md:text-start">
                        Offer financial solutions to end-users for purchasing
                        and installing solar systems, boosting market adoption.
                      </div>
                    </div>
                  </div>
                  <div className="w-full gap-3 md:gap-5 flex justify-center items-center md:items-start flex-col md:flex-row">
                    <div className="ps-flash-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.9999 2L4.09332 12.6879C3.74451 13.1064 3.57011 13.3157 3.56744 13.4925C3.56512 13.6461 3.63359 13.7923 3.75312 13.8889C3.89061 14 4.16304 14 4.7079 14H11.9999L10.9999 22L19.9064 11.3121C20.2552 10.8936 20.4296 10.6843 20.4323 10.5075C20.4346 10.3539 20.3661 10.2077 20.2466 10.1111C20.1091 10 19.8367 10 19.2918 10H11.9999L12.9999 2Z"
                          stroke="#344054"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-full gap-1 flex justify-center md:justify-start items-center flex-col">
                      <div className="w-full ps-flash-heading text-center md:text-start">
                        Supplier Payments
                      </div>
                      <div className="w-full ps-flash-sub-heading text-center md:text-start">
                        Manage ongoing operational costs and unexpected
                        expenses.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center flex-col">
                  <img
                    src={mouse1.src}
                    alt=""
                    className="md:h-[434px] md:w-[394px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:mt-8 p-5 md:pt-0 md:pl-[40px] md:pr-[40px] justify-center items-center flex-col md:flex-row w-full">
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src={mouse2.src}
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
                        d="M8.49992 11.125L6.37492 9.00001M8.49992 11.125C9.48935 10.7487 10.4385 10.2741 11.3333 9.70835M8.49992 11.125V14.6667C8.49992 14.6667 10.6462 14.2771 11.3333 13.25C12.0983 12.1025 11.3333 9.70835 11.3333 9.70835M6.37492 9.00001C6.75185 8.02211 7.22648 7.08472 7.79159 6.2021C8.61692 4.88246 9.76615 3.79592 11.13 3.04583C12.4938 2.29573 14.0268 1.90703 15.5833 1.91668C15.5833 3.84335 15.0308 7.22918 11.3333 9.70835M6.37492 9.00001H2.83325C2.83325 9.00001 3.22284 6.85376 4.24992 6.16668C5.39742 5.40168 7.79159 6.16668 7.79159 6.16668M3.18742 12.1875C2.12492 13.08 1.77075 15.7292 1.77075 15.7292C1.77075 15.7292 4.41992 15.375 5.31242 14.3125C5.81534 13.7175 5.80825 12.8038 5.24867 12.2513C4.97334 11.9885 4.61067 11.8366 4.23025 11.8249C3.84982 11.8131 3.47846 11.9422 3.18742 12.1875Z"
                        stroke="#FF27A0"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="il-services-heading ms-2">Get Started</div>
                  </div>
                </div>
                <div className="w-full flex md:justify-between justify-center flex-col md:flex-row items-center">
                  <div className="w-full flex md:justify-start justify-center items-center flex-col">
                    <div className="w-full text-center md:text-start il-industries-serve">
                      Power Up Your Projects
                    </div>
                    <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
                      For Net 30, 60, 90 Terms with Upfront Payment, Fast
                      Process Click Below
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:justify-start items-center">
                  <button className="il-view-all-button w-full md:w-auto">
                    Find Out How
                  </button>
                </div>
              </div>
            </div>
            <div className="flex p-5 md:mt-8 md:pt-0 md:pl-[40px] md:pr-[40px] justify-center items-center flex-col w-full">
              <div className="si-ctc-heading w-full text-center">
                Clearing the Clouds
              </div>
              <div className="w-full mt-5 md:mt-8 flex justify-center items-center flex-col md:flex-row gap-3">
                <div className="w-full md:h-72 si-ctc-wrapper flex justify-center md:justify-start items-center flex-col gap-3">
                  <div className="w-full flex justify-center md:justify-start items-center">
                    <div className="si-ctc-icon-wrapper">
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
                  </div>
                  <div className="w-full si-ctc-bottom-heading text-center md:text-start mt-2">
                    New Regulations:
                  </div>
                  <div className="w-full si-ctc-bottom-sub-heading text-center md:text-start">
                    Harvv provides flexible financing solutions to help solar
                    companies navigate regulatory changes and manage project
                    costs, reducing uncertainty and easing compliance
                  </div>
                </div>
                <div className="w-full md:h-72 si-ctc-wrapper flex justify-center md:justify-start items-center flex-col gap-3">
                  <div className="w-full flex justify-center md:justify-start items-center">
                    <div className="si-ctc-icon-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M14.666 10C15.5979 10 16.0638 10 16.4314 9.84776C16.9214 9.64477 17.3108 9.25542 17.5138 8.76537C17.666 8.39782 17.666 7.93188 17.666 7C17.666 6.06812 17.666 5.60218 17.5138 5.23463C17.3108 4.74458 16.9214 4.35523 16.4314 4.15224C16.0638 4 15.5979 4 14.666 4L6.66602 4C5.73413 4 5.26819 4 4.90065 4.15224C4.41059 4.35523 4.02124 4.74458 3.81826 5.23463C3.66602 5.60218 3.66602 6.06812 3.66602 7C3.66602 7.93188 3.66602 8.39782 3.81826 8.76537C4.02124 9.25542 4.41059 9.64477 4.90065 9.84776C5.26819 10 5.73413 10 6.66602 10L14.666 10Z"
                          stroke="#FF27A0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.666 20C19.5979 20 20.0638 20 20.4314 19.8478C20.9214 19.6448 21.3108 19.2554 21.5138 18.7654C21.666 18.3978 21.666 17.9319 21.666 17C21.666 16.0681 21.666 15.6022 21.5138 15.2346C21.3108 14.7446 20.9214 14.3552 20.4314 14.1522C20.0638 14 19.5979 14 18.666 14H6.66602C5.73413 14 5.26819 14 4.90065 14.1522C4.41059 14.3552 4.02124 14.7446 3.81826 15.2346C3.66602 15.6022 3.66602 16.0681 3.66602 17C3.66602 17.9319 3.66602 18.3978 3.81826 18.7654C4.02124 19.2554 4.41059 19.6448 4.90065 19.8478C5.26819 20 5.73413 20 6.66602 20L18.666 20Z"
                          stroke="#FF27A0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full si-ctc-bottom-heading text-center md:text-start mt-2">
                    Declining Sales:
                  </div>
                  <div className="w-full si-ctc-bottom-sub-heading text-center md:text-start">
                    Harvv offers funding options to support new revenue
                    strategies, helping solar companies adapt to market changes
                    and boost sales.
                  </div>
                </div>
                <div className="w-full md:h-72 si-ctc-wrapper flex justify-center md:justify-start items-center flex-col gap-3">
                  <div className="w-full flex justify-center md:justify-start items-center">
                    <div className="si-ctc-icon-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M6.33398 11V15M18.334 9V13M17.334 4C19.7827 4 21.1071 4.37476 21.7661 4.66544C21.8539 4.70415 21.8977 4.72351 22.0244 4.84437C22.1003 4.91682 22.2389 5.12939 22.2745 5.22809C22.334 5.39274 22.334 5.48274 22.334 5.66274V16.4111C22.334 17.3199 22.334 17.7743 22.1977 18.0079C22.0591 18.2454 21.9254 18.3559 21.6659 18.4472C21.4108 18.5369 20.896 18.438 19.8662 18.2401C19.1454 18.1017 18.2905 18 17.334 18C14.334 18 11.334 20 7.33398 20C4.88528 20 3.56085 19.6252 2.90187 19.3346C2.81411 19.2958 2.77023 19.2765 2.64358 19.1556C2.56767 19.0832 2.4291 18.8706 2.39345 18.7719C2.33398 18.6073 2.33398 18.5173 2.33398 18.3373L2.33398 7.58885C2.33398 6.68009 2.33398 6.2257 2.47026 5.99214C2.60889 5.75456 2.74258 5.64412 3.00204 5.55281C3.25712 5.46305 3.77202 5.56198 4.80181 5.75985C5.5226 5.89834 6.37746 6 7.33398 6C10.334 6 13.334 4 17.334 4ZM14.834 12C14.834 13.3807 13.7147 14.5 12.334 14.5C10.9533 14.5 9.83398 13.3807 9.83398 12C9.83398 10.6193 10.9533 9.5 12.334 9.5C13.7147 9.5 14.834 10.6193 14.834 12Z"
                          stroke="#FF27A0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full si-ctc-bottom-heading text-center md:text-start mt-2">
                    Additional Tariffs
                  </div>
                  <div className="w-full si-ctc-bottom-sub-heading text-center md:text-start">
                    Harvv’s financial solutions can help offset the impact of
                    increased tariffs, managing higher costs and preserving
                    profit margins to maintain competitiveness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Get Started */}

        <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-3">
          <div className="w-full ps-tb-wrapper flex justify-center items-center flex-col">
            <div className="w-full ps-tb-div1-wrapper">
              <div className="w-full flex p-5 md:pt-[48px] md:pr-[40px] md:pb-[48px] md:pl-[40px] justify-center items-center flex-col ps-tb-div2-wrapper">
                <div className="w-full text-center tb-main-heading mt-5">
                  Ready to Get Started?
                </div>
                <div className="w-full md:w-[40%] tb-sub-heading text-center mt-2">
                  Get the financing you need to accelerate the growth and
                  success of your technology projects. Get started now with
                  Harvv Financing.
                </div>
                <button className="ps-il-view-all-button mt-5 md:mt-10 w-full md:w-auto">
                  Get Started
                </button>
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

export default Solar;

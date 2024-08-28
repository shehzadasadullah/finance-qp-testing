import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import Navbar from "../Navbar/Navbar";
import bikeImage from "@/public/images/ps-img-bike.png";
import content from "@/public/images/ps-tm-content.png";
import { useMediaQuery } from "react-responsive";
import img1 from "@/public/images/ind-bg1.png";
import img2 from "@/public/images/ind-bg2.png";
import img3 from "@/public/images/ind-bg3.png";
import mouse1 from "@/public/images/ps-mouse-1.png";
import mouse2 from "@/public/images/ps-mouse-2.png";
import Rating from "@mui/material/Rating";

function PowerSports() {
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
    if (canNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (canPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
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

        <Navbar activePage={"power-sports"}></Navbar>

        {/* Hero Section */}

        <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full ps-hero-wrapper gap-5 flex p-5 md:pt-[100px] md:pr-[40px] md:pb-[100px] md:pl-[40px] justify-center items-center flex-col md:flex-row">
            <div className="w-full flex gap-5 md:gap-10 justify-center md:justify-start items-center flex-col">
              <div className="w-full flex justify-center md:justify-start items-center">
                <div className="flex justify-center items-center flex-row gap-2 ps-badge-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_7296_14530)">
                      <path
                        d="M15.6663 9.66671V6.33337H14.103C13.9636 5.81868 13.7598 5.32365 13.4963 4.86004L14.5997 3.75671L12.243 1.40004L11.1397 2.50337C10.6761 2.23993 10.181 2.0361 9.66634 1.89671V0.333374H6.33301V1.89671C5.81832 2.0361 5.32329 2.23993 4.85967 2.50337L3.75634 1.40004L1.39967 3.75671L2.50301 4.86004C2.23957 5.32365 2.03573 5.81868 1.89634 6.33337H0.333008V9.66671H1.89634C1.976 9.96418 2.07852 10.255 2.20301 10.5367L4.05301 8.66671C3.9059 7.78895 4.05573 6.88719 4.47878 6.10417C4.90184 5.32114 5.57396 4.70157 6.38876 4.34352C7.20356 3.98546 8.11451 3.90938 8.97742 4.1273C9.84033 4.34523 10.6059 4.84471 11.153 5.54671C13.373 8.39671 10.9397 12.5734 7.33967 11.9534L5.46301 13.8067C5.74467 13.9312 6.03554 14.0337 6.33301 14.1134V15.6667H9.66634V14.1034C10.181 13.964 10.6761 13.7601 11.1397 13.4967L12.243 14.6L14.5997 12.2434L13.4963 11.14C13.7598 10.6764 13.9636 10.1814 14.103 9.66671H15.6663Z"
                        fill="white"
                      />
                      <path
                        d="M10.2999 7.11343L8.81324 8.60343L7.8699 8.13009L7.39657 7.18676L8.88657 5.70009C8.47228 5.55399 8.02516 5.5278 7.59665 5.62455C7.16814 5.7213 6.77564 5.93705 6.46432 6.24698C6.15299 6.55692 5.93548 6.94844 5.83681 7.37651C5.73815 7.80459 5.76233 8.25182 5.90657 8.66676L0.999905 13.6668C0.848571 13.8482 0.770573 14.0797 0.781239 14.3158C0.791905 14.5518 0.890463 14.7754 1.05755 14.9425C1.22463 15.1095 1.44816 15.2081 1.68421 15.2188C1.92026 15.2294 2.15177 15.1514 2.33324 15.0001L7.33324 10.0934C7.74818 10.2377 8.19541 10.2619 8.62348 10.1632C9.05156 10.0645 9.44308 9.84701 9.75302 9.53568C10.0629 9.22435 10.2787 8.83186 10.3754 8.40335C10.4722 7.97484 10.446 7.52772 10.2999 7.11343Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7296_14530">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>Powersports</div>
                </div>
              </div>
              <div className="w-full text-3xl md:text-5xl ps-top-heading text-center md:text-start">
                Welcome to Harvv's Customized Floor Plans for Powersports
                Dealers
              </div>
              <div className="w-full text-center md:text-start ps-top-sub-heading">
                Access Net 30, 60 and 90 Terms on Used Vehicles, Parts, and
                More.
              </div>
              <div className="w-full text-center md:text-start ps-top-sub-heading">
                <button className="ps-top-hero-button w-full md:w-auto">
                  Rev Up Your Financing
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center gap-5 md:justify-end items-center flex-col">
              <button className="w-full ps-top-right-button flex justify-center items-center flex-row gap-2">
                <div className="ps-top-right-button-div">Check Our Plans</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M3.83301 10H17.1663M17.1663 10L12.1663 5M17.1663 10L12.1663 15"
                    stroke="url(#paint0_linear_7569_1920)"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7569_1920"
                      x1="12.6637"
                      y1="16.145"
                      x2="10.6075"
                      y2="5.76201"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EC008C" />
                      <stop offset="1" stop-color="#FC6767" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <div className="w-full flex gap-5 justify-center items-center flex-col md:flex-row">
                <div className="w-full flex justify-start items-center">
                  <img
                    src={bikeImage.src}
                    alt=""
                    className="h-full md:h-[350px] w-full rounded-[16px]"
                  />
                </div>
                <div className="flex justify-center gap-5 xl:gap-8 p-5 items-center flex-col w-full h-full rounded-[16px] md:h-[350px] ps-learn-how-div-wrapper">
                  <div className="w-full flex justify-center md:justify-start items-center flex-row text-center md:text-start">
                    <div className="ps-setting-top-wrapper p-2 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_7296_14525)">
                          <path
                            d="M19.5833 7.5H17.9417C17.7959 7.03434 17.6091 6.58257 17.3833 6.15L18.5458 5C18.5849 4.96127 18.6159 4.91518 18.637 4.86441C18.6582 4.81363 18.6691 4.75917 18.6691 4.70417C18.6691 4.64916 18.6582 4.5947 18.637 4.54393C18.6159 4.49315 18.5849 4.44707 18.5458 4.40833L15.6 1.45417C15.5613 1.41511 15.5152 1.38412 15.4644 1.36296C15.4136 1.34181 15.3592 1.33092 15.3042 1.33092C15.2492 1.33092 15.1947 1.34181 15.1439 1.36296C15.0932 1.38412 15.0471 1.41511 15.0083 1.45417L13.85 2.61667C13.4174 2.39092 12.9657 2.20407 12.5 2.05833L12.5 0.416667C12.5 0.30616 12.4561 0.200179 12.378 0.122039C12.2998 0.0438987 12.1938 0 12.0833 0L7.91667 0C7.80616 0 7.70018 0.0438987 7.62204 0.122039C7.5439 0.200179 7.5 0.30616 7.5 0.416667L7.5 2.05833C7.03434 2.20407 6.58257 2.39092 6.15 2.61667L5 1.45417C4.96127 1.41511 4.91518 1.38412 4.86441 1.36296C4.81363 1.34181 4.75917 1.33092 4.70417 1.33092C4.64916 1.33092 4.5947 1.34181 4.54393 1.36296C4.49315 1.38412 4.44707 1.41511 4.40833 1.45417L1.45417 4.4C1.41511 4.43873 1.38412 4.48482 1.36296 4.53559C1.34181 4.58637 1.33092 4.64083 1.33092 4.69583C1.33092 4.75084 1.34181 4.8053 1.36296 4.85607C1.38412 4.90685 1.41511 4.95293 1.45417 4.99167L2.61667 6.15C2.39092 6.58257 2.20407 7.03434 2.05833 7.5H0.416667C0.30616 7.5 0.200179 7.5439 0.122039 7.62204C0.0438987 7.70018 0 7.80616 0 7.91667L0 12.0833C0 12.1938 0.0438987 12.2998 0.122039 12.378C0.200179 12.4561 0.30616 12.5 0.416667 12.5H2.05833C2.14685 12.784 2.2526 13.0622 2.375 13.3333C2.40252 13.395 2.44464 13.4491 2.49771 13.4909C2.55078 13.5327 2.61322 13.561 2.67964 13.5733C2.74607 13.5856 2.81449 13.5815 2.87901 13.5615C2.94353 13.5415 3.00221 13.5061 3.05 13.4583C5.50833 10.9583 5.52917 11.0375 5.47917 10.7458C4.67917 6.1125 10.7083 3.45 13.6125 7.175C14.1423 7.85181 14.471 8.66395 14.5613 9.51868C14.6515 10.3734 14.4997 11.2363 14.1229 12.0088C13.7462 12.7814 13.1599 13.4324 12.4309 13.8877C11.7018 14.3429 10.8595 14.584 10 14.5833C9.2625 14.5833 9.1125 14.4042 8.88333 14.6333C6.40833 17.075 6.3625 17.0208 6.42083 17.3208C6.43338 17.3873 6.46194 17.4498 6.50405 17.5028C6.54616 17.5558 6.60054 17.5977 6.6625 17.625C6.93358 17.7474 7.21188 17.8531 7.49583 17.9417L7.49583 19.5833C7.49583 19.6938 7.53973 19.7998 7.61787 19.878C7.69601 19.9561 7.80199 20 7.9125 20H12.0833C12.1938 20 12.2998 19.9561 12.378 19.878C12.4561 19.7998 12.5 19.6938 12.5 19.5833L12.5 17.9417C12.9657 17.7959 13.4174 17.6091 13.85 17.3833L15 18.5458C15.0387 18.5849 15.0848 18.6159 15.1356 18.637C15.1864 18.6582 15.2408 18.6691 15.2958 18.6691C15.3508 18.6691 15.4053 18.6582 15.4561 18.637C15.5068 18.6159 15.5529 18.5849 15.5917 18.5458L18.5375 15.6C18.5766 15.5613 18.6075 15.5152 18.6287 15.4644C18.6499 15.4136 18.6607 15.3592 18.6607 15.3042C18.6607 15.2492 18.6499 15.1947 18.6287 15.1439C18.6075 15.0932 18.5766 15.0471 18.5375 15.0083L17.375 13.85C17.6036 13.4177 17.7932 12.9659 17.9417 12.5H19.5833C19.6938 12.5 19.7998 12.4561 19.878 12.378C19.9561 12.2998 20 12.1938 20 12.0833L20 7.91667C20 7.80616 19.9561 7.70018 19.878 7.62204C19.7998 7.5439 19.6938 7.5 19.5833 7.5ZM19.1667 11.6667C17.6083 11.6667 17.3375 11.5708 17.225 11.975C16.5292 14.5625 15.7125 13.3542 17.6417 15.3083L15.2833 17.6667C14.1958 16.575 14.0583 16.3083 13.7 16.5125C11.3708 17.8333 11.6667 16.425 11.6667 19.1667H8.33333C8.33333 17.0292 8.47083 17.3958 7.57917 17.0833L9.32083 15.3625C14.7375 16.0667 17.6542 9.0875 13.3333 5.72083C9.58333 2.80417 4.025 5.85 4.625 10.6667L2.91667 12.4208C2.6 11.5167 2.91667 11.6667 0.833333 11.6667L0.833333 8.33333C2.39167 8.33333 2.6625 8.42917 2.775 8.025C3.47083 5.4375 4.2875 6.64583 2.35833 4.69167L4.71667 2.33333C5.80417 3.425 5.94167 3.69167 6.3 3.4875C8.62917 2.16667 8.33333 3.575 8.33333 0.833333H11.6667C11.6667 2.39167 11.5708 2.6625 11.975 2.775C14.5625 3.47083 13.3542 4.2875 15.3083 2.35833L17.6667 4.71667C16.575 5.80417 16.3083 5.94167 16.5125 6.3C17.8333 8.62917 16.425 8.33333 19.1667 8.33333L19.1667 11.6667Z"
                            fill="url(#paint0_linear_7296_14525)"
                          />
                          <path
                            d="M13.2709 8.74995C13.247 8.68333 13.2066 8.62389 13.1533 8.57723C13.1001 8.53057 13.0359 8.49824 12.9667 8.48328C12.6709 8.41662 12.7084 8.48328 10.9334 10.2458L10.1459 9.85412L9.75422 9.06662C11.5334 7.28745 11.5834 7.33328 11.5167 7.03328C11.5018 6.96411 11.4694 6.89989 11.4228 6.84667C11.3761 6.79345 11.3167 6.753 11.2501 6.72912C10.6774 6.52521 10.0598 6.4818 9.46419 6.60359C8.86859 6.72538 8.31764 7.00773 7.87095 7.42009C7.42427 7.83245 7.09885 8.35911 6.92993 8.9431C6.761 9.52708 6.755 10.1461 6.91256 10.7333L0.945891 16.7833C0.64476 17.0844 0.475586 17.4928 0.475586 17.9187C0.475586 18.3446 0.64476 18.753 0.945891 19.0541C1.24702 19.3552 1.65544 19.5244 2.08131 19.5244C2.50717 19.5244 2.91559 19.3552 3.21672 19.0541L9.26672 13.0875C9.85387 13.245 10.4729 13.239 11.0569 13.0701C11.6409 12.9012 12.1676 12.5757 12.5799 12.1291C12.9923 11.6824 13.2746 11.1314 13.3964 10.5358C13.5182 9.94022 13.4748 9.32266 13.2709 8.74995ZM2.62922 18.4583C2.48197 18.5864 2.2916 18.6539 2.09653 18.6471C1.90146 18.6403 1.71622 18.5598 1.5782 18.4218C1.44018 18.2838 1.35966 18.0985 1.35289 17.9035C1.34612 17.7084 1.41361 17.518 1.54172 17.3708C8.17506 10.6374 7.90422 11.0583 7.79172 10.7041C7.65352 10.3154 7.61366 9.89853 7.67569 9.49067C7.73773 9.08282 7.89974 8.69665 8.14727 8.36661C8.3948 8.03657 8.72016 7.77291 9.09433 7.59916C9.4685 7.4254 9.87986 7.34695 10.2917 7.37078C8.90006 8.74995 8.69589 8.81662 8.87506 9.16662C9.50422 10.4166 9.48339 10.45 9.65006 10.5333C10.8167 11.1166 11.0334 11.3208 11.3167 11.0416L12.6376 9.72495C12.6614 10.1368 12.5829 10.5482 12.4092 10.9223C12.2354 11.2965 11.9718 11.6219 11.6417 11.8694C11.3117 12.1169 10.9255 12.2789 10.5177 12.341C10.1098 12.403 9.69294 12.3632 9.30422 12.225C8.94172 12.0833 9.35422 11.8291 2.62922 18.4583Z"
                            fill="url(#paint1_linear_7296_14525)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_7296_14525"
                            x1="13.2461"
                            y1="22.2899"
                            x2="7.91912"
                            y2="2.11619"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#EC008C" />
                            <stop offset="1" stop-color="#FC6767" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_7296_14525"
                            x1="9.07788"
                            y1="21.0116"
                            x2="5.61842"
                            y2="7.91031"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#EC008C" />
                            <stop offset="1" stop-color="#FC6767" />
                          </linearGradient>
                          <clipPath id="clip0_7296_14525">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full text-center md:text-start">
                    <p className="ps-inventory-heading xl:text-2xl">
                      Keep Your Inventory Full With Harvv Financing
                    </p>
                    <p className="mt-1 ps-inventory-sub-heading xl:text-xl">
                      Working capital support for innovation
                    </p>
                  </div>
                  <div className="w-full flex justify-center md:justify-start items-center flex-row text-center md:text-start">
                    <button className="flex justify-center gap-3 items-center flex-row">
                      <div className="ps-learn-how-heading xl:text-2xl">
                        Learn How
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M3.33301 10H16.6663M16.6663 10L11.6663 5M16.6663 10L11.6663 15"
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
          <div className="w-full tm-top-wrapper p-5 md:p-10 flex justify-center items-center flex-col">
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
                What Our Powersports Partners Say
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
                    disabled={canPrev === false}
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
                    disabled={canNext === false}
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
                    Revving Up Success
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
                        Inventory Financing
                      </div>
                      <div className="w-full ps-flash-sub-heading text-center md:text-start">
                        Secure capital to stock up on seasonal or high-demand
                        vehicles and parts.
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
                        Provide financing options to customers, increasing sales
                        and making purchases more accessible.
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
                        Manage payments to suppliers to ensure a steady flow of
                        inventory. there below a Map location logo
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
            <div className="flex p-5 md:pt-0 md:pl-[40px] md:pr-[40px] justify-center items-center flex-col md:flex-row w-full">
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
                      Gear Up with Flexible Financing
                    </div>
                    <div className="w-full mt-0 md:mt-1 mb-3 md:mb-0 text-center md:text-start il-industries-serve-sub">
                      For Net 30, 60, 90 Terms with Upfront Payment, Fast
                      Process Click Below
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:justify-start items-center">
                  <button className="il-view-all-button w-full md:w-auto">
                    Explore Your Options
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overcoming obstacles */}

        <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-3">
          <div className="w-full ps-tb-wrapper flex justify-center items-center flex-col">
            <div className="w-full ps-tb-div1-wrapper">
              <div className="w-full flex p-5 md:pt-[48px] md:pr-[40px] md:pb-[48px] md:pl-[40px] justify-center items-center flex-col ps-tb-div2-wrapper">
                <div className="w-full text-center tb-main-heading mt-5">
                  Overcoming Obstacles
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

export default PowerSports;

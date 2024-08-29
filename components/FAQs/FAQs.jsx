import React, { useState } from "react";
import Head from "next/head";
import img1 from "@/public/images/cu-live-chat.png";
import ContactUs from "@/components/contact-us/ContactUs";
import Footer from "@/components/footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useRouter } from "next/router";

const FaqItem = ({ question, answer, isActive, onToggle }) => (
  <div
    onClick={onToggle}
    style={{
      padding: "16px 24px",
      border: "1px solid #EAECF0",
      background: "#fff",
      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    }}
    className={`rounded-[12px] flex cursor-pointer flex-col justify-center items-center w-full text-start transition-all duration-500 ease-in-out`}
  >
    <div className="w-full flex justify-center items-center">
      <button className="w-full justify-between items-center flex">
        <div className="faq-question-heading w-full text-start">{question}</div>
        <div className="text-end text-[#fff] ml-5 lg:ml-0 text-2xl">
          {isActive ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 15L12 9L6 15"
                  stroke="#98A2B3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#98A2B3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
          )}
        </div>
      </button>
    </div>
    <div
      className={`w-full faq-answer text-start overflow-hidden transition-max-height ${
        isActive ? "mt-2 max-h-auto" : "max-h-0"
      } duration-500 ease-in-out`}
    >
      {answer}
    </div>
  </div>
);

function FAQs() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is Harvv Financing?",
      answer:
        "Harvv Financing is a provider of innovative financing solutions designed to support businesses across various industries. We offer flexible financing options to help manage cash flow and enable growth.",
    },
    {
      question: "How does invoice financing work?",
      answer:
        "Harvv Financing is a provider of innovative financing solutions designed to support businesses across various industries. We offer flexible financing options to help manage cash flow and enable growth.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "Harvv Financing is a provider of innovative financing solutions designed to support businesses across various industries. We offer flexible financing options to help manage cash flow and enable growth.",
    },
    {
      question: "What are the benefits of using Harvv Financing?",
      answer:
        "Harvv Financing is a provider of innovative financing solutions designed to support businesses across various industries. We offer flexible financing options to help manage cash flow and enable growth.",
    },
    {
      question: "How can I get started with Harvv Financing?",
      answer:
        "Harvv Financing is a provider of innovative financing solutions designed to support businesses across various industries. We offer flexible financing options to help manage cash flow and enable growth.",
    },
    {
      question: "How can I get started with Harvv Financing?",
      answer:
        "Harvv Financing is a provider of innovative financing solutions designed to support businesses across various industries. We offer flexible financing options to help manage cash flow and enable growth.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
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

        <Navbar activePage={"faqs"}></Navbar>

        {/* Top banner */}

        <div className="w-full flex justify-center items-center mt-3 px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="w-full tb-wrapper border-2 flex justify-center items-center flex-col">
            <div className="w-full flex p-8 md:pt-[100px] md:pr-[16px] md:pb-[100px] md:pl-[16px] justify-center items-center flex-col tb-div1-wrapper">
              <div className="w-full">
                <div className="w-full flex text-center tb-main-heading2 justify-center items-center">
                  Frequently asked questions
                </div>
                <div className="w-full flex tb-sub-heading text-center justify-center mt-5 items-center">
                  Everything you need to know about the product and billing.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us & FAQs */}

        <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
          <div className="p-0 md:pt-0 md:pb-[48px] md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col w-full md:mt-8 mt-0">
            <div className="w-full mt-2 md:mt-12">
              <div className="w-full flex justify-center items-center md:items-start flex-col md:flex-row gap-3 md:gap-6">
                <div className="w-full md:w-1/2 border-2 cu-form-wrapper flex justify-center items-center flex-col">
                  <div className="w-full flex justify-center md:justify-start items-center">
                    <div className="il-services-wrapper flex justify-center items-center flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                      >
                        <path
                          d="M6.43859 6.87496C6.60512 6.40156 6.93382 6.00237 7.36647 5.7481C7.79912 5.49382 8.3078 5.40087 8.80242 5.48571C9.29704 5.57055 9.74567 5.82771 10.0689 6.21162C10.392 6.59554 10.5689 7.08145 10.5682 7.58329C10.5682 8.99996 8.44317 9.70829 8.44317 9.70829M8.49984 12.5416H8.50692M15.5832 8.99996C15.5832 12.912 12.4119 16.0833 8.49984 16.0833C4.58782 16.0833 1.4165 12.912 1.4165 8.99996C1.4165 5.08794 4.58782 1.91663 8.49984 1.91663C12.4119 1.91663 15.5832 5.08794 15.5832 8.99996Z"
                          stroke="#FF27A0"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="il-services-heading ms-2">FAQ</div>
                    </div>
                  </div>
                  <div className="w-full text-center mt-3 md:text-start cu-form-heading">
                    Ask a Question
                  </div>
                  <div className="w-full text-center md:text-start mt-3 cu-form-sub-heading">
                    Need more info or have a specific query? Use the box below
                    to ask your question. We’re all ears!
                  </div>
                  <div className="mt-3 w-full">
                    <textarea
                      className="h-32 w-full cu-form-textarea"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="mt-3 w-full">
                    <button className="w-full cu-form-button-submit">
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-3 md:gap-6">
                  {faqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isActive={index === activeIndex}
                      onToggle={() => handleToggle(index)}
                    />
                  ))}
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

export default FAQs;

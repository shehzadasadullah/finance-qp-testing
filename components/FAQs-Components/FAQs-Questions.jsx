import React, { useState } from "react";

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

function FAQsQuestions() {
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
      {/* Contact Us & FAQs */}

      <div className="w-full px-2 lg:px-4 pb-2 lg:pb-4">
        <div className="pt-3 pb-3 md:pt-[48px] md:pb-[48px] md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col w-full">
          <div className="w-full">
            <div className="w-full flex justify-center items-center flex-col gap-3 md:gap-6">
              <div className="w-full md:pl-[40px] md:pr-[40px] flex justify-center items-center flex-col gap-3 md:gap-6">
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
    </>
  );
}

export default FAQsQuestions;

"use client"
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the operating hours?",
      answer:
        "Our operating hours are from 9:00 AM to 6:00 PM, Monday through Friday.",
    },
    {
      question: "Where are you located?",
      answer: "We are located at 123 Main Street, Anytown, USA.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via chat and email.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return most items within 30 days of purchase for a full refund.",
    },
    {
      question: "Are there any discounts available?",
      answer:
        "We frequently offer seasonal discounts and promotions. Check our website for the latest deals.",
    },
  ];

  const toggleQuestion = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-5 px-5 md:px-10">
      <h2 className="text-[#efeff0] text-2xl md:text-3xl font-semibold">
        Questions? Answered.
      </h2>
      <div className="my-5 md:my-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white py-5 sm:py-10">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleQuestion(index)}
              role="button"
              aria-expanded={openIndex === index}
            >
              <h3 className="font-semibold text-sm sm:text-base text-white">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaAngleUp className="text-white" />
              ) : (
                <FaAngleDown className="text-white" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-white text-xs sm:text-base mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;

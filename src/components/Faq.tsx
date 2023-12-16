"use client";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What's the best way to learn programming?",
    answer:
      "The best way to learn programming is by hands-on practice. Start with a simple language like Python, and build projects to apply your knowledge. Don't forget to seek help from online communities and resources.",
  },
  {
    question: "How can I improve my productivity at work?",
    answer:
      "To improve productivity at work, prioritize tasks, break them into smaller steps, and use productivity tools. Take regular breaks, maintain a healthy work-life balance, and communicate effectively with your team.",
  },
  {
    question: "What are some tips for a successful job interview?",
    answer:
      "Prepare thoroughly for the job interview by researching the company, practicing common interview questions, and showcasing your relevant skills. Dress professionally, maintain good body language, and follow up with a thank-you email after the interview.",
  },
  {
    question: "How can I stay motivated when working on long-term projects?",
    answer:
      "Break down the long-term project into smaller, manageable tasks. Set realistic goals, celebrate small achievements, and stay organized. Take breaks when needed, and remind yourself of the ultimate reward or outcome to stay motivated.",
  },
  // Add more questions and answers as needed...
];

const Faq: React.FC = () => {
  const [openStates, setOpenStates] = useState(
    new Array(faqs.length).fill(false)
  );

  const toggleAccordion = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  return (
    <div className="mt-16 mb-10">
      <h3 className="text-[36px] font-semibold my-10">FAQ</h3>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-t border-gray-200"
        >
          <button
            className="flex justify-between items-center w-full p-4 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <span className="ml-6 font-bold text-xl">
              {openStates[index] ? "-" : "+"}
            </span>
          </button>
          {openStates[index] && (
            <div className="text-justify p-4">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;

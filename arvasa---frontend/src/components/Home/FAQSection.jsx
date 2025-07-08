import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquareText, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "How do I list my property for rent or sale on your website?",
    answer:
      'You can list your property by signing up, selecting the "List Property" option, and filling in details like location, price, amenities, and images.',
  },
  {
    question: "How do I list my property for rent or sale on your website?",
    answer:
      'You can list your property by signing up, selecting the "List Property" option, and filling in details like location, price, amenities, and images.',
  },
  {
    question: "How do I list my property for rent or sale on your website?",
    answer:
      'You can list your property by signing up, selecting the "List Property" option, and filling in details like location, price, amenities, and images.',
  },
];

const FAQItem = ({ faq, index, activeIndex, setActiveIndex }) => {
  const isOpen = activeIndex === index;

  return (
    <div className="mb-4 transition-all duration-300 ease-in-out">
      <button
        className="w-full flex justify-between items-center p-4 bg-[#a13d52] text-white rounded-md focus:outline-none shadow-md transition-colors"
        onClick={() => setActiveIndex(isOpen ? null : index)}
      >
        <div className="flex items-center gap-3">
          <MessageSquareText className="w-5 h-5" />
          <span className="font-semibold text-sm md:text-lg">{faq.question}</span>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="ml-10 bg-[#f3e1e4] text-black text-sm p-4 rounded-md flex items-start gap-2 shadow">
            <FileText className="w-4 h-4 mt-1 text-[#8C2841]" />
            <p>{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#8C2841' }} className="my-8 mx-2 mt-8 mb-8 md:mx-4 relative bg-rosewood max-w-[1840px] h-auto md:rounded-3xl flex flex-col justify-center items-center p-4 md:p-10">
    <div style={{ backgroundColor: '#8C2841' }} className="my-8 mx-2 mt-8 mb-8 md:mx-4 relative bg-rosewood max-w-[1840px] h-auto md:rounded-3xl flex flex-col justify-center items-center p-4 md:p-10">

      <div className="flex flex-wrap justify-between items-center w-[100%] md:w-[90%] mb-8">
        <h2 className="text-xl md:text-3xl font-semibold text-white">Frequently Asked Questions</h2>
        <button className="px-4 mt-3 w-full md:w-auto py-2 text-black text-sm md:text-base font-semibold rounded-lg bg-gradient-to-r from-[#fbe174] to-[#d2a623] shadow-md" onClick={()=>navigate("/questions")}>
          Post your question here?
        </button>
      </div>

      <div className="w-[100%] md:w-[90%] flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQSection

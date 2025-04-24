"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faqData from '@/data/faq_prestataire.json'; 
type FAQItem = {
    question: string;
    answer: string;
};

type FAQAccordionProps = {
    items: FAQItem[];
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-start justify-center w-full h-auto p-4">
            <h1 className="text-4xl font-medium mb-6">FAQ</h1>
            <div className="w-full">
                {items.map((item, index) => (
                    <div key={index} className="mb-4 border-b border-gray-200 pb-2">
                        <div
                            onClick={() => toggleAnswer(index)}
                            className="cursor-pointer flex items-center justify-between text"
                        >
                            <h2>{item.question}</h2>
                            {openIndex === index ? (
                                <FaChevronUp className="text-gray-600 font-light" />
                            ) : (
                                <FaChevronDown className="text-gray-600" />
                            )}
                        </div>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-700">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const FAQPage = () => {
    return <FAQAccordion items={faqData} />;
};

export default FAQPage;

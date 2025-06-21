
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes laminate flooring more durable than hardwood?",
    answer: "Its optimized wear layer, stable engineered core, and resin-based coatings offer superior resistance to scratches, stains, and moisture compared to hardwood."
  },
  {
    question: "How important is professional installation for laminate flooring durability?",
    answer: "Professional installation is crucial as it ensures correct alignment, proper subfloor preparation, and the creation of appropriate expansion gaps, all of which help prolong the floor's lifespan."
  },
  {
    question: "Can laminate flooring withstand high-traffic areas such as homes with pets and children?",
    answer: "Yes, its scratch-resistant and easy-to-clean properties make it ideal for high-traffic environments, including those with pets and children."
  },
  {
    question: "What type of warranty should I expect with quality laminate flooring?",
    answer: "Warranties typically cover manufacturing defects, premature wear, and color fading, with terms ranging from 10 to 25 years depending on the product quality."
  },
  {
    question: "How does maintenance affect the longevity of laminate flooring?",
    answer: "Regular cleaning with non-abrasive tools and prompt spill management are essential to maintaining the floor's protective coating and overall durability."
  }
];

const InteractiveFAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="faq-section mt-12">
      <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleItem(index)}
              aria-expanded={openItems.has(index)}
            >
              <span className="text-left">{faq.question}</span>
              <ChevronDown 
                className={`faq-chevron w-5 h-5 ${openItems.has(index) ? 'open' : ''}`}
              />
            </button>
            {openItems.has(index) && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveFAQ;

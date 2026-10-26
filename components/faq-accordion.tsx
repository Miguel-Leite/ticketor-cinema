"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpenIndex?: number;
};

export function FaqAccordion({ items, defaultOpenIndex = -1 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="bg-neutral-900 rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span className="text-white font-bold text-lg">{item.question}</span>
              {isOpen ? (
                <Minus size={24} className="shrink-0 text-white" />
              ) : (
                <Plus size={24} className="shrink-0 text-white" />
              )}
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-neutral-400">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

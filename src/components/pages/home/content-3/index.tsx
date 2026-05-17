'use client';

import { useState } from "react";
import faqs from './faqs.json';

import Title from "@/components/library/title";
import Content from '@/components/layout/content';

export default function Content3() {
  const [groupIndex, setGroupIndex] = useState<string | null>(null);
  const [itemIndex, setItemIndex] = useState<string | null>(null);

  const handleGroupToggle = (key: string) => {
    setGroupIndex((currentIndex) => currentIndex === key ? null : key);
    setItemIndex(null);
  };

  const handleItemToggle = (key: string) => {
    setItemIndex((currentIndex) => currentIndex === key ? null : key);
  };

  return (
    <Content id="faq" className="py-26 z-2">
      <Title title="Your Questions" />
      
      <h2 className="text-5xl font-pp-neue-montreal font-light text-secondary text-center mt-6">Frequently asked <span className="text-quaternary">questions</span></h2>

      <h3 className="w-full sm:max-w-2xl text-tertiary text-center mt-6">If you have any further questions, please use the chat box in the bottom right or contact us by email at hello@qoves.com</h3>

      <div className="w-full max-w-6xl mt-12 bg-foreground/50 rounded-xl p-2">
        {faqs.map((group, groupI) => {
          const groupKey = `${groupI}`;
          const groupIsOpen = groupIndex === groupKey;

          return (
          <div key={groupI} className={`overflow-hidden p-2 transition-all duration-400 ease-in-out ${groupIsOpen ? 'text-white bg-[#aec2c9] rounded-xl': 'text-primary border-t first:border-t-0 border-foreground'}`}>
            <button onClick={() => handleGroupToggle(groupKey)} className="w-full flex justify-between items-center py-2 px-4 text-left cursor-pointer">
              <h3 className="text-lg font-medium">{group.category}</h3>
              <span className="text-xl">{groupIsOpen ? '\u2212' : '\u002B'}</span>
            </button>

            <div className={`text-white rounded-xl px-2 transition-all duration-400 ease-in-out ${ groupIsOpen ? 'bg-foreground/30 py-2' : 'max-h-0' }`}>
              {group.items.map((item, itemI) => {
                const itemKey = `${groupI}-${itemI}`;
                const isOpen = itemIndex === itemKey

                return (
                  <div key={itemKey} className={`px-2 rounded-xl transition-all duration-400 ease-in-out ${ isOpen ? 'bg-foreground/20' : '' }`}>
                    <button onClick={() => handleItemToggle(itemKey)} className="w-full flex justify-between items-center py-2 text-left cursor-pointer">
                      <span className="font-medium">{item.question}</span>
                      <span className="text-xl">{isOpen ? '\u2212' : '\u002B'}</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-400 ease-in-out ${ isOpen ? 'py-2' : 'max-h-0' }`}>
                      <p className="text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )})}
      </div>
    </Content>
  );
}

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

type AccordionProps = {
  title: string;
  content: string;
};

export function AccordionChild({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mt-3 px-6 py-3 bg-white w-full flex justify-between">
        <div>{title}</div>
        <button onClick={toggleAccordion}>
          <ChevronDownIcon />
        </button>
      </div>

      {isOpen && <div className="px-6 py-3 bg-slate-400">{content}</div>}
    </>
  );
}

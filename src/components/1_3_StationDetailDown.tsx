import { useState } from "react";
import { AccordionParents } from "./1_3__accordionParents";

interface Tab {
  label: string;
  content: JSX.Element;
}

const tabs: Tab[] = [
  {
    label: "常用項目",
    content: <AccordionParents />,
  },
  { label: "完整項目", content: <AccordionParents /> },
];

export function StationDetailDown() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="container mb-3">
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-10 py-3 ${
              activeTab === index ? "bg-slate-300" : "bg-slate-500"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full h-96 bg-slate-300 px-3 py-3 overflow-auto">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

import { AccordionChild } from "./1_3_accordionChild";

export function AccordionParents() {
  const accordionData = [
    {
      title: "車燈系統",
      content: "Content for section 1",
    },
    {
      title: "傳動系統",
      content: "Content for section 2",
    },
    {
      title: "煞車系統",
      content: "Content for section 3",
    },
    {
      title: "轉動系統",
      content: "Content for section 4",
    },
  ];

  return (
    <div className="app">
      {accordionData.map((item, index) => (
        <AccordionChild key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

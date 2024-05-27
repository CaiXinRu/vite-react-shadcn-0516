import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDetails } from "@/context/detailContext";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export function AccordionChild() {
  const { details } = useDetails();
  const initialOpenDetails = details.reduce((acc, _, index) => {
    acc[index] = true;
    return acc;
  }, {} as { [key: number]: boolean });

  const [openDetails, setOpenDetails] = useState<{ [key: number]: boolean }>(
    initialOpenDetails
  );

  const toggleAccordion = (index: number) => {
    setOpenDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {details.map((detail, index) => (
        <div key={index}>
          <div className="mt-3 px-6 py-3 bg-white w-full flex justify-between">
            <div>{detail.title}</div>
            <button onClick={() => toggleAccordion(index)}>
              <ChevronDownIcon />
            </button>
          </div>
          {openDetails[index] && (
            <div>
              {detail.items.map((i, index) => (
                <div key={index} className="px-6 py-3 bg-slate-400 flex">
                  <Select>
                    <SelectTrigger
                      className={`w-[20%] ${
                        i.situation === "正常" ? "" : "bg-slate-200"
                      }`}
                    >
                      <SelectValue placeholder={`${i.situation}`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="正常">正常</SelectItem>
                      <SelectItem value="調整">調整</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="flex items-center mx-3">{i.item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

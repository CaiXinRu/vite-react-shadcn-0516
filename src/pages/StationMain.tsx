import { StationInformation } from "@/components/1_0_StationInformation";
import { StationDrawer } from "@/components/1_1_StationDrawer";
import { StationOpenMap } from "@/components/1_1_StationOpenMap";
import { Header } from "@/components/Header";
import { columnsInformation } from "@/components/column/columnsInformation";
import { useStations } from "@/context/stationContext";
import { useState } from "react";

interface MainTab {
  label: string;
  content: JSX.Element;
}

export default function StationMain() {
  const { stations } = useStations();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [id, setId] = useState<string | null>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const mainTabs: MainTab[] = [
    {
      label: "站點列表",
      content: (
        <StationInformation columns={columnsInformation} data={stations} />
      ),
    },
    {
      label: "站點地圖",
      content: (
        <>
          <StationOpenMap setId={setId} />
          <StationDrawer id={id} />
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="grid grid-cols-2">
        {mainTabs.map((tab, index) => (
          <button
            key={index}
            className={`my-3 px-10 py-3 border-slate-200 border ${
              activeTab === index ? "bg-slate-300" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {mainTabs[activeTab].content}
    </>
  );
}

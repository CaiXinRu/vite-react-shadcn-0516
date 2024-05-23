import {
  Situation,
  StationsContextType,
} from "@/ts-common/types/mainStationTypes";
import React, { createContext, useContext, useEffect, useState } from "react";

const StationsContext = createContext<StationsContextType | undefined>(
  undefined
);

const getStations = async (): Promise<Situation[]> => {
  return [
    {
      id: "500607001",
      station: "500607001 - 捷運水安宮站",
      manual: 4,
      auto: null,
      classOne: 12,
      classTwo: null,
      fault: 3,
      case: 5,
    },
    {
      id: "500607002",
      station: "500607002 - 光明國中",
      manual: 6,
      auto: 8,
      classOne: null,
      classTwo: null,
      fault: null,
      case: 9,
    },
    {
      id: "500607003",
      station: "500607003 - 公益黎明路口(西南側)",
      manual: null,
      auto: 3,
      classOne: 9,
      classTwo: null,
      fault: null,
      case: 2,
    },
    {
      id: "500607004",
      station: "500607004 - 台中火車站",
      manual: 2,
      auto: 5,
      classOne: null,
      classTwo: 4,
      fault: 1,
      case: 3,
    },
    {
      id: "500607005",
      station: "500607005 - 新光三越",
      manual: null,
      auto: 4,
      classOne: 7,
      classTwo: 3,
      fault: 2,
      case: 4,
    },
    {
      id: "500607006",
      station: "500607006 - 台中醫院",
      manual: 5,
      auto: 6,
      classOne: 8,
      classTwo: null,
      fault: null,
      case: 1,
    },
    {
      id: "500607007",
      station: "500607007 - 勤美誠品",
      manual: 1,
      auto: 7,
      classOne: 10,
      classTwo: 5,
      fault: 3,
      case: null,
    },
    {
      id: "500607008",
      station: "500607008 - 科博館",
      manual: 3,
      auto: null,
      classOne: 6,
      classTwo: 2,
      fault: 4,
      case: 6,
    },
    {
      id: "500607009",
      station: "500607009 - 逢甲大學",
      manual: null,
      auto: 2,
      classOne: 9,
      classTwo: 6,
      fault: 1,
      case: 3,
    },
    {
      id: "500607010",
      station: "500607010 - 秋紅谷",
      manual: 6,
      auto: 5,
      classOne: null,
      classTwo: 3,
      fault: 2,
      case: null,
    },
    {
      id: "500607011",
      station: "500607011 - 台中公園",
      manual: 4,
      auto: null,
      classOne: 8,
      classTwo: 1,
      fault: 5,
      case: 7,
    },
    {
      id: "500607012",
      station: "500607012 - 東海大學",
      manual: null,
      auto: 3,
      classOne: 11,
      classTwo: null,
      fault: 2,
      case: 4,
    },
    {
      id: "500607013",
      station: "500607013 - 朝馬轉運站",
      manual: 2,
      auto: 4,
      classOne: 5,
      classTwo: 3,
      fault: 1,
      case: 6,
    },
    {
      id: "500607014",
      station: "500607014 - 廣三SOGO",
      manual: 5,
      auto: 6,
      classOne: 7,
      classTwo: null,
      fault: null,
      case: 2,
    },
    {
      id: "500607015",
      station: "500607015 - 一中街",
      manual: 1,
      auto: 2,
      classOne: 10,
      classTwo: 5,
      fault: 3,
      case: null,
    },
    {
      id: "500607016",
      station: "500607016 - 老虎城",
      manual: 3,
      auto: null,
      classOne: 6,
      classTwo: 2,
      fault: 4,
      case: 6,
    },
    {
      id: "500607017",
      station: "500607017 - 新時代購物中心",
      manual: null,
      auto: 7,
      classOne: 9,
      classTwo: 4,
      fault: 1,
      case: 3,
    },
    {
      id: "500607018",
      station: "500607018 - 清水車站",
      manual: 6,
      auto: 5,
      classOne: 8,
      classTwo: 3,
      fault: 2,
      case: null,
    },
    {
      id: "500607019",
      station: "500607019 - 大里溪口",
      manual: 4,
      auto: null,
      classOne: 7,
      classTwo: 1,
      fault: 5,
      case: 7,
    },
    {
      id: "500607020",
      station: "500607020 - 東勢中學",
      manual: null,
      auto: 3,
      classOne: 11,
      classTwo: null,
      fault: 2,
      case: 4,
    },
    {
      id: "500607021",
      station: "500607021 - 石岡農會",
      manual: 2,
      auto: 4,
      classOne: 5,
      classTwo: 3,
      fault: 1,
      case: 6,
    },
    {
      id: "500607022",
      station: "500607022 - 台中啤酒廠",
      manual: 5,
      auto: 6,
      classOne: 7,
      classTwo: null,
      fault: null,
      case: 2,
    },
    {
      id: "500607023",
      station: "500607023 - 豐原高鐵站",
      manual: 1,
      auto: 2,
      classOne: 10,
      classTwo: 5,
      fault: 3,
      case: null,
    },
    {
      id: "500607024",
      station: "500607024 - 國立台中科技大學",
      manual: 3,
      auto: null,
      classOne: 6,
      classTwo: 2,
      fault: 4,
      case: 6,
    },
    {
      id: "500607025",
      station: "500607025 - 台中市政府",
      manual: null,
      auto: 7,
      classOne: 9,
      classTwo: 4,
      fault: 1,
      case: 3,
    },
    {
      id: "500607026",
      station: "500607026 - 台中仁愛醫院",
      manual: 6,
      auto: 5,
      classOne: 8,
      classTwo: 3,
      fault: 2,
      case: null,
    },
  ];
};

export const StationsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stations, setStations] = useState<Situation[]>([]);

  const fetchStations = async () => {
    const result = await getStations();
    setStations(result);
  };

  useEffect(() => {
    fetchStations();
  }, []);

  return (
    <StationsContext.Provider value={{ stations, fetchStations }}>
      {children}
    </StationsContext.Provider>
  );
};

export const useStations = (): StationsContextType => {
  const context = useContext(StationsContext);
  if (!context) {
    throw new Error("useStations must be used within a StationsProvider");
  }
  return context;
};

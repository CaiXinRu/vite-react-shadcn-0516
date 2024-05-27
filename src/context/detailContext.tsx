import { Detail, DetailsContextType } from "@/ts-common/types/detailTypes";
import React, { createContext, useContext, useEffect, useState } from "react";

const DetailsContext = createContext<DetailsContextType | undefined>(undefined);

const getDetails = async (): Promise<Detail[]> => {
  return [
    {
      title: "車燈系統",
      items: [
        {
          item: "前車燈",
          situation: "正常",
        },
        {
          item: "後車燈",
          situation: "調整",
        },
      ],
    },
    {
      title: "傳動系統",
      items: [
        {
          item: "前輪內胎",
          situation: "正常",
        },
        {
          item: "後輪內胎",
          situation: "調整",
        },
        {
          item: "前輪組",
          situation: "調整",
        },
        {
          item: "後輪組",
          situation: "調整",
        },
        {
          item: "鏈條",
          situation: "調整",
        },
        {
          item: "腳踏",
          situation: "正常",
        },
      ],
    },
    {
      title: "煞車系統",
      items: [
        {
          item: "前煞車",
          situation: "正常",
        },
        {
          item: "後煞車",
          situation: "調整",
        },
      ],
    },
    {
      title: "轉動系統",
      items: [
        {
          item: "方向燈",
          situation: "正常",
        },
        {
          item: "轉向燈",
          situation: "調整",
        },
      ],
    },
    {
      title: "停車鎖",
      items: [
        {
          item: "前停車鎖",
          situation: "正常",
        },
        {
          item: "後停車鎖",
          situation: "調整",
        },
      ],
    },
    {
      title: "車架",
      items: [
        {
          item: "車架結構",
          situation: "正常",
        },
        {
          item: "車架連接",
          situation: "調整",
        },
      ],
    },
    {
      title: "電控系統",
      items: [
        {
          item: "控制面板",
          situation: "正常",
        },
        {
          item: "電子鎖",
          situation: "調整",
        },
      ],
    },
  ];
};

export const DetailsProviider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [details, setDetails] = useState<Detail[]>([]);

  const fetchDetails = async () => {
    const result = await getDetails();
    setDetails(result);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <DetailsContext.Provider value={{ details, fetchDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetails = (): DetailsContextType => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error("useDetails must be used within a DetailsProvider");
  }
  return context;
};

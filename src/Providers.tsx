import { DetailsProviider } from "@/context/detailContext";
import { ListsProvider } from "@/context/listContext";
import { StationsProvider } from "@/context/stationContext";
import React from "react";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StationsProvider>
      <ListsProvider>
        <DetailsProviider>{children}</DetailsProviider>
      </ListsProvider>
    </StationsProvider>
  );
};

export default Providers;

import { StationInformation } from "@/components/1_0_StationInformation";
import { Header } from "@/components/Header";
import { columnsInformation } from "@/components/column/columnsInformation";
import { useStations } from "@/context/stationContext";

export default function StationMain() {
  const { stations } = useStations();

  return (
    <>
      <Header />
      <StationInformation columns={columnsInformation} data={stations} />
    </>
  );
}

import { StationDrawer } from "@/components/1_1_StationDrawer";
import { StationOpenMap } from "@/components/1_1_StationOpenMap";
import { Header } from "@/components/Header";
import { useStations } from "@/context/stationContext";
// import { LatLngExpression } from "leaflet";
import { useParams } from "react-router-dom";

export default function StationMap() {
  const { id } = useParams<{ id: string }>();
  const { stations } = useStations();
  const stationName = stations.find((station) => station.id === id);

  if (!stationName) {
    return <div>站點不存在</div>;
  }

  // const location: LatLngExpression = stationName.geoCode;

  return (
    <>
      <Header />
      <StationOpenMap />
      <StationDrawer stationName={stationName} />
    </>
  );
}

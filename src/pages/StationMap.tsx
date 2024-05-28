import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useStations } from "@/context/stationContext";
import "@/f2eStyle/mapStyles.css";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link, useParams } from "react-router-dom";

const labels: string[] = ["手動", "自動", "一級", "二級", "故障", "專案"];

const renderGridLabel = (label: string) => {
  return (
    <div className="flex justify-center items-center bg-slate-100 my-3">
      {label}
    </div>
  );
};

const renderGridValue = (value: number | null) => {
  return (
    <div
      className={`flex justify-center items-center my-3 mx-auto w-1/2 rounded-md ${
        value && "bg-slate-300"
      }`}
    >
      {value}
    </div>
  );
};

export default function StationMap() {
  const { id } = useParams<{ id: string }>();
  const { stations } = useStations();
  const stationName = stations.find((station) => station.id === id);

  if (!stationName) {
    return <div>站點不存在</div>;
  }

  const location: LatLngExpression = stationName.geoCode;

  return (
    <>
      <Header />
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <div className="flex items-center justify-between">
              <DrawerTitle>{stationName?.station}</DrawerTitle>
              <Link to={`/station-lists/${stationName.id}`}>
                <Button>檢視站點</Button>
              </Link>
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <div className="grid grid-cols-6 grid-rows-2 mb-3">
              {labels.map((label) => {
                return renderGridLabel(label);
              })}
              {renderGridValue(stationName?.manual)}
              {renderGridValue(stationName?.auto)}
              {renderGridValue(stationName?.classOne)}
              {renderGridValue(stationName?.classTwo)}
              {renderGridValue(stationName?.fault)}
              {renderGridValue(stationName?.case)}
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <MapContainer center={location} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>{stationName.station}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

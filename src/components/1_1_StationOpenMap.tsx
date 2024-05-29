import "@/f2eStyle/mapStyles.css";
import { StationOpenMapProps } from "@/ts-common/types/mapTypes";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export function StationOpenMap({ location, stationName }: StationOpenMapProps) {
  return (
    <MapContainer center={location} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}>
        <Popup>{stationName}</Popup>
      </Marker>
    </MapContainer>
  );
}

import "@/f2eStyle/mapStyles.css";
import { StationOpenMapProps } from "@/ts-common/types/mapTypes";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41], // 這個大小可以根據你的圖標尺寸調整
  iconAnchor: [12, 41], // 這個位置可以根據你的圖標設計調整
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

export function StationOpenMap({ location, stationName }: StationOpenMapProps) {
  return (
    <MapContainer center={location} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={customIcon}>
        <Popup>{stationName}</Popup>
      </Marker>
    </MapContainer>
  );
}

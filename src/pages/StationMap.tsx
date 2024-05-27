import { Header } from "@/components/Header";
import "@/f2eStyle/mapStyles.css";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function StationMap() {
  const position: LatLngExpression = [24.159142, 120.639648];
  return (
    <>
      <Header />
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>微程式資訊</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

import { MarkerSign } from "@/types/mapTypes";
import L from "leaflet";
import blueMarker from "../../public/markers/blue.png";
import greenMarker from "../../public/markers/green.png";
import purpleMarker from "../../public/markers/purple.png";
import redMarker from "../../public/markers/red.png";
import yellowMarker from "../../public/markers/yellow.png";

export const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

export const markerSign: MarkerSign[] = [
  { sign: redMarker, value: "特急件量" },
  { sign: yellowMarker, value: "類急件量" },
  { sign: greenMarker, value: "常態件量" },
  { sign: blueMarker, value: "一般件量" },
  { sign: purpleMarker, value: "點選中" },
];

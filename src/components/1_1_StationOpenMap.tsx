import { markerSign } from "@/context/markerSignContext";
import { useStations } from "@/context/stationContext";
import "@/f2eStyle/mapStyles.css";
import { SetIdProps } from "@/types/mapTypes";
import L, { Icon, LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import blueMarker from "../../public/markers/blue.png";
import greenMarker from "../../public/markers/green.png";
import purpleMarker from "../../public/markers/purple.png";
import redMarker from "../../public/markers/red.png";
import yellowMarker from "../../public/markers/yellow.png";
import { AutoLocatedMarker } from "./1_1_AutoLocatedMarker";
import { ClickLocatedMarker } from "./1_1_ClickedLocatedMarker";

const getIcon = (color: string): Icon => {
  let iconUrl;
  switch (color) {
    case "green":
      iconUrl = greenMarker;
      break;
    case "yellow":
      iconUrl = yellowMarker;
      break;
    case "red":
      iconUrl = redMarker;
      break;
    case "purple":
      iconUrl = purpleMarker;
      break;
    case "blue":
    default:
      iconUrl = blueMarker;
      break;
  }
  return new L.Icon({
    iconUrl: iconUrl,
    iconSize: [25, 25],
    // iconAnchor: [12, 41],
    popupAnchor: [0, 0],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 30],
  });
};

export function StationOpenMap({ setId }: SetIdProps) {
  const { stations } = useStations();
  const [selectedStationId, setSelectedStationId] = useState<string | null>(
    null
  );
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);

  const handleMarkerClick = (id: string) => {
    setSelectedStationId(id);
    setId(id);
  };

  return (
    <>
      <div className="h-14 bg-white p-3">
        <div className="h-full grid grid-cols-5">
          {markerSign.map((marker, index) => (
            <div className="flex items-center justify-center" key={index}>
              <img
                src={`${marker.sign}`}
                alt={`${marker.value}`}
                width={"25px"}
              />
              &nbsp;&nbsp;{marker.value}
            </div>
          ))}
        </div>
      </div>
      <MapContainer
        center={mapCenter || [23.6978, 120.9605]} // Default to Taiwan's lat/lng if mapCenter is not set
        zoom={8}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((station) => {
          const total =
            (station.manual || 0) +
            (station.auto || 0) +
            (station.classOne || 0) +
            (station.classTwo || 0) +
            (station.fault || 0) +
            (station.case || 0);
          let color = "blue";
          if (total >= 16 && total <= 20) {
            color = "green";
          } else if (total >= 21 && total <= 25) {
            color = "yellow";
          } else if (total >= 26) {
            color = "red";
          }
          if (selectedStationId === station.id) {
            color = "purple";
          }
          const icon = getIcon(color);

          return (
            <Marker
              key={station.id}
              position={station.geoCode}
              icon={icon}
              eventHandlers={{
                click: () => handleMarkerClick(station.id),
              }}
            >
              <Popup>{station.station}</Popup>
            </Marker>
          );
        })}
        <ClickLocatedMarker
          mapCenter={mapCenter ? new LatLng(mapCenter[0], mapCenter[1]) : null}
        />
        <AutoLocatedMarker
          setMapCenter={(latlng) => setMapCenter([latlng.lat, latlng.lng])}
        />
      </MapContainer>
    </>
  );
}

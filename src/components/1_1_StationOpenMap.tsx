import { markerSign } from "@/context/markerSignContext";
import { useStations } from "@/context/stationContext";
import "@/f2eStyle/mapStyles.css";
import L, { Icon, LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import blueMarker from "../../public/markers/blue.png";
import greenMarker from "../../public/markers/green.png";
import purpleMarker from "../../public/markers/purple.png";
import redMarker from "../../public/markers/red.png";
import yellowMarker from "../../public/markers/yellow.png";

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

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

function LocationMarkerClick({
  mapCenter,
}: {
  mapCenter: LatLng | null;
}): JSX.Element | null {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 15);
    },
  });

  const handleButtonClick = () => {
    if (mapCenter) {
      map.flyTo(mapCenter, 14);
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="absolute right-2.5 bottom-5 bg-white text-lg"
        style={{
          zIndex: 1000,
        }}
      >
        回到定位點
      </button>
      {position === null ? null : (
        <Marker position={position} icon={customIcon}>
          <Popup>你的位置</Popup>
        </Marker>
      )}
    </>
  );
}

function LocationMarker({
  setMapCenter,
}: {
  setMapCenter: (latlng: LatLng) => void;
}): JSX.Element | null {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      setMapCenter(e.latlng);
      map.flyTo(e.latlng, 14);
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>你的位置</Popup>
    </Marker>
  );
}

export function StationOpenMap() {
  const { stations } = useStations();
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);

  const handleMarkerClick = (id: string) => {
    setSelectedStation(id);
    return stations.find((entry) => entry.id === id);
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
          if (selectedStation === station.id) {
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
        <LocationMarkerClick
          mapCenter={mapCenter ? new LatLng(mapCenter[0], mapCenter[1]) : null}
        />
        <LocationMarker
          setMapCenter={(latlng) => setMapCenter([latlng.lat, latlng.lng])}
        />
      </MapContainer>
    </>
  );
}

import { customIcon } from "@/context/mapContext";
import { ClickLocatedMarkerProps } from "@/types/mapTypes";
import { LatLng } from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export function ClickLocatedMarker({
  mapCenter,
}: ClickLocatedMarkerProps): JSX.Element | null {
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

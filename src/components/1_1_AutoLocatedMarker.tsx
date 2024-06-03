import { customIcon } from "@/context/mapContext";
import { AutoLocatedMarkerProps } from "@/types/mapTypes";
import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export function AutoLocatedMarker({
  setMapCenter,
}: AutoLocatedMarkerProps): JSX.Element | null {
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

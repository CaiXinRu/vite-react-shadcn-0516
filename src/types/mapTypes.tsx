import { LatLng } from "leaflet";

export interface AutoLocatedMarkerProps {
  setMapCenter: (latlng: LatLng) => void;
}

export interface ClickLocatedMarkerProps {
  mapCenter: LatLng | null;
}

export interface SetIdProps {
  setId: (id: string) => void;
}

export interface IdProps {
  id: string | null;
}

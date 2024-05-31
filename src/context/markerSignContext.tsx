import { MarkerSign } from "@/ts-common/types/markerSignTypes";
import blueMarker from "../../public/markers/blue.png";
import greenMarker from "../../public/markers/green.png";
import purpleMarker from "../../public/markers/purple.png";
import redMarker from "../../public/markers/red.png";
import yellowMarker from "../../public/markers/yellow.png";

export const markerSign: MarkerSign[] = [
  { sign: redMarker, value: "特急件量" },
  { sign: yellowMarker, value: "類急件量" },
  { sign: greenMarker, value: "常態件量" },
  { sign: blueMarker, value: "一般件量" },
  { sign: purpleMarker, value: "點選中" },
];

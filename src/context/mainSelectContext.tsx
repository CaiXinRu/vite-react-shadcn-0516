import { Area, Case, City } from "@/types/mainSelectTypes";

export const cities: City[] = [
  { value: "taipei", label: "臺北" },
  { value: "taichung", label: "臺中" },
  { value: "tainan", label: "臺南" },
  { value: "taidung", label: "臺東" },
];

export const taipei: Area[] = [
  { value: "TPO1", label: "TPO1" },
  { value: "TPO2", label: "TPO2" },
  { value: "TPO3", label: "TPO3" },
  { value: "TPO4", label: "TPO4" },
];

export const taichung: Area[] = [
  { value: "TCO1", label: "TCO1" },
  { value: "TCO2", label: "TCO2" },
  { value: "TCO3", label: "TCO3" },
  { value: "TCO4", label: "TCO4" },
];

export const tainan: Area[] = [
  { value: "TNO1", label: "TNO1" },
  { value: "TNO2", label: "TNO2" },
  { value: "TNO3", label: "TNO3" },
  { value: "TNO4", label: "TNO4" },
];

export const taidung: Area[] = [
  { value: "TDO1", label: "TDO1" },
  { value: "TDO2", label: "TDO2" },
  { value: "TDO3", label: "TDO3" },
  { value: "TDO4", label: "TDO4" },
];

export const cases: Case[] = [
  { value: "Case01", label: "Case01" },
  { value: "Case02", label: "Case02" },
  { value: "Case03", label: "Case03" },
  { value: "Case04", label: "Case04" },
];

export const areaMap: Record<string, Area[]> = {
  taipei,
  taichung,
  tainan,
  taidung,
};

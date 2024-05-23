import { ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface Situation {
  id: string;
  station: string;
  manual: number | null;
  auto: number | null;
  classOne: number | null;
  classTwo: number | null;
  fault: number | null;
  case: number | null;
}

export interface StationsContextType {
  stations: Situation[];
  fetchStations: () => void;
}

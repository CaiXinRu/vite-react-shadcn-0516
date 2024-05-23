import { ColumnDef } from "@tanstack/react-table";

export interface CheckListProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface CheckList {
  id: string;
  form: string;
  bikeNumber: number;
  situation: "啟用" | "停用";
  power: number;
  bikeType: string;
  barNumber: number | null;
}

export interface ListsContextType {
  lists: CheckList[];
  fetchLists: () => void;
}

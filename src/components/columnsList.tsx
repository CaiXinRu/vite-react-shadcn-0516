// columns.tsx (client component) will contain our column definitions.

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export type CheckList = {
  id: string;
  form: string;
  bikeNumber: number;
  situation: "啟用" | "停用";
  power: number;
  bikeType: string;
  barNumber: number | null;
};

export const columnsList: ColumnDef<CheckList>[] = [
  {
    id: "select",
    header: () => {
      return <div>選擇</div>;
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "form",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            表單
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("form")}</div>
    ),
  },
  {
    accessorKey: "bikeNumber",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            車號
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("bikeNumber")}</div>
    ),
  },
  {
    accessorKey: "situation",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            狀態
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("situation")}</div>
    ),
  },
  {
    accessorKey: "power",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            電量
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("power")}</div>
    ),
  },
  {
    accessorKey: "bikeType",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            車種
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("bikeType")}</div>
    ),
  },
  {
    accessorKey: "barNumber",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            柱號
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("barNumber")}</div>
    ),
  },
  {
    accessorKey: "operation",
    header: () => {
      return <div className="fix justify-center">操作</div>;
    },
    cell: () => (
      <Link to="/test">
        <div className="flex justify-center underline">GO</div>
      </Link>
    ),
  },
];

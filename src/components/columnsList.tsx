// columns.tsx (client component) will contain our column definitions.

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckList } from "@/ts-common/types/listTypes";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export const columnsList: ColumnDef<CheckList>[] = [
  {
    id: "select",
    header: () => {
      return <div className="flex justify-center">選取</div>;
    },
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
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
      <div className="flex justify-center ">{row.getValue("form")}</div>
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
      return <div className="flex justify-center">操作</div>;
    },
    cell: ({ row }) => {
      const checkList = row.original;

      return (
        <Link to={`/station-lists/${checkList.id}`}>
          <div className="flex justify-center underline rounded-md bg-slate-200">
            GO
          </div>
        </Link>
      );
    },
  },
];

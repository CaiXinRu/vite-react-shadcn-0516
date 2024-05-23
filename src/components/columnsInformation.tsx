// columns.tsx (client component) will contain our column definitions.

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export type Situation = {
  id: string;
  station: string;
  manual: number | null;
  auto: number | null;
  classOne: number | null;
  classTwo: number | null;
  fault: number | null;
  case: number | null;
};

export const columnsInformation: ColumnDef<Situation>[] = [
  {
    accessorKey: "station",
    header: () => {
      return <div className="pl-4">站點</div>;
    },
    cell: ({ row }) => {
      const situation = row.original;

      return (
        <Link to={`/station-lists/${situation.id}`}>
          <div>{row.getValue("station")}</div>
        </Link>
      );
    },
  },
  {
    accessorKey: "manual",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            手動
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const situation = row.original;

      return (
        <Link to={`/station-lists/${situation.id}`}>
          <div className="flex justify-center rounded-md bg-slate-300">
            {row.getValue("manual")}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "auto",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            自動
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const situation = row.original;

      return (
        <Link to={`/station-lists/${situation.id}`}>
          <div className="flex justify-center rounded-md bg-slate-300">
            {row.getValue("auto")}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "classOne",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            一級
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const situation = row.original;

      return (
        <Link to={`/station-lists/${situation.id}`}>
          <div className="flex justify-center rounded-md bg-slate-300">
            {row.getValue("classOne")}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "classTwo",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            二級
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const situation = row.original;

      return (
        <Link to={`/station-lists/${situation.id}`}>
          <div className="flex justify-center rounded-md bg-slate-300">
            {row.getValue("classTwo")}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "fault",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            故障
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const situation = row.original;

      return (
        <Link to={`/station-lists/${situation.id}`}>
          <div className="flex justify-center rounded-md bg-slate-300">
            {row.getValue("fault")}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "case",
    header: ({ column }) => {
      return (
        <div className="flex justify-center ">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() !== "asc")}
          >
            專案
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const situation = row.original;

      return (
        <Link to={`/station-lists/${situation.id}`}>
          <div className="flex justify-center rounded-md bg-slate-300">
            {row.getValue("case")}
          </div>
        </Link>
      );
    },
  },
];

// columns.tsx (client component) will contain our column definitions.

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

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
    cell: ({ row }) => <div>{row.getValue("station")}</div>,
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
            {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("manual")}</div>
    ),
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
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("auto")}</div>
    ),
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
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("classOne")}</div>
    ),
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
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("classTwo")}</div>
    ),
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
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("fault")}</div>
    ),
  },
  {
    accessorKey: "case",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
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
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("case")}</div>
    ),
  },
  //   {
  //     accessorKey: "amount",
  //     header: () => <div className="text-right">Amount</div>,
  //     cell: ({ row }) => {
  //       const amount = parseFloat(row.getValue("amount"));

  //       // Format the amount as a dollar amount
  //       const formatted = new Intl.NumberFormat("en-US", {
  //         style: "currency",
  //         currency: "USD",
  //       }).format(amount);

  //       return <div className="text-right font-medium">{formatted}</div>;
  //     },
  //   },
];

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

interface City {
  value: string;
  label: string;
}

interface Area {
  value: string;
  label: string;
}

interface Case {
  value: string;
  label: string;
}

const cities: City[] = [
  { value: "taipei", label: "臺北" },
  { value: "taichung", label: "臺中" },
  { value: "tainan", label: "臺南" },
  { value: "taidung", label: "臺東" },
];

const taipei: Area[] = [
  { value: "TPO1", label: "TPO1" },
  { value: "TPO2", label: "TPO2" },
  { value: "TPO3", label: "TPO3" },
  { value: "TPO4", label: "TPO4" },
];

const taichung: Area[] = [
  { value: "TCO1", label: "TCO1" },
  { value: "TCO2", label: "TCO2" },
  { value: "TCO3", label: "TCO3" },
  { value: "TCO4", label: "TCO4" },
];

const tainan: Area[] = [
  { value: "TNO1", label: "TNO1" },
  { value: "TNO2", label: "TNO2" },
  { value: "TNO3", label: "TNO3" },
  { value: "TNO4", label: "TNO4" },
];

const taidung: Area[] = [
  { value: "TDO1", label: "TDO1" },
  { value: "TDO2", label: "TDO2" },
  { value: "TDO3", label: "TDO3" },
  { value: "TDO4", label: "TDO4" },
];

const cases: Case[] = [
  { value: "Case01", label: "Case01" },
  { value: "Case02", label: "Case02" },
  { value: "Case03", label: "Case03" },
  { value: "Case04", label: "Case04" },
];

const areaMap: Record<string, Area[]> = {
  taipei,
  taichung,
  tainan,
  taidung,
};

export function StationInformation<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [city, setCity] = useState<string>("");
  const [areas, setAreas] = useState<Array<{ value: string; label: string }>>(
    []
  );
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  useEffect(() => {
    if (city) {
      setAreas(areaMap[city]);
      setSelectedArea("");
    } else {
      setAreas([]);
      setSelectedArea("");
    }
  }, [city]);

  return (
    <>
      <div className="px-6 py-5 grid grid-rows-2 grid-cols-12 gap-y-4 text-sm">
        <div className="my-auto">
          <ImageIcon />
        </div>
        <div className="col-span-5 flex items-center">
          <p>城市：</p>
          <Select onValueChange={(value) => setCity(value)}>
            <SelectTrigger className="w-[77%]">
              <SelectValue placeholder="選擇城市" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div></div>
        <div className="col-span-5 flex items-center">
          <p>區域：</p>
          <Select
            value={selectedArea}
            onValueChange={(value) => setSelectedArea(value)}
          >
            <SelectTrigger className="w-[77%]">
              <SelectValue placeholder="選擇區域" />
            </SelectTrigger>
            <SelectContent>
              {areas?.map((area) => (
                <SelectItem key={area.value} value={area.value}>
                  {area.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div></div>
        <div className="col-span-5 flex items-center">
          <p>專案：</p>
          <Select>
            <SelectTrigger className="w-[77%]">
              <SelectValue placeholder="選擇專案" />
            </SelectTrigger>
            <SelectContent>
              {cases?.map((c) => (
                <SelectItem key={c.value} value={c.value}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-6 flex items-center">
          <Input
            placeholder="搜尋站點"
            value={
              (table.getColumn("station")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("station")?.setFilterValue(event.target.value)
            }
            className="w-[96%]"
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="px-0">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <Link to="/station-lists">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Link>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
}

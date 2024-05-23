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
import { areaMap, cases, cities } from "@/context/mainSelectContext";
import { DataTableProps } from "@/ts-common/types/mainStationTypes";
import {
  // ColumnDef,
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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

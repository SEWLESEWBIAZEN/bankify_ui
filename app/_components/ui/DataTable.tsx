"use client"
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DataTablePagination } from "./DataTablePagination"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    search?: string[];
    type?: number;
    setTable?: (tab: any) => void;
}
export function DataTable<TData, TValue>({
    columns,
    data,
    setTable,
}: DataTableProps<TData, TValue>) {

    const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [filtering, setFiltering] = React.useState("")

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter: filtering,
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        onGlobalFilterChange: setFiltering,
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        // filterFns: {
        //     dateRange: dateRangeFilter,
        // },
    });

    // Update the parent state with the table instance only after rendering
    // React.useEffect(() => {
    //     if (setTable) {
    //         setTable(table);
    //     }
    // }, [table]);


    return (
        <div className="flex flex-col space-y-4 text-gray-700 dark:text-slate-50 text-base px-2 pb-2 ">
            <div className="flex items-center py-4 w-full ">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm "
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto dark:border-slate-50">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Table className="w-full">
                <TableHeader className="w-full">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="dark:border-slate-50 dark:text-slate-50">
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} colSpan={header.colSpan} className="font-semibold dark:text-slate-200">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="w-full">
                    {table?.getRowModel()?.rows?.length ? (
                        table?.getRowModel()?.rows?.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="w-full">
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <DataTablePagination table={table} />

        </div>
    )
}



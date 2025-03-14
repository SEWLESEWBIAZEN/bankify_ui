import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
  } from "@radix-ui/react-icons"
  import { Table } from "@tanstack/react-table"
  
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { OutlineButton } from "./Button"
import { ColumnViewOptions } from "./ColumnViewOptions"

  
  
  interface DataTablePaginationProps<TData> {
    table: Table<TData>
  }
  
  export function DataTablePagination<TData>({
    table,
  }: DataTablePaginationProps<TData>) {
    return (
      <div className="flex items-center justify-between px-2 dark:text-primary-foreground font-mono">
        <div className="flex-1 text-sm ">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 space-x-6 sm:space-x-8">
          <ColumnViewOptions table={table}/>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={table.getState().pagination.pageSize} />
              </SelectTrigger>
              <SelectContent side="top" className="bg-white font-mono text-primary">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>         
          <div className="flex  w-[100px] items-center justify-center text-sm font-medium ">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex  items-center space-x-2 ">
            <OutlineButton
              className="hidden h-8 w-8 p-0  dark:hover:text-black lg:flex text-center justify-center items-center"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <DoubleArrowLeftIcon className="h-4 w-4 " />
            </OutlineButton>
            <OutlineButton
              className="h-8 w-8 p-0 dark:hover:text-black lg:flex text-center justify-center items-center"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </OutlineButton>
            <OutlineButton
              className="h-8 w-8 p-0 dark:hover:text-black lg:flex text-center justify-center items-center"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </OutlineButton>
            <OutlineButton
              className="hidden h-8 w-8 p-0 dark:hover:text-black lg:flex text-center justify-center items-center"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </OutlineButton>
          </div>
        </div>
      </div>
    )
  }
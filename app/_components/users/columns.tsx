'use client'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { DataTableColumnHeader } from "../ui/DataTableColumnHeader"

export type User = {
    id: number
    firstName: string
    lastName: string
    // status: "pending" | "processing" | "success" | "failed"
    email: string

}

export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
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
        accessorKey: "firstName",
        header: ({ column }) => <DataTableColumnHeader column={column} title="First Name" />,
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("firstName")}</div>
        ),

        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "lastName",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Last Name" />
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("lastName")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Email" />
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },

    {
        accessorKey: "address",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Address" />
            )
        },
        cell: ({ row }) => <div className="sentence text-wrap">{row.getValue("address")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id.toString())}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
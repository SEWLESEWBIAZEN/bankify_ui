'use client'

import { User } from "@/definitions/type-definitions/user";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../reusable/DataTableColumnHeader";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { getInitials } from "@/app/_lib/utils";
import UserTableRowAction from "./UserTableRowAction";

const columns: ColumnDef<User, any>[] = [
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
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {    
      accessorKey: "id",
      header: "",
      cell: () => <span></span>, 
   
    
  },
  {
    accessorKey: "profilePicture",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="" />
    ),
    cell: ({ row }) => {
      const profilePicture = row.getValue("profilePicture");    
      return (
        <Link href={``} className="flex flex-1 justify-start">
          <Avatar>
            <AvatarImage src={`${profilePicture}`} alt="Attorney" />
            <AvatarFallback>
              <div className="relative inline-flex items-center justify-center w-10 h-10 border-2 border-primary  overflow-hidden bg-gray-100 rounded-full bg-primary">
                <span className="font-medium text-primary-foreground">{getInitials(`${row.getValue("firstName")} ${row.getValue("lastName")}`)}</span>
              </div>
            </AvatarFallback>
          </Avatar>
        </Link>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => {
      return (<div>{row.getValue("firstName")}</div>)
    }
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => {
      return (<div>{row.getValue("lastName")}</div>)
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email Address" />
    ),
    cell: ({ row }) => {
      return (<div>{row.getValue("email")}</div>)
    }
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => {
      return (<div>{row.getValue("phoneNumber")}</div>)
    }
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => {
      return (<div className="text-ellipsis">{row.getValue("address")}</div>)
    }
  },
  {
    id:"actions",
    cell:({row})=>{
      return(<UserTableRowAction id={parseInt(row.getValue("id"))}/>)
    }
  }
];

export default columns;

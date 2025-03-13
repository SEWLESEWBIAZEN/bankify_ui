'use client'

import { User } from "@/definitions/type-definitions/user";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

const columns = React.useMemo<ColumnDef<User, any>[]>(
    () => [
      {
        accessorKey: 'firstName',
        cell: info => info.getValue(),
      },
      {
        accessorFn: row => row.LastName,
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => <span>Last Name</span>,
      },
      {
        accessorFn: row => `${row.FirstName} ${row.LastName}`,
        id: 'fullName',
        header: 'Full Name',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        meta: {
          filterVariant: 'range',
        },
      },
      {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
        meta: {
          filterVariant: 'range',
        },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        meta: {
          filterVariant: 'select',
        },
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
        meta: {
          filterVariant: 'range',
        },
      },
    ],
    []
  )

  export default columns;
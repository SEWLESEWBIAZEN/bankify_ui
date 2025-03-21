import UsersPage from "@/app/_components/one-time/users";
import { getAllUsers } from "@/app/_lib/data/users";
import React from "react";

export default async function Page() {
    const users = await getAllUsers();
    return (
        <div>
          <UsersPage users={users} />
        </div>
    );
};
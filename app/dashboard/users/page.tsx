import UserOverViewChart from "@/components/dashboard/charts/user-overview-chart";
import Header from "@/components/dashboard/header/page";
import Sidebar from "@/components/dashboard/sidebar";
import UserTable from "@/components/dashboard/tables/user/user-table";
import { getUsers, verifyUser } from "@/lib/queries";
import React from "react";

const Page = async () => {
    const user = await verifyUser();
    const users = await getUsers();

    return (
        <div className="flex h-screen bg-accent overflow-hidden">
            <Sidebar />
            <div className="flex flex-col w-full overflow-y-auto">
                <Header name={user?.name} avatar={user?.avatarUrl} />
                <div className="w-full h-full p-3">
                    <div className="flex flex-col w-full h-full gap-3">
                        <div className="flex flex-row gap-2">
                            <UserOverViewChart data={users} />
                            <div></div>
                        </div>
                        <div>
                            <UserTable data={users} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

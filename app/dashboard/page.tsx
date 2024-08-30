import Header from "@/components/dashboard/header/page";
import Sidebar from "@/components/dashboard/sidebar";
import { verifyUser } from "@/lib/queries";
import React from "react";

const Page = async () => {
    const user = await verifyUser();
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div className="h-screen">
            <div className="flex h-full w-full">
                <div className="flex-1">
                    <Sidebar />
                </div>
                <div className="flex flex-col w-full">
                    <Header name={user?.name} avatar={user?.avatarUrl} />
                    <div className="bg-accent w-full h-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Page;

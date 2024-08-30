import { ChildrenProps } from "@/lib/types";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: ChildrenProps) => {
    return (
        <ClerkProvider>
            <main className="h-full">{children}</main>
        </ClerkProvider>
    );
};

export default Layout;

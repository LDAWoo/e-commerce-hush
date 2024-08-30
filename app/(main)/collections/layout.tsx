import React from "react";
import { ChildrenProps } from "@/lib/types";
import Header from "@/components/header";
import Navigation from "@/components/site/navigation";

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex flex-col h-screen bg-background">
            <Header className="bg-background !text-accent-foreground">
                <Navigation />
            </Header>
            <div className="mt-[200px] border-t">{children}</div>
        </div>
    );
};

export default Layout;

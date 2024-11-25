import React from "react";
import { ChildrenProps } from "@/lib/types";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import SectionAnnouncement from "@/components/sections/section-announcement";
import Wishlist from "@/components/global/wishlist";
import Footer from "@/components/footer";

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header className="bg-background !text-accent-foreground">
                <Navigation />
            </Header>
            <SectionAnnouncement />
            <div className="ml-auto mr-auto p-[40px_17px] md:p-[75px_40px] w-full max-w-[450px]">{children}</div>
            <Wishlist />
            <Footer />
        </div>
    );
};

export default Layout;

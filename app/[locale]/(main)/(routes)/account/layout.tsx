import dynamic from "next/dynamic";
import React from "react";
import { ChildrenProps } from "@/lib/types";

const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Navigation = dynamic(() => import("@/components/navigation"), { ssr: false });
const SectionAnnouncement = dynamic(() => import("@/components/sections/section-announcement"), { ssr: false });
const WishList = dynamic(() => import("@/components/global/wishlist"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header className="bg-background !text-accent-foreground">
                <Navigation />
            </Header>
            <SectionAnnouncement />
            <div className="ml-auto mr-auto p-[40px_17px] md:p-[75px_40px] w-full max-w-[450px]">{children}</div>
            <WishList />
            <Footer />
        </div>
    );
};

export default Layout;

import dynamic from "next/dynamic";
import React from "react";
import { ChildrenProps } from "@/lib/types";

const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Navigation = dynamic(() => import("@/components/site/navigation"), { ssr: false });
const WishList = dynamic(() => import("@/components/global/wishlist"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header className="bg-background !text-accent-foreground">
                <Navigation />
            </Header>
            <div className="mt-[200px] mb-[40px] border-t ml-auto mr-auto p-[0_17px] md:p-[0_40px] w-full max-w-[var(--page-max-width)]">{children}</div>
            <WishList />
            <Footer />
        </div>
    );
};

export default Layout;

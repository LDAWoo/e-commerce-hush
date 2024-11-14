"use client";
import { SessionProvider } from "next-auth/react";
type Props = {
    children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <SessionProvider>
            <div className="bg-background">{children}</div>
        </SessionProvider>
    );
};

export default Layout;

"use client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { store } from "@/lib/shared/store";
import { ChildrenProps } from "@/lib/types";
import { ModalProvider } from "@/provider/modal-provider";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";

const Layout = ({ children }: ChildrenProps) => {
    return (
        <SessionProvider>
            <Provider store={store}>
                <TooltipProvider>
                    <ModalProvider>{children}</ModalProvider>
                </TooltipProvider>
            </Provider>
        </SessionProvider>
    );
};

export default Layout;

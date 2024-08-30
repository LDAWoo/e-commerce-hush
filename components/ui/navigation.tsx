"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Button } from "./button";
import { ChildrenProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

// Define the context shape
interface NavigationContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
}

// Create the context with default values
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// Use this hook to access the navigation context
const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
};

// NavigationProvider component
const NavigationProvider = ({ children }: ChildrenProps) => {
    const [open, setOpen] = useState(false);

    return <NavigationContext.Provider value={{ open, setOpen }}>{children}</NavigationContext.Provider>;
};

type NavigationItemProps = {
    children: React.ReactNode;
    className?: string;
};

// NavigationItem component
const NavigationItem = ({ children, className }: NavigationItemProps) => <div className={cn("relative max-w-max", className)}>{children}</div>;

type NavigationTriggerProps = {
    className?: string;
    children: ReactNode;
    durations?: number;
};

// NavigationTrigger component with CSS-based progress animation
const NavigationTrigger = ({ children, className, durations = 0.5, ...props }: NavigationTriggerProps) => {
    const { open, setOpen } = useNavigation();

    const handleMouseEnter = () => setOpen(true);
    const handleMouseLeave = () => setOpen(false);

    return (
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-state={open} className={cn("text-[15px] data-[state=false]:bg-transparent data-[state=true]:bg-white data-[state=true]:text-black transition-none rounded-none p-[7.5px_15px] tracking-[.2rem]", className)} {...props}>
            <div className="relative">
                {children}
                <div
                    className="absolute h-[2px] w-full -bottom-1 left-0 bg-black"
                    style={{
                        width: open ? "100%" : "0%",
                        transition: `width ${durations}s ease-in-out`,
                    }}
                />
            </div>
        </button>
    );
};

type NavigationContentProps = {
    children: React.ReactNode;
    className?: string;
    side?: "left" | "right" | "top" | "bottom";
    align?: "left" | "right" | "top" | "bottom";
};

// Define variants for NavigationContent
const NavigationContentVariants = cva("absolute data-[state=true]:block data-[state=false]:hidden data-[state=true]:opacity-1 data-[state=false]:opacity-0 bg-white z-5 shadow-[0_10px_20px_#00000017] min-w-full pt-[10px] pb-[5px]", {
    variants: {
        side: {
            left: "left-0",
            right: "right-0",
            top: "top-0",
            bottom: "bottom-0",
        },
        align: {
            left: "flex-start",
            right: "flex-end",
            top: "flex-start",
            bottom: "flex-end",
        },
    },
    defaultVariants: {
        side: "left",
        align: "bottom",
    },
});

// NavigationContent component
const NavigationContent = ({ children, side, align, className }: NavigationContentProps) => {
    const { open, setOpen } = useNavigation();

    return (
        <div data-state={open} className={cn(NavigationContentVariants({ align, side }), className, open ? "animate-slide-down" : "animate-slide-up")} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            {children}
        </div>
    );
};

export { NavigationProvider, NavigationTrigger, NavigationItem, NavigationContent, useNavigation };

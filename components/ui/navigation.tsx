"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface NavigationContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
    defaultOpen?: boolean; // Add this line
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
};

const NavigationProvider = ({ children, defaultOpen = false }: { children: ReactNode; defaultOpen?: boolean }) => {
    const [open, setOpen] = useState(defaultOpen); // Use defaultOpen here

    return <NavigationContext.Provider value={{ open, setOpen }}>{children}</NavigationContext.Provider>;
};

type NavigationItemProps = {
    children: React.ReactNode;
    className?: string;
};

const NavigationItem = ({ children, className }: NavigationItemProps) => <div className={cn("relative max-w-max", className)}>{children}</div>;

type NavigationTriggerProps = {
    className?: string;
    children: ReactNode;
    durations?: number;
};

const NavigationTrigger = ({ children, className, durations = 0.5, ...props }: NavigationTriggerProps) => {
    const { open, setOpen } = useNavigation();

    const handleMouseEnter = () => setOpen(true);
    const handleMouseLeave = () => setOpen(false);

    return (
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-state={open} className={cn("data-[state=false]:bg-transparent data-[state=true]:bg-transparent transition-none rounded-none p-[7.5px_15px]", className)} {...props}>
            <div className="relative tracking-[.2rem] text-[calc(var(--type-base-size)-1px)] uppercase">
                {children}
                <div
                    className="absolute h-[2px] w-full -bottom-1 left-0 bg-foreground"
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
    defaultOpen?: boolean;
    side?: "left" | "right" | "top" | "bottom";
    align?: "left" | "right" | "top" | "bottom";
};

const NavigationContentVariants = cva("absolute data-[state=true]:block data-[state=false]:hidden data-[state=true]:opacity-1 data-[state=false]:opacity-0 bg-card z-[10] shadow-[0_10px_20px_#00000017] min-w-full pt-[10px] pb-[5px]", {
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

const NavigationContent = ({ children, side, align, defaultOpen = false, className }: NavigationContentProps) => {
    const { open, setOpen } = useNavigation();

    useEffect(() => {
        setOpen(defaultOpen);
    }, [defaultOpen, setOpen]);

    return (
        <div data-state={open} className={cn(NavigationContentVariants({ align, side }), "shadow-container", className, open ? "animate-slide-down" : "animate-slide-up")} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            {children}
        </div>
    );
};

export { NavigationContent, NavigationItem, NavigationProvider, NavigationTrigger, useNavigation };

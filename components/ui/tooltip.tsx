"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentProps = {
    arrowAlign?: "center" | "start" | "end";
} & React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;

const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(({ className, sideOffset = 8, arrowAlign = "center", ...props }, ref) => (
    <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
            "z-50 relative rounded-[8px] bg-tooltip text-tooltip-foreground p-[8px_12px_10px] text-[calc(var(--type-base-size)-2px)] font-normal shadow-md animate-in duration-100 fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

            `data-[side=top]:before:content-[''] data-[side=top]:before:absolute data-[side=top]:before:bg-tooltip data-[side=top]:before:w-[9px] data-[side=top]:before:h-[9px] data-[side=top]:before:rotate-45 data-[side=top]:before:bottom-[-4px] data-[side=top]:before:left-1/2  ${arrowAlign === "center" ? "data-[side=top]:before:-translate-x-1/2" : arrowAlign === "start" ? "data-[side=top]:before:-translate-x-10" : "data-[side=top]:before:-translate-x-[calc(100%_-_37px)]"}`,
            `data-[side=bottom]:before:content-[''] data-[side=bottom]:before:absolute data-[side=bottom]:before:bg-tooltip data-[side=bottom]:before:w-[9px] data-[side=bottom]:before:h-[9px] data-[side=bottom]:before:rotate-45 data-[side=bottom]:before:top-[-4px] data-[side=bottom]:before:left-1/2 ${arrowAlign === "center" ? "data-[side=bottom]:before:-translate-x-1/2" : arrowAlign === "start" ? "data-[side=bottom]:before:-translate-x-10" : "data-[side=bottom]:before:-translate-x-[calc(100%_-_37px)]"}`,
            "data-[side=left]:before:content-[''] data-[side=left]:before:absolute data-[side=left]:before:bg-tooltip data-[side=left]:before:w-[9px] data-[side=left]:before:h-[9px] data-[side=left]:before:rotate-45 data-[side=left]:before:right-[-4px] data-[side=left]:before:top-1/2 data-[side=left]:before:-translate-y-1/2",
            "data-[side=right]:before:content-[''] data-[side=right]:before:absolute data-[side=right]:before:bg-tooltip data-[side=right]:before:w-[9px] data-[side=right]:before:h-[9px] data-[side=right]:before:rotate-45 data-[side=right]:before:left-[-4px] data-[side=right]:before:top-1/2 data-[side=right]:before:-translate-y-1/2",

            className
        )}
        {...props}
    >
        {props.children}
    </TooltipPrimitive.Content>
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

import { cn } from "@/lib/utils";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface IHint {
    content: string | (() => React.ReactElement);
    side?: "left" | "right" | "top" | "bottom";
    align?: "center" | "start" | "end";
    sideOffset?: number;
    className?: string;
    alignOffset?: number;
    children: React.ReactNode;
    isPortal?: boolean;
    disabled?: boolean;
    arrowAlign?: "center" | "start" | "end";
}

// Wrap Hint component with React.forwardRef
const Hint = React.forwardRef<HTMLDivElement, IHint>(({ content, side = "top", align = "center", sideOffset = 6, className = "", alignOffset = 0, isPortal = false, children, disabled = false, arrowAlign }, ref) => {
    const renderContent = typeof content === "function" ? content() : content;

    return (
        <Tooltip disableHoverableContent delayDuration={100}>
            <TooltipTrigger disabled={disabled} asChild>
                {children}
            </TooltipTrigger>
            {isPortal ? (
                <TooltipPortal>
                    <TooltipContent
                        ref={ref} // Forward ref to TooltipContent if needed
                        side={side}
                        className={cn(className)}
                        align={align}
                        sideOffset={sideOffset}
                        alignOffset={alignOffset}
                        arrowAlign={arrowAlign}
                    >
                        {renderContent}
                    </TooltipContent>
                </TooltipPortal>
            ) : (
                <TooltipContent
                    ref={ref} // Forward ref to TooltipContent if needed
                    side={side}
                    className={cn(className)}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alignOffset}
                    arrowAlign={arrowAlign}
                >
                    {renderContent}
                </TooltipContent>
            )}
        </Tooltip>
    );
});

// Display name for debugging purposes
Hint.displayName = "Hint";

export default Hint;

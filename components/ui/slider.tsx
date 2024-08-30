"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const CustomThumb = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Thumb>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>>(({ className, ...props }, ref) => <SliderPrimitive.Thumb ref={ref} className={`block h-[22px] w-[22px] rounded-full bg-primary transition-colors  disabled:pointer-events-none disabled:opacity-50 cursor-col-resize ${className}`} {...props} />);
CustomThumb.displayName = SliderPrimitive.Thumb.displayName;

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
        <SliderPrimitive.Track className="relative h-[2px] w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <CustomThumb />
        <CustomThumb />
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

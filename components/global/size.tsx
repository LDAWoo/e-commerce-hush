import React from "react";
import clsx from "clsx";
import { Size } from "@prisma/client";
import { Button } from "../ui/button";

interface SizeSelectorProps {
    sizes: Size[];
    selectedSizes: Size[];
    onSelect: (sizeId: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSizes, onSelect }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
                <Button variant={"outline"} key={size.id} onClick={() => onSelect(size.id)} className={clsx("rounded-none p-[7px_15px] transition-all duration-300", selectedSizes.some((s) => s.id === size.id) ? "shadow-shadow-border-sm" : "")}>
                    <span className="tracking-[.1em]">{size.name}</span>
                </Button>
            ))}
        </div>
    );
};

export default SizeSelector;

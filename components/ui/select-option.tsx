"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronIcon } from "../icons";
import { Button } from "./button";
import { useClickOutside } from "@/hooks/use-click-outside";

type OptionProps = {
    value: string | number;
    label: React.ReactNode;
};

type SelectOptionProps = {
    className?: string;
    options: OptionProps[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    placeholder?: string;
};

const SelectOption: React.FC<SelectOptionProps> = ({ className, options, value, onChange = () => {}, placeholder = "Select an option" }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [currentOption, setCurrentOption] = React.useState({
        value: value ?? options[0].value,
        label: options?.find((option) => option.value === value)?.label ?? placeholder,
    });

    // Close dropdown on outside click
    useClickOutside(ref, () => setIsOpen(false));

    // Handle option selection
    const handleChangeValue = (selectedValue: string | number) => {
        onChange(selectedValue);
        setCurrentOption({ value: selectedValue, label: options?.find((option) => option.value === selectedValue)?.label ?? placeholder });
        setIsOpen(false);
    };

    // Get label for the current value

    return (
        <div className={cn("relative w-fit h-fit", className)} ref={ref}>
            {/* Input Field */}
            <button type="button" className={cn("w-full text-left text-[calc(var(--type-base-size)-3px)] line-clamp-1 bg-transparent border h-8 md:h-10 rounded-sm p-3 flex items-center justify-between gap-2")} onClick={() => setIsOpen((prev) => !prev)} aria-haspopup="listbox" aria-expanded={isOpen} aria-label="Select dropdown">
                <span>{currentOption.label}</span>
                <ChevronIcon size={18} className="text-muted-foreground" />
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div className={cn("absolute mt-2 p-[4px_0] z-50 w-full bg-card rounded-sm border", "max-h-60 overflow-y-auto", className)} role="listbox" aria-labelledby="dropdown-options">
                    {options?.length > 0 ? (
                        options.map((option) => (
                            <Button key={option.value} variant={"secondary"} className={cn("bg-transparent text-[calc(var(--type-base-size)-4px)] w-full font-normal justify-start rounded-none p-[8px_16px] h-full", { "text-secondary-foreground bg-secondary-hover": currentOption.value === option.value })} role="option" aria-selected={currentOption.value === option.value} onClick={() => handleChangeValue(option.value)}>
                                {option.label}
                            </Button>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-foreground text-[calc(var(--type-base-size)-4px)] text-center">No options available</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default React.memo(SelectOption);

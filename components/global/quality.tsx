"use client";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";

type QualityProps = {
    value?: number;
    onChange?: (quality: number) => void;
};

const Quality = ({ value = 1, onChange = () => {} }: QualityProps) => {
    const [quality, setQuality] = React.useState(value);

    const updateQuality = (newQuality: number) => {
        if (newQuality >= 0) {
            setQuality(newQuality);
            onChange(newQuality);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const parsedValue = parseInt(event.target.value, 10);
        if (!isNaN(parsedValue)) {
            updateQuality(parsedValue);
        }
    };

    React.useEffect(() => {
        setQuality(value);
    }, [value]);

    return (
        <div className="relative max-w-[100px] min-w-[100px] h-[34px]">
            <input type="text" value={quality} onChange={handleInputChange} min={0} pattern="[0-9]" className="p-[5px_34px] text-center h-full text-foreground text-[calc(var(--type-base-size))] w-full m-0 bg-transparent border border-input" />

            <Button
                disabled={quality === 0}
                onClick={() => {
                    setQuality(quality - 1);
                }}
                className="h-full p-[0_10px] absolute top-0 left-0 rounded-none hover:bg-primary hover:text-primary-foreground"
                variant={"ghost"}
            >
                <MinusIcon size={14} />
            </Button>

            <Button
                onClick={() => {
                    setQuality(quality + 1);
                }}
                className="h-full p-[0_10px] absolute top-0 right-0 rounded-none hover:bg-primary hover:text-primary-foreground"
                variant={"ghost"}
            >
                <PlusIcon size={14} />
            </Button>
        </div>
    );
};

export default React.memo(Quality);

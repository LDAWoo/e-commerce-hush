import { Color } from "@prisma/client";
import clsx from "clsx";

interface ColorSelectorProps {
    colors: Color[];
    selectedColors: Color[];
    onSelect: (colorId: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColors, onSelect }) => {
    return (
        <>
            {colors.map((color) => (
                <div key={color.hexCode} className="w-[22px] h-[22px] m-[5px_8px_4px_4px] inline-block">
                    <div className="relative w-full h-full inline-block">
                        <input type="checkbox" value={color.id} checked={selectedColors.some((c) => c.id === color.id)} className="hidden" onChange={() => onSelect(color.id)} />
                        <span
                            onClick={() => onSelect(color.id)}
                            className={clsx("cursor-pointer relative inline-block w-[22px] h-[22px] rounded-full before:absolute before:border before:w-[26px] before:h-[26px] before:rounded-full before:-left-[2px] before:-top-[2px]", selectedColors.some((c) => c.id === color.id) ? "before:border-[#ffb700]" : "before:border-accent-input")}
                            style={{
                                backgroundColor: color.hexCode,
                            }}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default ColorSelector;

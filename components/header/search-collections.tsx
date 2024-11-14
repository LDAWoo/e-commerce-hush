import React from "react";
import { PiWarningCircleBold } from "react-icons/pi";
const SearchCollections = () => {
    return (
        <div className="mb-7">
            <div className="border-b border-foreground tracking-normal text-[calc(var(--type-base-size)_-_4px)] leading-[12px] uppercase m-[0_8px] mb-1 pb-[7px]">Collections</div>
            <ul className="text-[calc(var(--type-base-size)_-_4px)]">
                <li className="hover:bg-accent hover:cursor-pointer h-[36px] p-2 flex items-center whitespace-pre">
                    <PiWarningCircleBold size={22} className="mr-[5px]" />
                    Brands
                </li>
                <li className="hover:bg-accent hover:cursor-pointer h-[36px] p-2 flex items-center whitespace-pre">
                    <PiWarningCircleBold size={22} className="mr-[5px]" />
                    Matching Sets - Kids LookBook FW23
                </li>
            </ul>
        </div>
    );
};

export default React.memo(SearchCollections);

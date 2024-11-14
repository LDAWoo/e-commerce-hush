import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchPopular = () => {
    return (
        <div className="mb-7">
            <div className="border-b border-foreground tracking-normal text-[calc(var(--type-base-size)_-_4px)] leading-[12px] uppercase m-[0_8px] mb-1 pb-[7px]">Popular suggestions</div>
            <ul className="text-[calc(var(--type-base-size)_-_4px)]">
                <li className="hover:bg-accent hover:cursor-pointer h-[36px] p-2 flex items-center whitespace-pre">
                    <IoSearchSharp size={22} className="mr-[5px]" />
                    <b>fragile baby</b>
                </li>
                <li className="hover:bg-accent hover:cursor-pointer h-[36px] p-2 flex items-center whitespace-pre">
                    <IoSearchSharp size={22} className="mr-[5px]" />
                    fragile baby sale
                    <b> ninja</b>
                </li>
                <li className="hover:bg-accent hover:cursor-pointer h-[36px] p-2 flex items-center whitespace-pre">
                    <IoSearchSharp size={22} className="mr-[5px]" />
                    fragile baby sale
                    <b> ninja 2024</b>
                </li>
                <li className="hover:bg-accent hover:cursor-pointer h-[36px] p-2 flex items-center whitespace-pre">
                    <IoSearchSharp size={22} className="mr-[5px]" />
                    fragile baby
                    <b> girl</b>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(SearchPopular);

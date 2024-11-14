import React from "react";

const SearchCategories = () => {
    return (
        <div className="mb-7">
            <div className="border-b border-foreground tracking-normal text-[calc(var(--type-base-size)_-_4px)] leading-[12px] uppercase m-[0_8px] mb-1 pb-[7px]">Categories</div>
            <ul className="text-[calc(var(--type-base-size)_-_4px)]">
                {/* <li className="hover:bg-accent hover:cursor-pointer h-[36px] p-2 flex items-center whitespace-pre">Fragile</li> */}
                <li className="m-[18px_9px_9px] mt-3">No categories were found</li>
            </ul>
        </div>
    );
};

export default React.memo(SearchCategories);

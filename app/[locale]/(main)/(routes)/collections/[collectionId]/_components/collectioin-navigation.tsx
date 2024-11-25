import React from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import { IoIosList } from "react-icons/io";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import SelectOption from "@/components/ui/select-option";
import { Input } from "@/components/ui/input";
import { filterCollections } from "@/lib/constants";
import { Toggle } from "@/components/ui/toggle";
import { LuListFilter } from "react-icons/lu";

type CollectionNavigationProps = {
    layout: string;
    onLayoutChange: (value: string) => void;
    filter: string;
    onFilter: (value: string) => void;
};

const CollectionNavigation = ({ filter, onFilter = () => {}, layout, onLayoutChange = () => {} }: CollectionNavigationProps) => {
    return (
        <div className="p-0 w-full flex gap-4">
            <ToggleGroup type="single" defaultValue={"filter"} value={filter} onValueChange={onFilter}>
                <ToggleGroupItem value={"filter"} className="bg-accent hover:text-accent-foreground rounded-sm w-8 h-8 md:w-10 md:h-10 p-0 border-none">
                    <LuListFilter size={20} />
                </ToggleGroupItem>
            </ToggleGroup>

            <div className="flex flex-row gap-4 w-full">
                <ToggleGroup type="single" defaultValue="grid-view" value={layout} onValueChange={onLayoutChange}>
                    <div className="flex flex-row bg-secondary rounded-sm overflow-hidden">
                        <ToggleGroupItem value="grid-view" aria-label="layout grid" variant={"outline"} className="rounded-none w-8 h-8 md:w-10 md:h-10 p-0 border-none">
                            <CiGrid41 size={20} />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="grid-compact" variant={"outline"} className="rounded-none w-8 h-8 md:w-10 md:h-10 p-0 border-none">
                            <BsGrid3X3Gap size={18} />
                        </ToggleGroupItem>

                        <ToggleGroupItem value="list" aria-label="layout list" variant={"outline"} className="rounded-none w-8 h-8 md:w-10 md:h-10 p-0 border-none">
                            <IoIosList size={20} />
                        </ToggleGroupItem>
                    </div>
                </ToggleGroup>

                <div className="relative w-full">
                    <Input type="text" placeholder="Search items" className="focus-visible:outline-0 border-border h-8 md:h-10" />
                </div>

                <SelectOption className="w-[172px] min-w-[172px]" value={"date-new-to-old"} options={filterCollections} />
            </div>
        </div>
    );
};

export default CollectionNavigation;

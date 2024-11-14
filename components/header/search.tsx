import { useClickOutside } from "@/hooks/use-click-outside";
import { Link } from "@/i18n/routing";
import { X } from "lucide-react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SearchCategories from "./search-categories";
import SearchCollections from "./search-collections";
import SearchPopular from "./search-popular";
import SearchProducts from "./search-products";

type SearchProps = {
    open?: boolean;
    onClose?: () => void;
};

const Search = ({ open, onClose = () => {} }: SearchProps) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const searchRef = React.useRef<HTMLInputElement>(null);
    useClickOutside(ref, onClose);

    const onSubmit = () => {};

    React.useEffect(() => {
        searchRef.current && open && searchRef.current.focus();
    }, [searchRef, open]);

    return (
        <div className="relative w-full" ref={ref}>
            <form onSubmit={onSubmit} className="flex items-center w-full relative z-[4]">
                <div className="relative space-y-0 w-full">
                    <Input ref={searchRef} autoComplete="off" placeholder="Search" className="rounded-[2px] p-[8px_16px] text-[18px]" />
                    <Button type="submit" className="absolute p-0 right-2 top-1/2 -translate-y-1/2 hover:bg-transparent bg-transparent" variant={"ghost"}>
                        <CiSearch size={28} />
                    </Button>
                </div>

                <Button type="button" onClick={onClose} className="h-auto hover:bg-transparent bg-transparent" variant={"ghost"}>
                    <X size={24} />
                </Button>
            </form>

            <div className="absolute top-full mt-4 left-0 right-0 p-4 bg-background min-h-[200px] max-h-[637.375px] z-[5] overflow-y-auto">
                <div className="flex flex-col md:flex-row justify-center md:justify-between">
                    <div className="w-full md:w-[37%] inline-block align-top">
                        <SearchPopular />
                        <SearchCategories />
                        <SearchCollections />
                        <Link href={`/products/`} className="p-[10px_6px] ">
                            <Button className="p-0 w-full mb-[9px] rounded-none uppercase text-[calc(var(--type-base-size)_-_4px)]">
                                View All 91 Items
                                <FiArrowRight size={22} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                    <div className="w-full md:w-[61%] float-none inline-block align-top">
                        <SearchProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Search);

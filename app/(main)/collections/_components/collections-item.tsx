import { CollectionsType } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CollectionsItemProps = {
    item: CollectionsType;
};

const CollectionsItem = ({ item }: CollectionsItemProps) => {
    return (
        <div className="relative aspect-[1/1.3] overflow-hidden group">
            <Link href={item.name}>
                <Image src={"https://hush.shop/cdn/shop/files/WB4CP7067D_c7466926-15ea-419e-801d-44a863028c1d_720x.jpg?v=1723146031"} alt={item.name} fill className="transition-all duration-1000 ease-in-out group-hover:scale-[1.04] animate-fade-in w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out"></div>
                <div className="absolute top-[10px] left-[50%] -translate-x-[50%]">
                    <div className="p-[8px_15px] bg-background">
                        <span className="tracking-[.3rem] text-xs line-clamp-1 whitespace-nowrap uppercase">{item.name}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CollectionsItem;

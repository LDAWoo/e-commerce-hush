import { ProductType } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
    collectionId?: string;
    item: ProductType;
};

const CollectionItem = ({ collectionId, item }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative aspect-[1/0.7] animate-fade-in" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Link href={`/collections/${collectionId}/products/${item.name}`} className="">
                <div className="relative w-full h-full">
                    <Image src={item.images[0]} fill alt={item.name} className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`} />
                    <Image src={item.images[1]} fill alt={item.name} className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`} />
                </div>
                <div className="flex flex-col items-center mt-10 pb-4">
                    <span aria-label="name" className="text-[13px] line-clamp-2 mb-[5px] leading-[18px] overflow-hidden text-ellipsis tracking-[.2em]">
                        {item.name}
                    </span>
                    <span aria-label="sku" className="text-[11px] line-clamp-1 mb-[5px] leading-[13px] overflow-hidden tracking-[.025em] text-muted-foreground">
                        SKU: WB1CY1573B
                    </span>
                    <span aria-label="brand" className="text-[11px] line-clamp-1 mb-[5px] leading-[13px] overflow-hidden tracking-[.025em] text-muted-foreground">
                        Brand: Feek a boo
                    </span>
                    <div>
                        <span className="text-[14px] tracking-[.025em]">$ {item.price}</span>
                        <span className="ml-[6px] text-[11px] tracking-[.025em] line-through text-muted-foreground">$ {item.price * 2}</span>
                    </div>
                    <div className="m-[10px_7px] text-xs">
                        <span className="mr-[7px]">★★★★★</span>
                        <span className="text-[10px] leading-[10px] text-muted-foreground tracking-[.025em]">1 review(s)</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CollectionItem;

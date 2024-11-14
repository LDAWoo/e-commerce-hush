import { Link } from "@/i18n/routing";
import { CollectionsType } from "@/lib/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

type CollectionsItemProps = {
    item: CollectionsType;
};

const CollectionsItem = ({ item }: CollectionsItemProps) => {
    const params = useParams<{ locale: string }>();
    const { locale } = params as { locale: string };
    return (
        <div className="relative aspect-[1/1] overflow-hidden group">
            <Link href={`/collections/${item.name}`}>
                <Image src={"https://hush.shop/cdn/shop/files/WB4CP7067D_c7466926-15ea-419e-801d-44a863028c1d_720x.jpg?v=1723146031"} alt={item.name} fill className="transition-all duration-1000 ease-in-out group-hover:scale-[1.04] animate-fade-in w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="p-[8px_15px] bg-background">
                        <span className="tracking-[.3rem] text-[16px] line-clamp-1 whitespace-nowrap uppercase">{item.name}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CollectionsItem;

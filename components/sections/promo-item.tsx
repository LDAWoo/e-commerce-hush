import { ProductType } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

type PromoItemProps = {
    item: ProductType;
};

const PromoItem = ({ item }: PromoItemProps) => {
    return (
        <div className="animate-fade-in pt-[15px] pl-[15px] min-h-[480px] lg:min-h-[680px] xl:min-h-[800px] basis-[100%] md:basis-[33.33%] flex-[0_1_100%] flex flex-stretch">
            <Link href={`/collections/${item.name}`} className="relative overflow-hidden flex items-center justify-center flex-[1_1_100%] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-foreground/[.08] before:z-[1]">
                <Image src={`${item.images[0]}`} alt={item.name} fill className="object-cover" />
                <div className="relative z-[2] flex-[0_1_auto] p-[30px] min-w-[200px] text-background">
                    <h2>{item.name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default memo(PromoItem);

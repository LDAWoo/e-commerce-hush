"use client";
import { ProductType } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";

type NewArrivalItemProps = {
    collectionId?: string;
    item: ProductType;
};

const NewArrivalItem = ({ collectionId, item }: NewArrivalItemProps) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <div className="mb-0 md:mb-[30px] pl-[17px] md:pl-0 ml-0 md:ml-[22px] flex flex-[0_0_39vw] md:flex-auto w-[39vw] md:w-[calc(20%_-_22px)] h-full">
            <div className="relative animate-fade-in h-full w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="absolute top-2 right-2 z-[1]">
                    <button type="button" className="text-[var(--gw-wishlist-heart-background)]">
                        <CiHeart size={24} />
                    </button>
                </div>
                <Link href={`/collections/${collectionId}/products/${item.name}`}>
                    <div className="relative w-full aspect-[1/1.5]">
                        <Image src={item.images[0]} fill alt={item.name} className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`} />
                        <Image src={item.images[1]} fill alt={item.name} className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`} />
                    </div>
                    <div className="pt-[10px] pb-[6px] text-center">
                        <div className="text-[16px] uppercase tracking-[.2rem]">{item.name}</div>
                        <div className="text-[.8em] uppercase tracking-[.3rem] opacity-65 mt-[5px]">Vendor</div>
                        <div className="text-[#1c1d1d] text-[15px] leading-[1.3] mt-[5px]">{item.price}₫</div>
                    </div>
                </Link>
            </div>
            <div></div>
        </div>
    );
};

export default NewArrivalItem;

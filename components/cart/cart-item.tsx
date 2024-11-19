import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";
import Quality from "../global/quality";

const CartItem = () => {
    return (
        <div className="pt-[10px] pb-[20px] mb-[20px] flex animate-slide-down">
            <div className="flex mr-[22px] flex-[0_0_100px]">
                <Link href={``} className="relative h-[100px] w-full">
                    <Image src={`https://hush.shop/cdn/shop/files/WB4CY2460-Black.png?v=1723134538&width=180`} fill alt="product" className="object-cover" />
                </Link>
            </div>
            <div className="flex flex-[1_1_auto] flex-wrap">
                <div className="flex-[1_1_100%] text-[calc(var(--type-base-size)*.85px)] leading-[22px] text-foreground">
                    <Link href={``} className="mb-2 text-[calc(var(--type-base-size)+1px)]">
                        Double Breasted Knit Cardigan
                    </Link>
                    <div className="mb-2">
                        <div className="h-[22px]">
                            <span className="font-bold">Color: </span>
                            Black
                        </div>
                        <div className="h-[22px]">
                            <span className="font-bold">Size: </span>7
                        </div>
                    </div>
                </div>
                <div className="flex flex-[1_1_100%] leading-[1] justify-between items-center">
                    <div className="max-w-[80px] min-w-[60px]">
                        <Quality />
                    </div>

                    <div>
                        <span>$57.95</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

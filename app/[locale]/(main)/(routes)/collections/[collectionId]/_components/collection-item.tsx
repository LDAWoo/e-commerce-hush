import { HeartFillIcon, HeartIcon, QuickViewIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Hint from "@/components/ui/hint";
import { Link } from "@/i18n/routing";
import { ProductType } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
    collectionId?: string;
    item: ProductType;
    layout?: string;
};

const CollectionItem = ({ collectionId, item, layout }: Props) => {
    return (
        <div className="relative w-full animate-fade-in border rounded-sm bg-card group">
            <Link
                href={`/collections/${collectionId}/products/${item.name}`}
                className={cn("flex flex-col w-full", {
                    "flex-row": layout === "list",
                })}
            >
                <div
                    className={cn("relative aspect-square rounded-tl-sm rounded-tr-sm overflow-hidden", {
                        "aspect-auto w-[200px] h-[200px] rounded-bl-sm rounded-tr-none": layout === "list",
                    })}
                >
                    <Image src={item.images[0]} fill alt={item.name} className={`group-hover:opacity-0 opacity-100 w-full h-full object-cover transition-opacity duration-700 ease-in-out`} />
                    <Image src={item.images[1]} fill alt={item.name} className={`group-hover:opacity-100 opacity-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out`} />
                </div>
                <div className="relative flex flex-col gap-[.5em] mt-4 pb-3 pl-3 pr-3 flex-1">
                    <span aria-label="name" className="text-[calc(var(--type-base-size)-2px)] font-bold tracking-[.05em] line-clamp-1 leading-[18px] overflow-hidden text-ellipsis">
                        {item.name}
                    </span>
                    <div className="flex flex-wrap gap-2">
                        <span aria-label="sku" className="text-[calc(var(--type-base-size)-6px)] line-clamp-1 leading-[13px] overflow-hidden px-2 py-1 rounded bg-muted text-muted-foreground">
                            SKU: WB1CY1573B
                        </span>
                        <span aria-label="brand" className="text-[calc(var(--type-base-size)-6px)] line-clamp-1 leading-[13px] overflow-hidden px-2 py-1 rounded bg-muted text-muted-foreground">
                            Brand: Feek a boo
                        </span>
                    </div>

                    <div className="leading-[18px]">
                        <span className="mr-[7px] text-[calc(var(--type-base-size)-3px)] text-yellow-500">★★★★★</span>
                        <span className="text-[calc(var(--type-base-size)-3px)] text-card-foreground">1 review</span>
                    </div>

                    <span
                        className={cn("text-[calc(var(--type-base-size)-2px)]", {
                            "ml-auto": layout === "list",
                        })}
                    >
                        {item.price * 2} $
                    </span>
                    <span
                        className={cn("text-[calc(var(--type-base-size)-2px)] text-muted-foreground", {
                            "ml-auto": layout === "list",
                        })}
                    >
                        Last {item.price} $
                    </span>
                </div>
            </Link>

            <div className="absolute top-2 right-2">
                <Hint content={"Save"}>
                    <Button className="rounded-full p-0 w-[32px] h-[32px] bg-transparent hover:bg-transparent text-[var(--gw-wishlist-heart-foreground)] shadow-md" variant={"secondary"}>
                        <HeartFillIcon size={22} />
                    </Button>
                </Hint>
            </div>

            <div
                className={cn("absolute opacity-0 group-hover:opacity-100 rounded-bl-sm overflow-hidden transition-opacity duration-700 left-0 right-0 bottom-0", {
                    "left-[200px] rounded-none": layout === "list",
                })}
            >
                <Button className="rounded-none w-[calc(100%_-_42px)] h-[42px]" variant={"secondary"}>
                    Add To Cart
                </Button>
            </div>

            <div className="absolute right-0 bottom-0">
                <Button className="rounded-none duration-700 rounded-br-sm w-[42px] h-[42px] p-0 bg-transparent group-hover:!text-foreground group-hover:bg-accent text-muted-foreground" variant={"secondary"}>
                    <QuickViewIcon size={22} />
                </Button>
            </div>
        </div>
    );
};

export default CollectionItem;

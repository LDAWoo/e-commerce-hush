"use client";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { HeartFillIcon, LoadingIcon, ShareIcon } from "../icons";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import WishListItem from "./wishlist-item";
const WishList = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="fixed top-1/2 translate-y-1/2 right-0 rotate-90 origin-top-right z-50 ">
                    <div className="flex rotate-180">
                        <Button variant={"ghost"} className="rounded-none rounded-tl-[22px] rounded-tr-[22px] justify-around p-[6px] min-[480px]:p-[0_1.5em_0_.5em] gap-[5px] bg-background hover:bg-background shadow-[0_3px_14px_rgba(218,218,218,1)]">
                            <div className="flex rotate-90 justify-center items-center w-[32px] h-[32px] rounded-full bg-[var(--gw-wishlist-heart-background)] text-white">
                                <HeartFillIcon size={16} />
                            </div>
                            <span className="font-bold uppercase text-foreground text-[.9em] hidden min-[480px]:block">Wishlist</span>
                        </Button>
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent
                className="w-[360px] p-0 flex-col flex"
                options={{
                    classClosedContent: "",
                    classClosed: "w-6 h-6",
                }}
            >
                <div className="flex flex-col p-[1.25em] gap-[1.5em]">
                    <div className="flex items-center mb-[.25em] mt-[14px]">
                        <div className="text-[1.25em] mr-[0.5em] leading-[1em]">
                            <Link href={`/pages/wishlist`} className="flex items-center font-semibold mb-[10px] text-[27px] font-twentieth">
                                My Wishlists
                                <ShareIcon size={20} className="ml-1 mb-1" />
                            </Link>
                        </div>
                    </div>

                    <button type="button" disabled={isLoading} className="bg-transparent text-foreground shadow-[0_0_0_1px_#1d2939] text-[14px] leading-[1em] p-[.75em_1.125em] rounded-full flex gap-1 items-center justify-center relative overflow-hidden cursor-pointer font-medium w-full">
                        <div
                            className={cn("hidden w-full h-full bg-[rgba(157,157,157,.7)] absolute left-0 right-0", {
                                flex: isLoading,
                            })}
                        >
                            <div className="stroke-[var(--gw-loading-stroke-color)] w-full">
                                <LoadingIcon size={18} />
                            </div>
                        </div>
                        <Plus size={14} />
                        Add a new list
                    </button>
                </div>

                <div className="h-[1px] flex-grow">
                    <div className="required: h-full overflow-y-auto overflow-x-hidden no-scrollbar">
                        <WishListItem />
                        <WishListItem />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default WishList;

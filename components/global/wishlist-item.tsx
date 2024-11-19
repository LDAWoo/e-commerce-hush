"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

import { BinIcon, HeartIcon, LoadingIcon, PenIcon } from "../icons";

type WishListItemProps = {
    name?: string;
    onDelete: () => void;
    onEdit: () => void;
    onToggleDelete: () => void;
    onToggleEdit: () => void;
    isCollapsible: boolean;
    isDeleted: boolean;
    isEdited: boolean;
    isLoading: boolean;
};

const WishListItem = ({ isLoading = true }) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [isCollapsible, setIsCollapsible] = React.useState(false);
    const [isDeleted, setIsDeleted] = React.useState(false);
    const [isEdited, setIsEdited] = React.useState(false);
    const [name, setName] = React.useState("New");

    React.useEffect(() => {
        if (inputRef.current && isEdited) {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(0, name.length);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputRef, isEdited]);

    return (
        <div className="pl-[.65em] pr-[.65em]">
            <div className="flex gap-[5px] justify-between w-full p-[.5em_0] items-center">
                <div className="ml-auto mr-auto flex gap-1 items-center">
                    <button onClick={() => setIsCollapsible(!isCollapsible)} type="button" className="w-[22px] h-[22px] flex bg-transparent rounded-[3px] items-center justify-center hover:bg-accent">
                        <IoIosArrowDown
                            size={14}
                            className={cn("rotate-0 duration-150", {
                                "rotate-180": isCollapsible,
                            })}
                        />
                    </button>
                    {!isEdited && (
                        <button onClick={() => setIsCollapsible(!isCollapsible)} type="button" className="text-[14px] gap-1 flex font-bold items-center">
                            <span className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">New</span>
                        </button>
                    )}

                    {isEdited && (
                        <form>
                            <input ref={inputRef} autoComplete="off" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-[150px] font-bold text-muted-foreground/80 text-[18px] outline-none border-none" />
                        </form>
                    )}
                    {isEdited && (
                        <button onClick={() => setIsEdited(false)} type="button" className="w-[22px] h-[22px] flex bg-transparent rounded-[3px] items-center justify-center hover:bg-accent">
                            <GiCheckMark size={16} />
                        </button>
                    )}

                    {!isEdited && (
                        <button onClick={() => setIsEdited(true)} type="button" className="w-[22px] h-[22px] flex bg-transparent rounded-[3px] items-center justify-center hover:bg-accent">
                            <PenIcon size={16} />
                        </button>
                    )}
                </div>
                <div
                    className={cn("h-[1px] w-full bg-[#e6e8ec] dark:bg-foreground/30", {
                        "bg-[var(--gw-wishlist-heart-foreground)] dark:bg-[var(--gw-wishlist-heart-foreground)]": isDeleted,
                    })}
                />
                <button onClick={() => setIsDeleted(!isDeleted)} type="button" className="min-w-[22px] w-[22px] h-[22px] flex bg-transparent rounded-[3px] items-center justify-center hover:bg-accent text-[var(--gw-wishlist-heart-foreground)]">
                    <BinIcon size={16} />
                </button>
            </div>
            <div className="relative">
                <ul
                    className={cn("hidden", {
                        block: isCollapsible,
                    })}
                >
                    <div className="flex items-center flex-col p-[30px]">
                        <div className="mb-2 text-[var(--gw-wishlist-heart-background)]">
                            <HeartIcon size={60} />
                        </div>
                        <div className="text-[12px] leading-[16px] text-[#979faf] dark:text-muted-foreground text-center">Nothing added to wishlist.</div>
                        <Link href={`/collections/all`} className="text-[18px] underline leading-[24px] text-[var(--gw-wishlist-heart-background)]">
                            Browse products
                        </Link>
                    </div>
                </ul>
                <div
                    className={cn("absolute top-0 left-0 w-full z-10 duration-300 p-[16px_0] opacity-0 invisible translate-y-10 shadow-[0_0_10px_10px_#fff] dark:shadow-[0_0_10px_10px_#000] bg-background", {
                        "opacity-100 visible translate-y-0": isDeleted,
                    })}
                >
                    <div className="mb-4 text-[14px] font-bold text-center">Delete this list?</div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button type="button" disabled={isLoading} className="bg-[var(--gw-wishlist-heart-foreground)] relative text-white rounded-full text-[12px] p-[.625em_1em] flex items-center justify-center overflow-auto font-medium cursor-pointer gap-[.5em]">
                            <div
                                className={cn("hidden w-full h-full bg-[rgba(157,157,157,.7)] absolute left-0 right-0", {
                                    flex: isLoading,
                                })}
                            >
                                <div className="stroke-[var(--gw-loading-stroke-color)] w-full">
                                    <LoadingIcon size={18} />
                                </div>
                            </div>
                            Yes, delete it
                            <BinIcon size={16} />
                        </button>

                        <button type="button" disabled={isLoading} onClick={() => setIsDeleted(false)} className="border-2 border-input p-[.625em_1em] relative rounded-full text-[12px] cursor-pointer font-medium flex items-center justify-center leading-[1em] overflow-hidden">
                            <div
                                className={cn("hidden w-full h-full bg-[rgba(157,157,157,.7)] absolute left-0 right-0", {
                                    flex: isLoading,
                                })}
                            >
                                <div className="stroke-[var(--gw-loading-stroke-color)] w-full">
                                    <LoadingIcon size={18} />
                                </div>
                            </div>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(WishListItem);

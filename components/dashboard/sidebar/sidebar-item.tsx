"use client";
import { Button } from "@/components/ui/button";
import { DashBoardSideBarProps, icons } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SidebarItemProps = {
    isOpen: boolean;
} & DashBoardSideBarProps;

const SidebarItem = ({ link, icon, name, isOpen }: SidebarItemProps) => {
    const pathname = usePathname();

    const results = icons.find((i) => i.value === icon);
    const val = results ? <results.path size={18} /> : null;

    return (
        <Link href={`${link}`} className="w-full">
            <Button
                className={clsx("w-full text-muted-foreground p-[12px_20px] hover:text-primary-foreground justify-start rounded-none bg-transparent hover:bg-primary/90", {
                    "bg-primary/90 text-primary-foreground": pathname === link,
                    "p-4 justify-center": !isOpen,
                })}
            >
                <div className="flex flex-row gap-4 items-center">
                    {val}
                    {isOpen && name}
                </div>
            </Button>
        </Link>
    );
};

export default SidebarItem;

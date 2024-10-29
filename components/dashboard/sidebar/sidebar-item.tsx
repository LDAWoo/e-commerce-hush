"use client";
import { Button } from "@/components/ui/button";
import { DashBoardSideBarProps, icons } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type SidebarItemProps = {
    isOpen: boolean;
} & DashBoardSideBarProps;

const SidebarItem = ({ link, icon, name, isOpen, subItems }: SidebarItemProps) => {
    const pathname = usePathname();

    const IconComponent = icons.find((i) => i.value === icon)?.path;

    if (subItems) {
        return (
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="my-shop" className="border-none">
                    <AccordionTrigger className="py-2 hover:no-underline " arrow>
                        <Button
                            variant="ghost"
                            className={clsx("w-full justify-start hover:bg-transparent", {
                                "p-2": !isOpen,
                            })}
                        >
                            {IconComponent && <IconComponent size={18} className="mr-2" />}
                            {isOpen && name}
                        </Button>
                    </AccordionTrigger>
                    <AccordionContent className="ml-[35px]">
                        {subItems.map((subItem) => (
                            <Link key={subItem.link} href={subItem.link}>
                                <Button
                                    variant="ghost"
                                    className={clsx("w-full justify-start pl-8", {
                                        "bg-primary/10": pathname === subItem.link,
                                    })}
                                >
                                    {subItem.name}
                                </Button>
                            </Link>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        );
    }

    return (
        <Link href={link}>
            <Button
                variant="ghost"
                className={clsx("w-full justify-start", {
                    "bg-primary/10": pathname === link,
                    "p-2": !isOpen,
                })}
            >
                {IconComponent && <IconComponent size={18} className="mr-2" />}
                {isOpen && name}
            </Button>
        </Link>
    );
};

export default SidebarItem;

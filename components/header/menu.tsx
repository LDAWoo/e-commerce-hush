import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { ArrowDownIcon, FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon } from "../icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
const Menu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="pl-0 flex md:hidden duration-0 text-current hover:text-current bg-transparent hover:bg-transparent rounded-none" variant={"ghost"}>
                    <CiMenuFries size={30} className="rotate-180" />
                </Button>
            </SheetTrigger>

            <SheetContent
                side={"left"}
                className="w-[350px] p-0 flex-col flex"
                options={{
                    classClosedContent: "top-[1.5rem]",
                    classClosed: "w-6 h-6",
                }}
            >
                <div className="flex flex-col overflow-y-auto no-scrollbar pt-0 pl-5 pr-5 mt-[70px] flex-[1_1_auto]">
                    <Accordion type="multiple" className="w-full grid grid-cols-1">
                        <AccordionItem value="menu-1" className="border-t border-b-0">
                            <div className="flex relative">
                                <Link href={`/collections/baby-boy`} className="flex-[1_1_auto] p-[15px_20px] pl-0 uppercase text-[calc(var(--type-base-size)_-_0px)] tracking-[.2em] whitespace-nowrap">
                                    Baby Boy
                                </Link>
                                <AccordionTrigger className={cn("hover:no-underline p-0 w-full border-none")}>
                                    <div className="border-l flex-[0_1_auto] p-[0_25px]">
                                        <ArrowDownIcon id="arrow" size={10} className="transition-transform duration-200" />
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent>
                                <ul className="text-[calc(var(--type-base-size)_-_2px)] text-left">
                                    {["New Arrivals", "Tops", "Bottoms", "Onesies", "Sets", "Kinitwear", "Outerwear", "Accessories"].map((item, index) => (
                                        <li key={index}>
                                            <Link href={`/pages/${item.toLowerCase().replace(/ /g, "-")}`} className="p-[4px_0] leading-[30px] block">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="menu-2" className="border-t border-b-0">
                            <div className="flex relative">
                                <Link href={`/collections/baby-girl`} className="flex-[1_1_auto] p-[15px_20px] pl-0 uppercase text-[calc(var(--type-base-size)_-_0px)] tracking-[.2em] whitespace-nowrap">
                                    Baby Girl
                                </Link>
                                <AccordionTrigger className={cn("hover:no-underline p-0 w-full border-none")}>
                                    <div className="border-l flex-[0_1_auto] p-[0_25px]">
                                        <ArrowDownIcon id="arrow" size={10} className="transition-transform duration-200" />
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent>
                                <ul className="text-[calc(var(--type-base-size)_-_2px)] text-left">
                                    {["New Arrivals", "Tops", "Bottoms", "Onesies", "Sets", "Kinitwear", "Outerwear", "Accessories"].map((item, index) => (
                                        <li key={index}>
                                            <Link href={`/pages/${item.toLowerCase().replace(/ /g, "-")}`} className="p-[4px_0] leading-[30px] block">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="menu-3" className="border-t border-b-0">
                            <div className="flex relative">
                                <Link href={`/collections/boy`} className="flex-[1_1_auto] p-[15px_20px] pl-0 uppercase text-[calc(var(--type-base-size)_-_0px)] tracking-[.2em] whitespace-nowrap">
                                    Boy
                                </Link>
                                <AccordionTrigger className={cn("hover:no-underline p-0 w-full border-none")}>
                                    <div className="border-l flex-[0_1_auto] p-[0_25px]">
                                        <ArrowDownIcon id="arrow" size={10} className="transition-transform duration-200" />
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent>
                                <ul className="text-[calc(var(--type-base-size)_-_2px)] text-left">
                                    {["New Arrivals", "Tops", "Bottoms", "Onesies", "Sets", "Kinitwear", "Outerwear", "Accessories"].map((item, index) => (
                                        <li key={index}>
                                            <Link href={`/pages/${item.toLowerCase().replace(/ /g, "-")}`} className="p-[4px_0] leading-[30px] block">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="menu-4" className="border-t border-b-0">
                            <div className="flex relative">
                                <Link href={`/collections/girl`} className="flex-[1_1_auto] p-[15px_20px] pl-0 uppercase text-[calc(var(--type-base-size)_-_0px)] tracking-[.2em] whitespace-nowrap">
                                    Girl
                                </Link>
                                <AccordionTrigger className={cn("hover:no-underline p-0 w-full border-none")}>
                                    <div className="border-l flex-[0_1_auto] p-[0_25px]">
                                        <ArrowDownIcon id="arrow" size={10} className="transition-transform duration-200" />
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent>
                                <ul className="text-[calc(var(--type-base-size)_-_2px)] text-left">
                                    {["New Arrivals", "Tops", "Bottoms", "Onesies", "Sets", "Kinitwear", "Outerwear", "Accessories"].map((item, index) => (
                                        <li key={index}>
                                            <Link href={`/pages/${item.toLowerCase().replace(/ /g, "-")}`} className="p-[4px_0] leading-[30px] block">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="menu-5" className="border-t border-b-0">
                            <div className="flex relative">
                                <Link href={`/collections/teen`} className="flex-[1_1_auto] p-[15px_20px] pl-0 uppercase text-[calc(var(--type-base-size)_-_0px)] tracking-[.2em] whitespace-nowrap">
                                    Teen
                                </Link>
                                <AccordionTrigger className={cn("hover:no-underline p-0 w-full border-none")}>
                                    <div className="border-l flex-[0_1_auto] p-[0_25px]">
                                        <ArrowDownIcon id="arrow" size={10} className="transition-transform duration-200" />
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent>
                                <ul className="text-[calc(var(--type-base-size)_-_2px)] text-left">
                                    {["New Arrivals", "Tops", "Bottoms", "Onesies", "Sets", "Kinitwear", "Outerwear", "Accessories"].map((item, index) => (
                                        <li key={index}>
                                            <Link href={`/pages/${item.toLowerCase().replace(/ /g, "-")}`} className="p-[4px_0] leading-[30px] block">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="menu-6" className="border-t">
                            <div className="flex relative">
                                <Link href={`/collections/ladies`} className="flex-[1_1_auto] p-[15px_20px] pl-0 uppercase text-[calc(var(--type-base-size)_-_0px)] tracking-[.2em] whitespace-nowrap">
                                    Ladies
                                </Link>
                                <AccordionTrigger className={cn("hover:no-underline p-0 w-full border-none")}>
                                    <div className="border-l flex-[0_1_auto] p-[0_25px]">
                                        <ArrowDownIcon id="arrow" size={10} className="transition-transform duration-200" />
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent>
                                <ul className="text-[calc(var(--type-base-size)_-_2px)] text-left">
                                    {["New Arrivals", "Tops", "Bottoms", "Onesies", "Sets", "Kinitwear", "Outerwear", "Accessories"].map((item, index) => (
                                        <li key={index}>
                                            <Link href={`/pages/${item.toLowerCase().replace(/ /g, "-")}`} className="p-[4px_0] leading-[30px] block">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Link href={`/collections/our-brand`} className="border-b p-[15px_20px] pl-0 uppercase text-[calc(var(--type-base-size)_-_0px)] tracking-[.2em] whitespace-nowrap">
                        Our Brand
                    </Link>
                    <Link href={`/collections/sale`} className="border-b p-[15px_20px] pl-0 uppercase text-[calc(var(--type-base-size)_-_0px)] tracking-[.2em] whitespace-nowrap">
                        Sale
                    </Link>
                    <Link href={`/collections/account/login`} className="p-[15px_20px] pl-0 text-[calc(var(--type-base-size)_-_2px)] tracking-[.2em] whitespace-nowrap">
                        Log in
                    </Link>

                    <ul className="flex flex-wrap mb-5">
                        <li className="border flex-[0_1_33.33%] m-[0_0_-1px] text-center">
                            <a href="https://www.instagram.com/the.hush.shop" target="_blank" className="p-[12px_30px] block">
                                <InstagramIcon size={20} />
                            </a>
                        </li>

                        <li className="border flex-[0_1_33.33%] m-[0_0_-1px] text-center -ml-[1px] -mr-[1px]">
                            <a href="https://www.facebook.com/TheHushShop" target="_blank" className="p-[12px_30px] block">
                                <FacebookIcon size={20} />
                            </a>
                        </li>

                        <li className="border flex-[0_1_33.33%] m-[0_0_-1px] text-center">
                            <a href="https://x.com/TheHushShop" target="_blank" className="p-[12px_30px] block">
                                <TwitterIcon size={20} />
                            </a>
                        </li>

                        <li className="border flex-[0_1_33.33%] m-[0_0_-1px] text-center">
                            <a href="https://www.pinterest.com/TheHushShop/" target="_blank" className="p-[12px_30px] block">
                                <PinterestIcon size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default React.memo(Menu);

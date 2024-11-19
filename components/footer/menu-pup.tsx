"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { ArrowDownIcon } from "../icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const initialValue = ["menu-1", "menu-2", "menu-3", "menu-4"];

const MenuPup = () => {
    const { theme } = useTheme();
    const t = useTranslations("FOOTER");
    const logoSrc = theme === "light" ? "/assets/loadify-image.png" : "/assets/logo.png";

    const [accordionValue, setAccordionValue] = useState<string[]>(initialValue);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Set initial state based on current window width
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setAccordionValue(isMobile ? [] : initialValue);
    }, [isMobile]);

    const handleValueChange = useCallback(
        (value: string[]) => {
            if (isMobile) setAccordionValue(value);
        },
        [isMobile]
    );

    return (
        <div>
            <Accordion value={accordionValue} onValueChange={handleValueChange} type="multiple" className="w-full grid grid-cols-1 md:grid-cols-2 min-[960px]:grid-cols-4">
                <AccordionItem value="menu-1" className="pl-[22px] border-t md:border-b-0 md:border-t-0">
                    <AccordionTrigger
                        className={cn("hover:no-underline relative md:mb-[20px] p-[15px_0] md:p-0 w-full justify-center md:justify-start border-none", {
                            "cursor-default": !isMobile,
                        })}
                    >
                        <div className="uppercase text-[14px] md:text-[16px] tracking-[.3em] whitespace-nowrap">{t("LBL_HELP_AND_INFO")}</div>
                        <ArrowDownIcon id="arrow" size={10} className="md:hidden absolute top-1/2 right-1 -translate-y-1/2 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="text-[15px] text-center md:text-left">
                            {["Our Brands", "Size Charts", "Shopping & Returns", "Track Your Order", "Gift Cards", "Privacy Policy", "Wholesale Inquiries", "Contact Us"].map((item, index) => (
                                <li key={index}>
                                    <Link href={`/pages/${item.toLowerCase().replace(/ /g, "-")}`} className="text-muted-foreground hover:text-foreground p-[4px_0] leading-[30px]">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="menu-2" className="pl-[22px] md:border-b-0">
                    <AccordionTrigger
                        className={cn("hover:no-underline md:mb-[20px] relative p-[15px_0] md:p-0 w-full justify-center md:justify-start border-none", {
                            "cursor-default": !isMobile,
                        })}
                    >
                        <div className="uppercase text-[14px] md:text-[16px] tracking-[.3em] whitespace-nowrap">{t("LBL_MAIN_MENU")}</div>
                        <ArrowDownIcon id="arrow" size={10} className="md:hidden absolute top-1/2 right-1 -translate-y-1/2 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="text-[15px] text-center md:text-left">
                            {["Baby Boy", "Baby Girl", "Boy", "Girl", "Teen", "Ladies", "Our Brands", "Sale"].map((item, index) => (
                                <li key={index}>
                                    <Link href={`/collections/${item.toLowerCase().replace(/ /g, "-")}`} className="text-muted-foreground hover:text-foreground p-[4px_0] leading-[30px]">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="menu-3" className="pl-[22px] md:border-b-0 ">
                    <AccordionTrigger
                        className={cn("hover:no-underline md:mb-[20px] relative p-[15px_0] md:p-0 w-full justify-center md:justify-start border-none", {
                            "cursor-default": !isMobile,
                        })}
                    >
                        <div className="uppercase text-[14px] md:text-[16px] tracking-[.3em] whitespace-nowrap">{t("LBL_SIGN_UP_AND_SAVE")}</div>
                        <ArrowDownIcon id="arrow" size={10} className="md:hidden absolute top-1/2 right-1 -translate-y-1/2 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-center text-muted-foreground md:text-left mb-[15px] text-[calc(var(--type-base-size)_*_.85)]">{t("LBL_SUBSCRIBE")}</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="menu-4" className="pl-0 border-b-0">
                    <Link href={"/"} className="ml-auto md:ml-0 mr-auto mt-[15px] md:mt-0 flex w-[160px] h-[120px] relative">
                        <Image src={logoSrc} alt="logo" fill />
                    </Link>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default React.memo(MenuPup);

import { ArrowDownIcon } from "@/components/icons";
import { NavigationContent, NavigationItem, NavigationProvider, NavigationTrigger } from "@/components/ui/navigation";
import Link from "next/link";
import React from "react";

const Navigation = () => {
    const components = [
        {
            title: "New Arrivals",
            href: "/new-arrival",
        },
        {
            title: "Tops",
            href: "/tops",
        },
        {
            title: "Bottoms",
            href: "/bottoms",
        },
        {
            title: "Onesies",
            href: "/onesies",
        },
        {
            title: "Sefs",
            href: "/sefs",
        },
        {
            title: "Knitwear",
            href: "/knitwear",
        },
        {
            title: "Outerwear",
            href: "/outerwear",
        },
        {
            title: "Accessories",
            href: "/accessories",
        },
        {
            title: "Lounge & Playwear",
            href: "/playwear",
        },
        {
            title: "Gift Sefs",
            href: "/gift sefs",
        },
    ];

    return (
        <div className="hidden md:flex w-full gap-0 justify-center items-center mt-[10px]">
            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger>
                        {" Bay boy "}
                        <ArrowDownIcon size={10} className="inline-block ml-1 mb-1" />
                    </NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className="w-full">
                                <Link href={`/collections${component.href}`} className="block p-[8px_15px] text-[16px] text-foreground">
                                    {component.title}
                                </Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger>
                        {" Baby girl "}
                        <ArrowDownIcon size={10} className="inline-block ml-1 mb-1" />
                    </NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className="w-full">
                                <Link href={`/collections${component.href}`} className="block p-[8px_15px] text-[16px] text-foreground">
                                    {component.title}
                                </Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem className="static">
                    <NavigationTrigger>
                        {" Boy "}
                        <ArrowDownIcon size={10} className="inline-block ml-1 mb-1" />
                    </NavigationTrigger>
                    <NavigationContent className="w-full">
                        <div className="flex flex-wrap w-full p-[39px_50px]">
                            {components.map((component) => (
                                <div key={component.title} className="flex pl-[22px] w-[25%] text-black p-[8px_15px] text-[17px] uppercase">
                                    <Link href={`/collections${component.href}`}>{component.title}</Link>
                                </div>
                            ))}
                        </div>
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger>
                        {" Girl "}
                        <ArrowDownIcon size={10} className="inline-block ml-1 mb-1" />
                    </NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className="w-full">
                                <Link href={`/collections${component.href}`} className="block p-[8px_15px] text-[16px] text-foreground">
                                    {component.title}
                                </Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger>
                        {" Teen "}
                        <ArrowDownIcon size={10} className="inline-block ml-1 mb-1" />
                    </NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className="w-full">
                                <Link href={`/collections${component.href}`} className="block p-[8px_15px] text-[16px] text-foreground">
                                    {component.title}
                                </Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger>
                        {" Ladies "}
                        <ArrowDownIcon size={10} className="inline-block ml-1 mb-1" />
                    </NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className="w-full">
                                <Link href={`/collections${component.href}`} className="block p-[8px_15px] text-[16px] text-foreground">
                                    {component.title}
                                </Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <Link href={`/collections/our-brands`} className="rounded-none p-[7.5px_15px] relative tracking-[.2rem] text-[16px] uppercase">
                {" Our brands "}
            </Link>

            <Link href={`/collections/sale`} className="rounded-none p-[7.5px_15px] relative tracking-[.2rem] text-[16px] uppercase">
                {" Sale "}
            </Link>
        </div>
    );
};

export default React.memo(Navigation);

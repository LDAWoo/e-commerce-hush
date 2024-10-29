import { NavigationContent, NavigationItem, NavigationProvider, NavigationTrigger } from "@/components/ui/navigation";
import { cn } from "@/lib/utils";
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
        <div className="hidden md:flex w-full gap-2 justify-center items-center mt-[10px]">
            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger className="uppercase">Bay boy</NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className="w-full text-black p-[8px_15px] text-sm">
                                <Link href={`/collections${component.href}`}>{component.title}</Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger className="uppercase">Baby girl</NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className=" w-full text-black p-[8px_15px] text-sm">
                                <Link href={`/collections${component.href}`}>{component.title}</Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem className="static">
                    <NavigationTrigger className="uppercase">Boy</NavigationTrigger>
                    <NavigationContent className="data-[state=true]:!grid grid-cols-4 w-full">
                        {components.map((component) => (
                            <div key={component.title} className=" w-full text-black p-[8px_15px] text-sm">
                                <Link href={`/collections${component.href}`}>{component.title}</Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger className="uppercase">Girl</NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className=" w-full text-black p-[8px_15px] text-sm">
                                <Link href={`/collections${component.href}`}>{component.title}</Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger className="uppercase">Teen</NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className=" w-full text-black p-[8px_15px] text-sm">
                                <Link href={`/collections${component.href}`}>{component.title}</Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger className="uppercase">Ladies</NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className=" w-full text-black p-[8px_15px] text-sm">
                                <Link href={`/collections${component.href}`}>{component.title}</Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger className="uppercase">Our brands</NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className=" w-full text-black p-[8px_15px] text-sm">
                                <Link href={`/collections${component.href}`}>{component.title}</Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>

            <NavigationProvider>
                <NavigationItem>
                    <NavigationTrigger className="uppercase">Sale</NavigationTrigger>
                    <NavigationContent className="w-[162px]">
                        {components.map((component) => (
                            <div key={component.title} className=" w-full text-black p-[8px_15px] text-sm">
                                <Link href={`/collections${component.href}`}>{component.title}</Link>
                            </div>
                        ))}
                    </NavigationContent>
                </NavigationItem>
            </NavigationProvider>
        </div>
    );
};

export default Navigation;

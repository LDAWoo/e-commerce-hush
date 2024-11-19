"use client";
import useScroll from "@/hooks/useScroll";
import { ChildrenProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { Button } from "../ui/button";
import InfoRight from "./info-right";
import Toolbar from "./tool-bar";
import { Link } from "@/i18n/routing";
import React, { useCallback, useMemo, useRef, useState } from "react";
import Search from "./search";
import { CiSearch } from "react-icons/ci";
import Menu from "./menu";
import { useDimensions } from "@/hooks/use-dimensions";

type HeaderProps = {
    className?: string;
} & ChildrenProps;

const Header = ({ children, className }: HeaderProps) => {
    const { scrollY } = useScroll();
    const containerHeaderRef = useRef<HTMLDivElement | null>(null);
    const { height } = useDimensions(containerHeaderRef);
    const { locale } = useParams() as { locale: string };
    const pathName = usePathname();
    const { theme } = useTheme();
    const [openSearch, setOpenSearch] = useState(false);

    const isScrolled = scrollY >= 300;
    const isHomePage = pathName === `/${locale}`;

    const logoSrc = useMemo(() => {
        return theme === "light" ? (isScrolled ? "/assets/loadify-image.png" : isHomePage ? "/assets/logo.png" : "/assets/loadify-image.png") : "/assets/logo.png";
    }, [theme, isScrolled, isHomePage]);

    const onOpenSearch = useCallback(() => {
        setOpenSearch(true);
    }, []);

    const onCloseSearch = useCallback(() => {
        setOpenSearch(false);
    }, []);

    return (
        <div className="relative z-[10]">
            <div
                className={cn("absolute top-0 left-0 right-0 z-10 text-foreground", {
                    "bg-gradient-to-b from-[#0000004d] to-[#0000] ": isHomePage,
                })}
            />
            <Toolbar />
            <div style={{ height: isScrolled ? `${height}px` : "fit" }}>
                <header
                    ref={containerHeaderRef}
                    className={cn(
                        "p-[7px_0] md:p-[20px_0] relative text-foreground",
                        {
                            "text-white": isHomePage,
                        },
                        {
                            "!fixed top-0 left-0 right-0 bg-background text-foreground animate-transform-up z-[10000] border-b": isScrolled,
                        },
                        className
                    )}
                >
                    <div className="flex flex-col items-center p-[0_17px] md:p-[0_40px] w-full h-full">
                        <div className="flex flex-row items-center justify-between w-full h-full">
                            <div className="mr-0 flex-[1_1_130px]">
                                <Menu />
                                <Button onClick={onOpenSearch} className="hidden md:flex text-current hover:text-current bg-transparent hover:bg-transparent" variant="ghost">
                                    <CiSearch size={28} />
                                </Button>
                            </div>
                            <Link href={"/"} className="w-[110px] min-w-[110px] flex-[0_1_110px] md:flex-[0_1_140px] md:w-[140px] h-[79px] md:h-[100px] relative">
                                <Image src={logoSrc} alt="logo" fill priority />
                            </Link>
                            <div className="flex-[1_1_130px] flex items-center justify-end">
                                <InfoRight />
                            </div>
                        </div>
                        {children}
                    </div>

                    {openSearch && (
                        <div className="absolute inset-0 z-28 flex bg-background text-foreground shadow-[0_15px_45px_#0000001a]">
                            <div className="flex-1 p-4 md:p-10 w-full mx-auto max-w-[960px] flex items-center">
                                <Search open={openSearch} onClose={onCloseSearch} />
                            </div>
                        </div>
                    )}
                </header>
            </div>
        </div>
    );
};

export default React.memo(Header);

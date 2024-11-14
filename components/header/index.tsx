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
import React from "react";
import Search from "./search";
import { CiSearch } from "react-icons/ci";
import Menu from "./menu";

type HeaderProps = {
    className?: string;
} & ChildrenProps;

const Header = ({ children, className }: HeaderProps) => {
    const { scrollY } = useScroll();
    const params = useParams();
    const { locale } = params as { locale: string };
    const pathName = usePathname();
    const { theme } = useTheme();
    const [openSearch, setOpenSearch] = React.useState(false);
    const isScrolled = scrollY >= 100;
    const isHomePage = pathName === `/${locale}`;

    const logoSrc = theme === "light" ? (isScrolled ? "/assets/loadify-image.png" : isHomePage ? "/assets/logo.png" : "/assets/loadify-image.png") : "/assets/logo.png";

    const onOpenSearch = () => {
        setOpenSearch(true);
    };

    const onCloseSearch = () => {
        setOpenSearch(false);
    };

    return (
        <div className="relative">
            <div
                className={cn("absolute top-0 left-0 right-0 z-10 text-foreground", {
                    "bg-gradient-to-b from-[#0000004d] to-[#0000] text-white": isHomePage,
                })}
            >
                <div>
                    <Toolbar />
                </div>
                <div className="h-[198px]">
                    <header
                        className={cn(
                            "p-[7px_0] md:p-[20px_0] relative text-white",
                            {
                                "!fixed top-0 left-0 right-0 bg-white !text-black animate-transform-up": isScrolled,
                            },
                            className
                        )}
                    >
                        <div className="flex flex-col items-center p-[0_17px] md:p-[0_40px] w-full h-full">
                            <div className="flex flex-row items-center justify-between w-full h-full">
                                <div className="mr-0 flex-[1_1_130px]">
                                    <Menu />
                                    <Button onClick={onOpenSearch} className="hidden md:flex text-current hover:text-current bg-transparent hover:bg-transparent" variant={"ghost"}>
                                        <CiSearch size={28} />
                                    </Button>
                                </div>
                                <Link href={"/"} className="w-[110px] flex-[0_1_110px] md:flex-[0_1_140px] md:w-[140px] h-[70px] md:h-[100px] relative">
                                    <Image src={logoSrc} alt="logo" fill />
                                </Link>
                                <div className="flex-[1_1_130px] flex items-center justify-end">
                                    <InfoRight />
                                </div>
                            </div>
                            {children}
                        </div>

                        <div
                            className={cn("absolute left-0 right-0 z-[28] overflow-hidden bottom-[200%] hidden", {
                                "bottom-0 flex overflow-visible h-full": openSearch,
                            })}
                        >
                            <div className="bg-background text-foreground absolute top-0 right-0 left-0 bottom-0 flex shadow-[0_15px_45px_#0000001a]">
                                <div className="flex flex-[1_1_100%] p-[0_17px] md:p-[0_40px] w-full max-w-[var(--page-max-width)]">
                                    <div className="flex-[99] ml-auto mr-auto max-w-[960px] flex items-center required: w-full">
                                        <div
                                            className={cn("hidden fixed top-0 left-0 w-screen h-screen z-[3] bg-[rgba(230,230,230,.6)]", {
                                                block: openSearch,
                                            })}
                                        />

                                        <Search open={openSearch} onClose={onCloseSearch} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Header);

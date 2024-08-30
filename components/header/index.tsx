"use client";
import useScroll from "@/hooks/useScroll";
import { ChildrenProps } from "@/lib/types";
import clsx from "clsx";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import InfoRight from "./info-right";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

type HeaderProps = {
    className?: string;
} & ChildrenProps;

const Header = ({ children, className }: HeaderProps) => {
    const { scrollY } = useScroll();
    const pathName = usePathname();
    const { theme } = useTheme();

    return (
        <div>
            <div className="relative">
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-[#0000004d] to-[#0000]">
                    <div></div>
                    <div className="h-[200px]">
                        <header
                            className={clsx(
                                "p-[7px_0] md:p-[20px_0] relative text-white",
                                {
                                    "!fixed top-0 left-0 right-0 bg-white !text-black animate-transform-up": scrollY >= 100,
                                },
                                className
                            )}
                        >
                            <div className="flex flex-col items-center p-[0_17px] md:p-[0_40px] w-full h-full">
                                <div className="flex flex-row items-center justify-between w-full h-full">
                                    <div className="mr-0 md:mr-[184px]">
                                        <Button className="flex md:hidden text-current bg-transparent hover:bg-transparent">
                                            <Menu size={20} />
                                        </Button>
                                    </div>
                                    <Link href={"/"} className="w-[110px] md:w-[140px] h-[70px] md:h-[100px] relative">
                                        <Image src={theme === "light" ? (scrollY >= 100 ? (pathName === "/" ? "/assets/loadify-image.png" : pathName === "/" ? "/assets/logo.png" : "/assets/loadify-image.png") : "/assets/logo.png") : "/assets/logo.png"} alt="logo" fill />
                                    </Link>
                                    <InfoRight />
                                </div>
                                {children}
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

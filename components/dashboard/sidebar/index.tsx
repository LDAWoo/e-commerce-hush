"use client";
import { DashBoardSideBar } from "@/lib/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import SidebarItem from "./sidebar-item";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
    const { theme } = useTheme();
    const data = useMemo(() => DashBoardSideBar, []);
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className={`bg-background border-r transition-all duration-300 ease-in-out flex flex-col h-screen ${isOpen ? "w-[260px] min-w-[260px]" : "w-[75px] min-w-[75px]"}`}>
            <div className={"p-4 flex flex-col items-center"}>
                <Button variant={"outline"} size="icon" className="mb-4" onClick={toggleSidebar}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
                <Link href={"/dashboard"} className="flex items-center justify-center mb-8">
                    <div className={`relative ${isOpen ? "w-[140px] h-[100px]" : "w-[40px] h-[40px]"}`}>
                        <Image src={theme === "dark" ? "/assets/logo.png" : "/assets/loadify-image.png"} fill alt="Sidebar Logo" className="object-contain" />
                    </div>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col space-y-2 p-4">
                    {data.map((item) => (
                        <SidebarItem key={item.link} name={item.name} link={item.link} icon={item.icon} isOpen={isOpen} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Loading = () => {
    const { theme } = useTheme();

    return (
        <div className="w-[135px] relative h-[97px] animate-effect-cube" role="status">
            <Image src={theme === "light" ? "/assets/loadify-image.png" : "/assets/logo.png"} className="w-auto h-auto" fill alt="loading-image" />
        </div>
    );
};

export default React.memo(Loading);

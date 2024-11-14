"use client";

import { countries as countryList } from "@/lib/countries";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { ArrowDownIcon } from "../icons";
import { useClickOutside } from "@/hooks/use-click-outside";

type CurrencyProps = {
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "end" | "center";
};
const Currency = ({ side = "top", align = "start" }: CurrencyProps) => {
    const router = useRouter();
    const { locale } = useParams<{ locale: string }>();
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef<HTMLDivElement | null>(null);

    const onClose = () => {
        setOpen(false);
    };

    useClickOutside(ref, onClose);

    const countries = React.useMemo(() => countryList, []);

    const filteredLanguage = React.useMemo(() => countries.find((l) => l.languages[0] === locale), [locale, countries]);

    const handleChangeLanguage = (newLocale: string) => {
        const path = window.location.pathname;
        const updatedPath = path.replace(/^\/[a-z]{2}/i, `/${newLocale}`);
        router.push(updatedPath);
    };

    const sideClass = {
        top: "bottom-full top-auto",
        bottom: "top-full bottom-auto",
        left: "left-0 right-auto",
        right: "right-0 left-auto",
    }[side];

    const alignClass = {
        start: "left-0",
        end: "right-0",
        center: "left-1/2 -translate-x-1/2",
    }[align];

    if (!filteredLanguage) return null;

    return (
        <div className="relative w-fit" ref={ref}>
            {filteredLanguage && (
                <button className="relative text-[14px] p-[5px_28px_5px_5px] inline-block" onClick={() => setOpen(!open)}>
                    <>
                        <filteredLanguage.flag title={filteredLanguage.name} className="inline-block w-[22px] h-[22px]" />
                        <span className="inline-block pl-[10px] align-middle">{`${filteredLanguage.name} (${filteredLanguage.currency} ${filteredLanguage.symbol})`}</span>
                        <ArrowDownIcon size={11} className="inline-block absolute top-1/2 -translate-y-1/2 right-[10px]" />
                    </>
                </button>
            )}

            <ul
                className={cn(
                    "absolute p-[10px_0] bg-background text-foreground shadow-[0_0_20px_#00000017] w-[285px] max-h-[60vh] min-h-[92px] overflow-x-auto z-[9999]",
                    {
                        hidden: !open,
                    },
                    sideClass,
                    alignClass
                )}
            >
                {countries.map((country, index) => (
                    <li key={index} className="p-[5px_15px_4px] text-left whitespace-nowrap">
                        <button type="button" className="group" onClick={() => handleChangeLanguage(country.languages[0])}>
                            <country.flag title={country.name} className="inline-block w-[22px] h-[22px]" />
                            <span
                                className={cn("group-hover:underline inline-block pl-[10px] align-middle", {
                                    underline: country.languages[0] === locale,
                                })}
                            >
                                {`${country.name} (${country.currency} ${country.symbol})`}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(Currency);

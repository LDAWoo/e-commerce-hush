import React from "react";
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
    const t = useTranslations("PAGE_NOT_PAGE");
    console.log("Not Found");

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header className="bg-background !text-accent-foreground">
                <Navigation />
            </Header>
            <main className="mb-[40px] border-t ml-auto mr-auto p-[0_17px] md:p-[0_40px] w-full h-full max-w-[var(--page-max-width)]">
                <div className="flex flex-col items-center h-full">
                    <header className="mb-[30px] md:mb-[50px] pt-[80px] text-center">
                        <h1>{t("LBL_TITLE")}</h1>
                        <div className="mb-[15px]">
                            <p className="m-[10px_0] text-muted-foreground">{t("LBL_SUBTITLE")}</p>
                            <p>
                                <Link href={`/`} className="relative border-b border-border p-[4px_0] after:w-0 after:border-transparent hover:after:w-full after:border hover:after:border-foreground after:absolute after:-bottom-[2px] after:transition-all after:duration-1000 after:left-0">
                                    {t("LBL_CONTINUE_HOME")}
                                </Link>
                            </p>
                        </div>
                    </header>
                </div>
            </main>
            <Footer />
        </div>
    );
}

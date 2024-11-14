import React from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BaseLayout from "@/components/base-layout";
import { routing } from "@/i18n/routing";

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, "children">) {
    const t = await getTranslations({ locale, namespace: "LOCAL_LAYOUT" });

    return {
        title: t("LBL_TITLE"),
    };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }
    // Enable static rendering
    setRequestLocale(locale);
    return <BaseLayout locale={locale}>{children}</BaseLayout>;
}

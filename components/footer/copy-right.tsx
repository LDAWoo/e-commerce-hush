import { useTranslations } from "next-intl";
import React from "react";

const Copyright = () => {
    const t = useTranslations("FOOTER");
    return <p className="p-[7.5px_0] text-center text-[max(calc(var(--type-base-size)_*_.7),12px)] text-muted-foreground">{t("LBL_COPYRIGHT")}</p>;
};

export default Copyright;

import { ReactNode } from "react";

export type ChildrenProps<T = undefined> = T extends undefined
    ? {
          children?: ReactNode;
      }
    : T & { children: ReactNode };

export type BasketItem = {
    product: {
        id: string | number;
        name: string;
        description?: string;
        image?: string | null;
        price?: number;
        color?: string | null;
        size?: string | null;
    };
};

export type LocaleType = "en" | "vi" | "zh" | "ja" | "ko" | "es";

export type CurrencyType = "USD" | "EUR" | "GBP" | "JPY" | "AUD" | "CAD";

import { CN, DE, FR, GB, JP, KR, US, VN } from "country-flag-icons/react/3x2";
import { continents } from "countries-list";

export const countries = [
    {
        name: "China",
        code: "CN",
        continent: continents.AS, // Asia
        languages: ["zh"], // Chinese
        flag: CN,
        currency: "CNY",
        symbol: "¥",
    },
    {
        name: "France",
        code: "FR",
        continent: continents.EU, // Europe
        languages: ["fr"], // French
        flag: FR,
        currency: "EUR",
        symbol: "€",
    },
    {
        name: "Germany",
        code: "DE",
        continent: continents.EU, // Europe
        languages: ["de"], // German
        flag: DE,
        currency: "EUR",
        symbol: "€",
    },
    {
        name: "Japan",
        code: "JP",
        continent: continents.AS, // Asia
        languages: ["ja"], // Japanese
        flag: JP,
        currency: "JPY",
        symbol: "¥",
    },
    {
        name: "South Korea",
        code: "KR",
        continent: continents.AS, // Asia
        languages: ["ko"], // Korean
        flag: KR,
        currency: "KRW",
        symbol: "₩",
    },
    {
        name: "United States",
        code: "US",
        continent: continents.NA, // North America
        languages: ["en"], // English
        flag: US,
        currency: "USD",
        symbol: "$",
    },
    {
        name: "Vietnam",
        code: "VN",
        continent: continents.AS, // Asia
        languages: ["vi"], // Vietnamese
        flag: VN,
        currency: "VND",
        symbol: "₫",
    },
];

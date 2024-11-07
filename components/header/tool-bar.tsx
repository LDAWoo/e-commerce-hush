import React from "react";
import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon } from "../icons";

export const followerOur = [
    {
        name: "Hush.Shop on Instagram",
        link: "https://www.instagram.com/the.hush.shop",
        icon: InstagramIcon,
    },
    {
        name: "Hush.Shop on Facebook",
        link: "https://www.facebook.com/TheHushShop",
        icon: FacebookIcon,
    },
    {
        name: "Hush.Shop on Twitter",
        link: "https://x.com/TheHushShop",
        icon: TwitterIcon,
    },
    {
        name: "Hush.Shop on Pinterest",
        link: "https://www.pinterest.com/TheHushShop/",
        icon: PinterestIcon, // You can replace null with your desired icon component here
    },
];

const Toolbar = () => {
    const socials = React.useMemo(() => followerOur, []);

    return (
        <div className="p-[0_40px]">
            <div className="flex items-center justify-end">
                <div className="flex-[0_1_auto] pr-[5px]">
                    <ul className="inline-flex">
                        {socials.map((soc) => (
                            <li key={soc.link}>
                                <a href={soc.link} target="_blank" className="text-white p-[5px] block">
                                    <soc.icon size={16} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default React.memo(Toolbar);

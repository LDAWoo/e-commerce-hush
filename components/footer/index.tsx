import React from "react";
import Payment from "./payment";
import MenuPup from "./menu-pup";

const Footer = () => {
    return (
        <footer className="border-t-0 md:border-t border-border pt-[60px] pb-[60px]">
            <div className="p-[0_40px] max-w-[var(--page-max-width)] ml-auto mr-auto">
                <MenuPup />
                <div></div>
                <Payment />
                <p className="p-[7.5px_0] text-center text-[max(calc(var(--type-base-size)_*_.7),12px)]">© 2024 Hush.Shop - All Rights Reserved - The Hush Shop is a registered trademark.</p>
                <p></p>
            </div>
        </footer>
    );
};

export default Footer;

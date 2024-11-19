import React from "react";
import Payment from "./payment";
import MenuPup from "./menu-pup";
import Copyright from "./copy-right";
import Currency from "../global/currency";

const Footer = () => {
    return (
        <footer className="flex-grow-0 border-t-0 md:border-t border-border pt-0 md:pt-[60px] pb-0 md:pb-[60px]">
            <div className="p-[0_17px] md:p-[0_40px] max-w-[var(--page-max-width)] ml-auto mr-auto">
                <MenuPup />
                <div className="flex justify-center items-center mt-[15px]">
                    <Currency />
                </div>
                <Payment />
                <Copyright />
                <p></p>
            </div>
        </footer>
    );
};

export default React.memo(Footer);

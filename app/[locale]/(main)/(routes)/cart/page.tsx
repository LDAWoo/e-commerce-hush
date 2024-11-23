import dynamic from "next/dynamic";
import React from "react";

const CartContent = dynamic(() => import("./_components/cart-content"), { ssr: false });
const CartHeader = dynamic(() => import("./_components/cart-header"), { ssr: false });

const Page = () => {
    return (
        <div className="flex-1 ml-auto mr-auto p-[40px_17px] md:p-[75px_40px] w-full max-w-[var(--page-max-width)]">
            <div className="flex flex-col items-center h-full">
                <CartHeader />
                <CartContent />
            </div>
        </div>
    );
};

export default Page;

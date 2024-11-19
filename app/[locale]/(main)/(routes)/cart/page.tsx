import React from "react";
import CartHeader from "./_components/cart-header";
import CartContent from "./_components/cart-content";

const page = () => {
    return (
        <div className="flex flex-col items-center h-full">
            <CartHeader />
            <CartContent />
        </div>
    );
};

export default page;

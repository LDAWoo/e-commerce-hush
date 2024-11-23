import { Link } from "@/i18n/routing";
import React from "react";

const CartHeader = () => {
    return (
        <header className="mb-[50px] text-center">
            <h1 className="tracking-[.3rem]">Cart</h1>
            <div className="text-center">
                <Link href={`/`} className="relative border-b border-border p-[4px_0] after:w-0 after:border-transparent hover:after:w-full after:border hover:after:border-foreground after:absolute after:-bottom-[2px] after:transition-all after:duration-1000 after:left-0">
                    Continue shopping
                </Link>
            </div>
        </header>
    );
};

export default React.memo(CartHeader);

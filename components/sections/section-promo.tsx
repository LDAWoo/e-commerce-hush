"use client";
import { promos } from "@/lib/constants";
import { useMemo } from "react";
import PromoItem from "./promo-item";

const SectionPromo = () => {
    const listProduct = useMemo(() => promos, []);
    return (
        <div>
            <div className="flex -mt-[15px] -ml-[15px] pl-[15px] pr-[15px] flex-wrap justify-center text-center">
                {listProduct.map((product) => (
                    <PromoItem item={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default SectionPromo;

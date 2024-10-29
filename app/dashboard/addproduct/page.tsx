import ProductForm from "@/components/dashboard/forms/add-product";
import React from "react";

const Page = () => {
    return (
        <div className="flex flex-col w-full h-full gap-3">
            <div className="flex flex-row gap-2 justify-between items-center">
                <div className="container p-4">
                    <span className="text-3xl font-bold mb-6 tracking-[.1em]">New Product</span>
                </div>
            </div>
            <ProductForm />
        </div>
    );
};

export default Page;

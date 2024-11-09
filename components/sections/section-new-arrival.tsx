import React from "react";
import NewArrivalItem from "./new-arrival-item";
import { products } from "@/lib/constants";
import Link from "next/link";
import { Button } from "../ui/button";

const SectionNewArrival = () => {
    return (
        <div className="m-[75px_0]">
            <div className="p-[75px_0] border-t border-t-border">
                <div>
                    <div className="ml-auto mr-auto p-[0_40px] max-w-[var(--page-max-width)]">
                        <div className="mb-[50px] text-center">
                            <h2>Shop New Arrivals - Fall Winter 2025</h2>
                        </div>
                    </div>
                    <div className="ml-auto mr-auto p-0 md:p-[0_40px] max-w-[var(--page-max-width)]">
                        <div>
                            <div className="flex flex-nowrap md:flex-wrap md:-ml-[22px] w-full overflow-hidden overflow-x-auto">
                                {products.map((product, index) => {
                                    const isLastProduct = index === products.length - 1;

                                    return (
                                        <>
                                            <NewArrivalItem key={index} item={product} collectionId="" />

                                            {isLastProduct && (
                                                <>
                                                    <div key={index} className="flex flex-[0_0_39vw] pl-[17px] justify-center items-center md:hidden">
                                                        <Link href={`/collections/`} className="p-[15px] text-center border border-border text-[.75em] -mt-[60px] tracking-[.1em]">
                                                            View all
                                                            <br />
                                                            919 products
                                                        </Link>
                                                    </div>

                                                    <div className="w-full hidden md:flex justify-center items-center pl-[22px]">
                                                        <Button className="rounded-none p-0 uppercase min-w-[90px] h-auto">
                                                            <Link href={`/collections/`} className="tracking-[.3em] leading-[1.42] text-[14px] p-[11px_20px]">
                                                                View all
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionNewArrival;

import React from "react";
import NewArrivalItem from "./new-arrival-item";
import { products } from "@/lib/constants";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

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
                                            <NewArrivalItem key={index} item={product} />

                                            {isLastProduct && (
                                                <>
                                                    <div key={index} className="flex flex-[0_0_39vw] pl-[17px] justify-center items-center md:hidden">
                                                        <Link href={`/collections`} className="p-[15px] text-center border border-border text-[.75em] -mt-[60px] tracking-[.1em]">
                                                            View all
                                                            <br />
                                                            919 products
                                                        </Link>
                                                    </div>

                                                    <div className="w-full hidden md:flex justify-center items-center pl-[22px]">
                                                        <Link href={`/collections`} className="tracking-[.3em] leading-[1.42] text-[14px]">
                                                            <Button className="rounded-none uppercase min-w-[90px] h-auto  p-[11px_20px]">View all</Button>
                                                        </Link>
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

export default React.memo(SectionNewArrival);

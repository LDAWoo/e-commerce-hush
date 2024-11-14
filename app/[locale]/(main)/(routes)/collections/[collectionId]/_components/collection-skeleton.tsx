"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const CollectionSkeleton = () => {
    return (
        <div>
            <div className="p-[10px] border border-skeleton w-full">
                <div className="w-full md:w-[70%] inline-block">
                    <Skeleton className="w-[100px] h-2 mr-[15px] rounded-sm inline-block" />
                    <Skeleton className="w-[120px] h-2 mr-[15px] rounded-sm hidden md:inline-block" />
                    <Skeleton className="w-[80px] h-2 mr-[15px] rounded-sm hidden md:inline-block" />
                </div>
                <div className="w-full md:w-[29%] inline-block text-left md:text-right mt-3 md:mt-0">
                    <Skeleton className="w-[160px] h-2 mr-[15px] rounded-sm inline-block" />
                </div>
            </div>

            <div className="w-[250px] p-[12px_0_12px_0] m-[20px_0_15px_0]">
                <Skeleton className="w-full h-2  rounded-sm inline-block" />
            </div>

            <div className="block md:hidden mb-[18px]">
                <div className="border border-skeleton p-[10px] mr-[7px] w-full inline-block">
                    <Skeleton className="w-[100px] h-2 rounded-sm inline-block" />
                </div>
            </div>

            <div className="hidden md:block mb-[26px]">
                <div className="border border-skeleton p-[2px_15px_2px_15px] mr-[7px] w-[100px] inline-block">
                    <Skeleton className="w-full h-2 rounded-sm inline-block" />
                </div>

                <div className="border border-skeleton p-[2px_15px_2px_15px] mr-[7px] w-[120px] inline-block">
                    <Skeleton className="w-full h-2 rounded-sm inline-block" />
                </div>

                <div className="border border-skeleton p-[2px_15px_2px_15px] mr-[7px] w-[100px] inline-block">
                    <Skeleton className="w-full h-2 rounded-sm inline-block" />
                </div>
            </div>

            <div className="hidden md:block w-[225px] float-left">
                <div className="border border-skeleton p-[10px] border-b-0">
                    <div className="p-[4px_0_12px_0]">
                        <Skeleton className="w-[40%] h-2 rounded-sm inline-block" />
                    </div>
                    <div>
                        <Skeleton className="w-[80%] h-2 mb-3 rounded-sm inline-block" />
                        <Skeleton className="w-[95%] h-2 mb-3 rounded-sm inline-block" />
                        <Skeleton className="w-[60%] h-2 mb-3 rounded-sm inline-block" />
                    </div>
                </div>

                <div className="border border-skeleton p-[10px] border-b-0">
                    <div className="p-[4px_0_12px_0]">
                        <Skeleton className="w-[40%] h-2 rounded-sm inline-block" />
                    </div>
                    <div>
                        <Skeleton className="w-[80%] h-2 mb-3 rounded-sm inline-block" />
                        <Skeleton className="w-[95%] h-2 mb-3 rounded-sm inline-block" />
                        <Skeleton className="w-[60%] h-2 mb-3 rounded-sm inline-block" />
                    </div>
                </div>

                <div className="border border-skeleton p-[10px]">
                    <div className="p-[4px_0_12px_0]">
                        <Skeleton className="w-[40%] h-2 rounded-sm inline-block" />
                    </div>
                    <div>
                        <Skeleton className="w-[80%] h-2 mb-3 rounded-sm inline-block" />
                        <Skeleton className="w-[95%] h-2 mb-3 rounded-sm inline-block" />
                        <Skeleton className="w-[60%] h-2 mb-3 rounded-sm inline-block" />
                    </div>
                </div>
            </div>

            <div className="pl-0 md:pl-[225px]">
                <div>
                    <ul className="grid grid-cols-2 min-[911px]:grid-cols-3 gap-3 pl-0 md:pl-5">
                        <li className="min-w-[160px] w-full inline-block">
                            <div className="p-[10px] border border-skeleton">
                                <div>
                                    <Skeleton className="h-[180px] m-[-10px_-10px_0_-10px] rounded-none" />
                                </div>
                                <div className="pb-5 text-center">
                                    <Skeleton className="w-[80%] h-2 mt-[15px] rounded-sm inline-block" />
                                    <Skeleton className="w-[95%] h-2 mt-[15px] rounded-sm inline-block" />
                                    <Skeleton className="w-[60%] h-2 mt-[15px] rounded-sm inline-block" />
                                </div>
                            </div>
                        </li>
                        <li className="min-w-[160px] w-full inline-block">
                            <div className="p-[10px] border border-skeleton">
                                <div>
                                    <Skeleton className="h-[180px] m-[-10px_-10px_0_-10px] rounded-none" />
                                </div>
                                <div className="pb-5 text-center">
                                    <Skeleton className="w-[80%] h-2 mt-[15px] rounded-sm inline-block" />
                                    <Skeleton className="w-[95%] h-2 mt-[15px] rounded-sm inline-block" />
                                    <Skeleton className="w-[60%] h-2 mt-[15px] rounded-sm inline-block" />
                                </div>
                            </div>
                        </li>
                        <li className="hidden min-[911px]:inline-block w-full">
                            <div className="p-[10px] border border-skeleton">
                                <div>
                                    <Skeleton className="h-[180px] m-[-10px_-10px_0_-10px] rounded-none" />
                                </div>
                                <div className="pb-5 text-center">
                                    <Skeleton className="w-[80%] h-2 mt-[15px] rounded-sm inline-block" />
                                    <Skeleton className="w-[95%] h-2 mt-[15px] rounded-sm inline-block" />
                                    <Skeleton className="w-[60%] h-2 mt-[15px] rounded-sm inline-block" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CollectionSkeleton);

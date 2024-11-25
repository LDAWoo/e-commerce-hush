"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Toggle } from "@/components/ui/toggle";
import { filterCollections, products } from "@/lib/constants";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import CollectionSkeleton from "./_components/collection-skeleton";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import CollectionNavigation from "./_components/collectioin-navigation";
const CollectionItem = dynamic(() => import("./_components/collection-item"), { ssr: false });
const CollectionsFilter = dynamic(() => import("./_components/collection-filter"), { ssr: false });
type Props = {
    params: {
        collectionId: string;
    };
};

type LayoutType = "grid-view" | "grid-compact" | "list";

const Page = ({ params }: Props) => {
    const collectionsTotal = 56;
    const [isLoading, setIsLoading] = useState(false);
    const [layout, setLayout] = React.useState<LayoutType>("grid-view");
    const [filter, setFilter] = React.useState("filter");

    const handleLayoutChange = (l: string) => {
        setLayout(l as LayoutType);
    };

    return (
        <div className="flex flex-col items-center h-full p-0">
            <div className="flex flex-col items-center w-full">
                <Breadcrumb className="mb-[10px]">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <span className="text-muted-foreground text-lg">/</span>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/collections">Collections</BreadcrumbLink>
                        </BreadcrumbItem>
                        <span className="text-muted-foreground text-lg">/</span>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="tracking-[.3rem]">{params.collectionId}</h1>
            </div>

            {!isLoading && (
                <div className="w-full h-full flex flex-col mt-[45px]">
                    <div className="flex flex-col items-center w-full pt-3 mb-3 gap-4">
                        <CollectionNavigation filter={filter} onFilter={(f) => setFilter(f)} layout={layout} onLayoutChange={handleLayoutChange} />

                        <div className="flex-1">
                            <span className="inline-flex items-center tracking-[.1rem] text-[calc(var(--type-base-size)-4px)] h-[34px] text-muted-foreground whitespace-pre-wrap">
                                Showing {collectionsTotal} results for
                                <p className="tracking-[.2rem]"> {`"${params.collectionId}"`}</p>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row w-full">
                        {filter && <CollectionsFilter />}
                        <div className="w-full h-full">
                            <div
                                className={cn("grid gap-4", {
                                    "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": layout === "grid-view",
                                    "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5": layout === "grid-compact",
                                })}
                            >
                                {products.map((product) => (
                                    <CollectionItem key={product.id} collectionId={params.collectionId} item={product} layout={layout} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="mt-[45px] w-full">{isLoading && <CollectionSkeleton />}</div>
        </div>
    );
};

export default React.memo(Page);

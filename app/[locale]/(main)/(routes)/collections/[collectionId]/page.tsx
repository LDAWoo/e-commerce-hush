"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { filterCollections, products } from "@/lib/constants";
import { LayoutGrid, ListFilter } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import CollectionSkeleton from "./_components/collection-skeleton";
const CollectionItem = dynamic(() => import("./_components/collection-item"), { ssr: false });
const CollectionsFilter = dynamic(() => import("./_components/collection-filter"), { ssr: false });

type Props = {
    params: {
        collectionId: string;
    };
};

const Page = ({ params }: Props) => {
    const collectionsTotal = 56;
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex flex-col items-center h-full p-0">
            <div className="flex flex-col items-center w-full pt-[40px] md:pt-[75px]">
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
                    <div className="flex items-center justify-between w-full pt-3 mb-[35px]">
                        <div className="flex-1">
                            <span className="inline-flex items-center tracking-[.1rem] text-xs h-[34px] text-muted-foreground whitespace-pre-wrap">
                                Showing {collectionsTotal} results for
                                <p className="tracking-[.2rem]"> {`"${params.collectionId}"`}</p>
                            </span>
                        </div>

                        <div className="flex flex-row gap-6">
                            <div className="flex flex-row gap-2">
                                <Toggle aria-label="layout grid" variant={"outline"} className="rounded-none w-8 h-8 p-0 hover:bg-transparent">
                                    <LayoutGrid size={20} />
                                </Toggle>
                                <Toggle aria-label="layout grid" variant={"outline"} className="rounded-none w-8 h-8 p-0 hover:bg-transparent">
                                    <ListFilter size={20} />
                                </Toggle>
                            </div>

                            <Select>
                                <SelectTrigger className="h-8 w-[166px] rounded-none">
                                    <SelectValue placeholder="Date: New to Old" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {filterCollections.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-row w-full">
                        <CollectionsFilter />
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full ml-0 md:ml-10">
                            {products.map((product) => (
                                <CollectionItem key={product.id} collectionId={params.collectionId} item={product} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="mt-[45px] w-full">{isLoading && <CollectionSkeleton />}</div>
        </div>
    );
};

export default React.memo(Page);

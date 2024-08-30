import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React from "react";

const BreadcrumbCollections = () => {
    return (
        <Breadcrumb className="mb-[10px]">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <span className="text-muted-foreground text-lg">/</span>
                <BreadcrumbItem>
                    <BreadcrumbPage>Collections</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadcrumbCollections;

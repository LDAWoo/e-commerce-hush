import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";

const CollectionsBreadcrumb = () => {
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

export default React.memo(CollectionsBreadcrumb);

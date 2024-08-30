import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Collections from "./_components/collections";

const Page = () => {
    return (
        <div className="flex flex-col items-center p-[40px_17px] md:p-[75px_40px] h-full">
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
            <header className="mb-[50px]">
                <h1 className="tracking-[.3rem]">Catalog</h1>
            </header>
            <Collections />
        </div>
    );
};

export default Page;

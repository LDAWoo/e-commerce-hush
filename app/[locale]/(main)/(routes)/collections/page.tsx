import dynamic from "next/dynamic";
import Collections from "./_components/collections";
const CollectionsBreadcrumb = dynamic(() => import("./_components/collections-breadcrumb"), { ssr: false });
const CollectionsHeader = dynamic(() => import("./_components/collections-header"), { ssr: false });

const Page = () => {
    return (
        <div>
            <div className="ml-auto mr-auto p-[40px_17px] md:p-[75px_40px] pt-0 w-full max-w-[var(--page-max-width)]">
                <div className="flex flex-col items-center h-full">
                    <CollectionsBreadcrumb />
                    <CollectionsHeader />
                    <Collections />
                </div>
            </div>
        </div>
    );
};

export default Page;

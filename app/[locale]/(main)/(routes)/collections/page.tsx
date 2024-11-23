import dynamic from "next/dynamic";
const CollectionsBreadcrumb = dynamic(() => import("./_components/collections-breadcrumb"), { ssr: false });
const CollectionsHeader = dynamic(() => import("./_components/collections-header"), { ssr: false });
import Collections from "./_components/collections";

const Page = () => {
    return (
        <div className="ml-auto mr-auto p-[40px_17px] md:p-[75px_40px] w-full max-w-[var(--page-max-width)]">
            <div className="flex flex-col items-center h-full">
                <CollectionsBreadcrumb />
                <CollectionsHeader />
                <Collections />
            </div>
        </div>
    );
};

export default Page;

import dynamic from "next/dynamic";
const CollectionsBreadcrumb = dynamic(() => import("./_components/collections-breadcrumb"), { ssr: false });
const CollectionsHeader = dynamic(() => import("./_components/collections-header"), { ssr: false });
import Collections from "./_components/collections";

const Page = () => {
    return (
        <div className="flex flex-col items-center h-full">
            <CollectionsBreadcrumb />
            <CollectionsHeader />
            <Collections />
        </div>
    );
};

export default Page;

import BreadcrumbCollections from "./_components/breadcrumb-collections";
import Collections from "./_components/collections";
import HeaderCollections from "./_components/header-collections";

const Page = () => {
    return (
        <div className="flex flex-col items-center p-[40px_17px] md:p-[75px_40px] h-full">
            <BreadcrumbCollections />
            <HeaderCollections />
            <Collections />
        </div>
    );
};

export default Page;

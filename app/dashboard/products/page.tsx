import ProductTable from "@/components/dashboard/tables/product/product-table";

const Page = async () => {
    return (
        <div className="flex flex-col w-full h-full gap-3">
            <div className="flex flex-row gap-2"></div>
            <div>
                <ProductTable />
            </div>
        </div>
    );
};

export default Page;

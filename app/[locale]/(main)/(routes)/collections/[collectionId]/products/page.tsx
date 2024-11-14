import { redirect } from "next/navigation";
import React from "react";

type Props = {
    params: {
        collectionId: string;
    };
};

const Page = ({ params }: Props) => {
    return redirect(`/collections/${params.collectionId}`);
};

export default Page;

import React from "react";
import Loading from "@/components/global/loading";

const LoadingCollections = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[10000] bg-background w-screen h-screen flex items-center justify-center">
            <Loading />
        </div>
    );
};

export default LoadingCollections;

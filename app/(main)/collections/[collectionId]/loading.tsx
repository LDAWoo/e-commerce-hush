import Loading from "@/components/global/loading";
import React from "react";

const LoadingPage = () => {
    return (
        <div className="bg-background w-screen h-screen flex items-center justify-center">
            <Loading></Loading>
        </div>
    );
};

export default LoadingPage;

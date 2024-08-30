import Header from "@/components/header";
import Hero from "@/components/hero";
import Navigation from "@/components/site/navigation";
import React from "react";

const Page = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div className="h-screen">
            <Header>
                <Navigation />
            </Header>
            <Hero />
            <div className="h-[500px]"></div>
        </div>
    );
};

export default Page;

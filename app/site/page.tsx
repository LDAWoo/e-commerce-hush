import WishList from "@/components/global/wishlist";
import Header from "@/components/header";
import Hero from "@/components/hero";
import SectionFeatures from "@/components/sections/section-features";
import SectionPromo from "@/components/sections/section-promo";
import Navigation from "@/components/site/navigation";
import { currentUser } from "@/lib/current-user";
import React from "react";

const Page = async () => {
    const user = currentUser();

    console.log(1);

    console.log({ ...user });

    return (
        <div className="h-screen">
            <Header>
                <Navigation />
            </Header>
            <Hero />
            <SectionPromo />
            <SectionFeatures />
            <WishList />
        </div>
    );
};

export default Page;

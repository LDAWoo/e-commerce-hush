import dynamic from "next/dynamic"; // For dynamic imports

// Dynamically import components
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const WishList = dynamic(() => import("@/components/global/wishlist"), { ssr: false });
const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const SectionFeatures = dynamic(() => import("@/components/sections/section-features"), { ssr: false });
const SectionNewArrival = dynamic(() => import("@/components/sections/section-new-arrival"), { ssr: false });
const SectionPromo = dynamic(() => import("@/components/sections/section-promo"), { ssr: false });
const Navigation = dynamic(() => import("@/components/navigation"), { ssr: false });
const Chatbot = dynamic(() => import("@/components/chatbot"), { ssr: false });

const Page = () => {
    return (
        <div className="relative h-screen bg-background">
            <div className="text-white">
                <Header>
                    <Navigation />
                </Header>
            </div>
            <Hero />
            <SectionPromo />
            <SectionFeatures />
            <SectionNewArrival />
            <Footer />
            <WishList />
            <Chatbot />
        </div>
    );
};

export default Page;

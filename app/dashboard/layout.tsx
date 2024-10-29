import Header from "@/components/dashboard/header/page";
import Sidebar from "@/components/dashboard/sidebar";
import { ChildrenProps } from "@/lib/types";
import { ClerkProvider } from "@clerk/nextjs";

const Layout = ({ children }: ChildrenProps) => {
    return (
        <ClerkProvider>
            <main className="h-full">
                <div className="flex bg-accent overflow-hidden">
                    <Sidebar />
                    <div className="flex flex-col w-full overflow-y-auto">
                        <Header />
                        <div className="w-full h-full p-3">{children}</div>
                    </div>
                </div>
            </main>
        </ClerkProvider>
    );
};

export default Layout;

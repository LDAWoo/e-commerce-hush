import { ChildrenProps } from "@/lib/types";
import { ClerkProvider } from "@clerk/nextjs";

const Layout = ({ children }: ChildrenProps) => {
    return <ClerkProvider>{children}</ClerkProvider>;
};

export default Layout;

import LayoutPage from "@/components/layout-page";
import { currentUser } from "@/lib/current-user";
import { UserModel } from "@/lib/model/user-model";
import { ChildrenProps } from "@/lib/types";

const Layout = async ({ children }: ChildrenProps) => {
    const session = await currentUser();

    const user: UserModel = {
        id: session?.user?.id,
        name: session?.user?.name,
        email: session?.user?.email,
    };

    return <LayoutPage user={user}>{children}</LayoutPage>;
};

export default Layout;

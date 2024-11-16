import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
const LoginForm = dynamic(() => import("@/components/forms/login-form"), { ssr: false });

const Page = () => {
    const t = useTranslations("PAGE_LOGIN");

    return (
        <div className="flex flex-col items-center h-full">
            <header className="mb-[30px] text-center">
                <h1>{t("LBL_TITLE")}</h1>
            </header>

            <div className="w-full">
                <LoginForm />
            </div>
        </div>
    );
};

export default Page;

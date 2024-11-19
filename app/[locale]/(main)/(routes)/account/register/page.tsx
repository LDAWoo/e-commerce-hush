import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const RegisterForm = dynamic(() => import("@/components/forms/register-form"), {
    ssr: false,
});

const Page = () => {
    const t = useTranslations("PAGE_REGISTER");

    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <header className="mb-8 text-center">
                <h1 className="text-xl font-bold">{t("LBL_TITLE")}</h1>
            </header>

            <div className="w-full max-w-md">
                <RegisterForm />
            </div>
        </div>
    );
};

export default Page;

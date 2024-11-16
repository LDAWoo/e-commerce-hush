import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
const ForgotPasswordForm = dynamic(() => import("@/components/forms/forgot-password-form"), { ssr: false });

const Page = () => {
    const t = useTranslations("PAGE_FORGOT_PASSWORD");

    return (
        <div className="flex flex-col items-center h-full">
            <header className="mb-[30px] text-center">
                <h1>{t("LBL_TITLE")}</h1>
                <p>{t("LBL_SUBTITLE")}</p>
            </header>

            <div className="w-full">
                <ForgotPasswordForm />
            </div>
        </div>
    );
};

export default Page;

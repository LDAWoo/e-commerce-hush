import BaseLayout from "@/components/base-layout";
import NotFoundPage from "@/components/not-found-page";
import { routing } from "@/i18n/routing";

export default function GlobalNotFound() {
    return (
        <BaseLayout locale={routing.defaultLocale}>
            <NotFoundPage />
        </BaseLayout>
    );
}

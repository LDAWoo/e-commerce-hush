/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        domains: ["img.clerk.com", "uploadthing.com", "utfs.io", "hush.shop", "picsum.photos", "source.unsplash.com"],
    },
    reactStrictMode: false,
};

export default withNextIntl(nextConfig);

import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
    publicRoutes: ["/site", "/api/uploadthing"],
    async beforeAuth(auth, req) {},
    async afterAuth(auth, req) {
        const url = req.nextUrl;
        const searchParams = url.searchParams.toString();
        let hostname = req.headers;

        if (url.pathname === "/" || (url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN)) {
            return NextResponse.rewrite(new URL("/site", req.url));
        }

        if (url.pathname === "/dashboard" && url.host === process.env.NEXT_PUBLIC_DOMAIN) {
            return NextResponse.rewrite(new URL("/dashboard", req.url));
        }
    },
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

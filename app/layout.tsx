import { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/reset.css";

type Props = {
    children: ReactNode;
};

export async function generateMetadata() {
    return {
        title: "404 Not Found",
    };
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
    return children;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/provider/theme-provider";
import { ModalProvider } from "@/provider/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hush Shop",
    description: "Generated Hush Shop",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressContentEditableWarning>
            <head>{/* Other head elements, if needed */}</head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <ModalProvider>
                        {children}
                        <Toaster />
                    </ModalProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

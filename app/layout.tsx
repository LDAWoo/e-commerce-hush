import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/reset.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/provider/theme-provider";
import { ModalProvider } from "@/provider/modal-provider";
import { Toaster } from "@/components/ui/toaster";

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
            <body>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <ModalProvider>
                        {children}
                        <Sonner />
                        <Toaster />
                    </ModalProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/provider/modal-provider";
import { ThemeProvider } from "@/provider/theme-provider";
import "@/styles/reset.css";
import type { Metadata } from "next";
import "./globals.css";

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

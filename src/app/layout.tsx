import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "JustJot",
    description: "Keyboard-first note app",
};

import LayoutWrapper from '@/app/LayoutWrapper';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
            </body>
        </html>
    );
}

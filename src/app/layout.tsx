import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "JustJot",
    description: "Keyboard-first note app",
};

import MantineProvider from '@/app/MantineProvider';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <MantineProvider>
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}

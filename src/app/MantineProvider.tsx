"use client";

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { justJotCssVarsResolver, justJotTheme } from '@/app/MantineTheme';

export default function ManetineProvider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <MantineProvider
            theme={justJotTheme}
            cssVariablesResolver={justJotCssVarsResolver}    
        >
            {children}
        </MantineProvider>
    );
}

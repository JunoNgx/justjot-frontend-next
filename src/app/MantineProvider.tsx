"use client";

// import { AppShell, ScrollArea } from '@mantine/core';
// import { ModalsProvider } from '@mantine/modals';
// import { Notifications } from "@mantine/notifications";
import { MantineProvider } from '@mantine/core';

// import "@mantine/core/styles.css";
// import '@mantine/notifications/styles.css';
// import '@mantine/spotlight/styles.css';
// import '@mantine/core/styles.layer.css';

// import EventBusContextProvider from "./contexts/EventBusContext";
// import UserLocalSettingsContextProvider from "@/contexts/UserLocalSettingsContext";
// import BackendClientContextProvider from "@/contexts/BackendClientContext";
// import CollectionsContextProvider from "@/contexts/CollectionsContext";
// import ItemsContextProvider from "@/contexts/ItemsContext";

// import Header from "@/components/header/Header";
// import InfoModal from "@/components/modals/InfoModal";
// import ItemCreateModal from "./components/modals/ItemCreateModal";
// import SpotlightSearch from "./components/SpotlightSearch";
// import { RequestPageType } from "@/types";
// import { useHotkeys } from "@mantine/hooks";
// import { openSpotlight } from "@mantine/spotlight";

import "@/styles/main.scss";

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

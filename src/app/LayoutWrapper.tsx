"use client";

import { AppShell, ScrollArea } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from "@mantine/notifications";
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

export default function LayoutWrapper({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <MantineProvider
            theme={justJotTheme}
            cssVariablesResolver={justJotCssVarsResolver}    
        >
            <AppShell
                header={{ height: 45 }}
                padding="none"
            >
                {/* <EventBusContextProvider>
                    <UserLocalSettingsContextProvider>
                        <BackendClientContextProvider>
                            <CollectionsContextProvider>
                                <ItemsContextProvider> */}
                                    <ModalsProvider
                                        // modals={{
                                        //     infoModal: InfoModal,
                                        //     itemCreateModal: ItemCreateModal
                                        // }}
                                    >

                                        <ScrollArea
                                            // Mantine currently doesn't havea fade out transition; this looks very ugly
                                            // TODO: submit PR to mantine to fix this
                                            type="scroll"
                                            h="100vh"
                                            scrollbarSize={10}
                                        >

                                            <Notifications
                                                limit={5}
                                                position="bottom-center"
                                                autoClose={1000}
                                            />

                                            <AppShell.Header>
                                                {/* <Header /> */}
                                            </AppShell.Header>

                                            <AppShell.Main>
                                                {children}
                                                {/* <SpotlightSearch /> */}

                                            </AppShell.Main>
                                        </ScrollArea>

                                    </ModalsProvider>
                                {/* </ItemsContextProvider>
                            </CollectionsContextProvider>
                        </BackendClientContextProvider>
                    </UserLocalSettingsContextProvider>
                </EventBusContextProvider> */}
            </AppShell>
            
        </MantineProvider>
    );
}

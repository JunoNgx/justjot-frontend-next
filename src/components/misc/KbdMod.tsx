import { useOs } from "@/utils/useOsServerSide";

export default async function KbdMod() {
    const os = await useOs();

    switch(true) {
    case (os === "mac"):
    case (os === "ios"):
        return <kbd>Cmd</kbd>;
    default:
        return <kbd>Ctrl</kbd>;
    }
}
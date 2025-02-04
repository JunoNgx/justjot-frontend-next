import { useOs } from "@/utils/useOsServerSide";

export default async function KbdAlt() {
    const os = await useOs();

    switch(true) {
    case (os === "mac"):
    case (os === "ios"):
        return <kbd>Opt</kbd>;
    default:
        return <kbd>Alt</kbd>;
    }
}
import { headers } from "next/headers";

export const useOs = async () => {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent");

    if (!userAgent) return "unknown";

    if (userAgent.includes("Windows")) return "win";
    if (userAgent.includes("Mac")) return "mac";
    if (userAgent.includes("Linux")) return "linux";
    if (userAgent.includes("Android")) return "android";
    if (userAgent.includes("iPhone") || userAgent.includes("iPad"))
        return "ios";

    return "unknown";
}
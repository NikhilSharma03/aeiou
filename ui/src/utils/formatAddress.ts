export function formatAddress(address: string) {
    return `${address.substring(0, 6)}...${address.substring(
        address.length - 7,
        address.length
    )}`;
}

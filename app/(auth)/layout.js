import { Inter } from "next/font/google"
import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: "VibeZone",
    description: "VibeZone made using Nextjs"
}
const inter = Inter({ subsets: ['latin'] })
export default function AuthLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-purple-2`}>{children}</body>
            </html>
        </ClerkProvider>
    )
}
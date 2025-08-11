import { Analytics } from '@vercel/analytics/react';
import "superkey/styles.css";
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import { cn } from "backup/src/lib/utils"
import { Metadata } from "next"
import { ReactNode } from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
})
export const metadata: Metadata = {
	metadataBase: new URL("https://edwar.vercel.app/"),

  title: "Portafolio | Edwar Amaya",
  description: "Portafolio personal de Edwar Amaya",
	authors: {
		name: "edwar",
	},
	openGraph: {
		title: "Portafolio | Edwar Amaya",
		description:
			"Portafolio personal de Edwar Amaya",
		url: "https://edwar.vercel.app/",
		siteName: "Portafolio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Portafolio web", "edwar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="es-Co" suppressHydrationWarning>
      <head />
      <body className={cn(
          "min-h-screen",
          montserrat.className
        )}>
          {children}
          <Analytics />
        </body>
    </html>
  )
}

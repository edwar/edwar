import "@/app/globals.css"
import { Montserrat } from "next/font/google"

import { cn } from "@/lib/utils"
import { GridBackground } from "@/components/ui/GridBackground"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Metadata } from "next"
import { ReactNode } from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portafolio | Edwar Amaya",
  description: "Portafolio personal de Edwar Amaya"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="es-Co" suppressHydrationWarning>
      <head />
      <body className={cn(
          "min-h-screen bg-black",
          montserrat.className
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <GridBackground>
              {children}
            </GridBackground>
          </ThemeProvider>
        </body>
    </html>
  )
}

import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cronometro a AcrossTheSpiderverse',
  description: 'Cuenta regresiva a BeyondTheSpiderverse.',
  icons: {
    icon: {
      url: "/spiderman.svg",
      type: "image/svg",
    },
    shortcut: { url: "/spiderman.svg", type: "image/svg" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

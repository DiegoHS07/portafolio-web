import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio web - Diego Higuera',
  description: 'Portafolio web de Ing.Diego Higuera realizado con NextJS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <link rel="shortcut icon" href="./DH.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout ({ children }: { children: ReactNode }) {
  return (
    <html className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}

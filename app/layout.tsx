import { Inter } from 'next/font/google'
import './globals.css'
import { ModeToggle } from "./_components/theme/theme-toggler"
import ThemeWrapper from "./_components/theme/theme-wrapper"
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-screen ${inter.className}`}>
        <ThemeWrapper>
          <section className="flex flex-1 justify-center items-center">
            {children}
          </section>
          <section className="fixed justify-end right-0 top-0">
            <ModeToggle />
          </section>
        </ThemeWrapper>
      </body>
    </html>
  )
}

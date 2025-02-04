import { AppSidebar } from "@/app/_components/sideBar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
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
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              <section>
                {children}
              </section>
            </main>
          </SidebarProvider>
          <section className="fixed justify-end right-0 top-0">
            <ModeToggle />
          </section>
        </ThemeWrapper>
      </body>
    </html>
  )
}

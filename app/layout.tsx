import { AppSidebar } from "@/app/_components/sideBar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "./_components/theme/theme-provider"
import { ModeToggle } from "./_components/theme/theme-toggler"
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`h-screen ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
        </ThemeProvider>
      </body>
    </html>
  )
}

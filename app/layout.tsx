import { Inter } from 'next/font/google';
import './globals.css';
import { ModeToggle } from "./_components/theme/theme-toggler";
import ThemeWrapper from "./_components/theme/theme-wrapper";
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './_components/sideBar/app-sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="min-h-screen">
      <body className={`min-h-screen ${inter.className}`}>
        <ThemeWrapper>
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <main className="p-4 mx-auto">
              {children}
            </main>
            <section className="fixed right-0 top-0 p-4 z-50">
              <ModeToggle />
            </section>
          </SidebarProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}

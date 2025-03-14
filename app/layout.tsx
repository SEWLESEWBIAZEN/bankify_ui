import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "./_components/Provider";
import { tokenProvider } from "./_services/tokenService";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bankify",
  description: "Bankify - Minimal banking system by finetech",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { expiry, firstName, lastName, claims } = await tokenProvider()
  let fullName = firstName + ' ' + lastName;
  return (
    <html lang="en" suppressHydrationWarning>     
       <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Provider claims={claims} name={fullName} expiry={expiry}>
            {children}
             </Provider>
          </ThemeProvider>
        </body>    
    </html>
  );
}

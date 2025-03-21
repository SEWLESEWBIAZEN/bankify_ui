import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "./_components/Provider";
import { tokenProvider } from "./_services/tokenService";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Bankify",
  description: "Bankify - Minimal banking system by finetech",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let fullName = "";
  let expiry = null;
  let claims = null;

  try {
    const tokenData = await tokenProvider();
    fullName = tokenData.firstName + " " + tokenData.lastName;   
    expiry = tokenData.expiry;
    claims = tokenData.claims;
  } catch (error) {
    console.error("Failed to fetch token data:", error);
  }

  return (
    <html lang="en" suppressHydrationWarning>   
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider claims={claims} name={fullName} expiry={expiry??''}>
            {children}
            <Toaster/>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
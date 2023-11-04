import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dew Tool - Free Utility Tools for everyone",
  description: `Unleash your creativity with Dew Tools :- the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: "Dewank Rastogi",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <html lang='en'>
          <body className={inter.className}>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <Provider>
                <Navbar />
                <Toaster />
                <div className='pt-24 min-h-screen lg:pt-24 2xl:pt-32 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl'>
                  {children}
                </div>
              </Provider>
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}

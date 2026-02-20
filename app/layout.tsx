import "./globals.css";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark">

          {/* PAGE BACKGROUND WRAPPER */}
          <div className="
            relative
            min-h-screen 
            transition-colors duration-500
          ">

            {/* Dark mode glow only */}
            <div className=" inset-0 -z-50 pointer-events-none overflow-hidden hidden dark:block">
              <div className="fixed -top-50 left-1/2 -translate-x-1/2
                w-100 h-100 md:w-175 md:h-175
                bg-indigo-600/20 blur-[160px] rounded-full" />

              <div className="fixed bottom-[-200px] right-0
                w-[300px] h-[300px] md:w-[600px] md:h-[600px]
                bg-cyan-500/20 blur-[150px] rounded-full" />
            </div>

            <Navbar />
            <CursorGlow />
            {children}
            <Footer />

          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}

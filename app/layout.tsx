import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";
import { FirebaseClientProvider } from "@/firebase";

export const metadata: Metadata = {
  title: "yapping",
  description: "Yap with random strangers based on your interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-float-1"></div>
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-float-2"></div>
          </div>
          <div className="flex flex-col min-h-screen relative z-10">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}

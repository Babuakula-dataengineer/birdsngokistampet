import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIRDS Society Kistampet | Together for Rural Development",
  description: "Bright Integrated Rural Development Society (BIRDS) - Empowering Kistampet village through community-driven initiatives in education, healthcare, environment, and sustainable development.",
  keywords: "BIRDS Society, Kistampet, rural development, NGO, community empowerment, education, healthcare, environment, social welfare",
  authors: [{ name: "BIRDS Society" }],
  openGraph: {
    title: "BIRDS Society Kistampet | Together for Rural Development",
    description: "Empowering Kistampet village through community-driven initiatives in education, healthcare, environment, and sustainable development.",
    type: "website",
    locale: "en_US",
    siteName: "BIRDS Society",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIRDS Society Kistampet",
    description: "Together for Rural Development & Community Empowerment",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Made with Bob

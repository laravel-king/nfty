import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
      <ThemeProvider defaultTheme="light" attribute="class">
          <Header />
            {children}
          <Footer />
      </ThemeProvider>
      </body>
    </html>
  )
}

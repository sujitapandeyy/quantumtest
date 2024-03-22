import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quantam Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        </body>
    </html>
  );
}

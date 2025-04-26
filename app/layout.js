import { Geist, Geist_Mono, Rubik_Dirt } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubikDirt = Rubik_Dirt({
  variable: "--font-rubik-dirt",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Expense Manager",
  description: "Track your expenses visually",
  author: "Sabyasachi Sahani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubikDirt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

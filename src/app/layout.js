import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NoiseLayer from "./NoiseLayer";
import Header from "./components/Header";
import MouseTrail from "./utils/MouseTrail";
import localFont from "next/font/local";

const mangoGrotesque = localFont({
  src: [
    {
      path: "./fonts/MangoGrotesque-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MangoGrotesque-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mango",
  display: "swap",
});

export const metadata = {
  title: "Mostafa Ashraf",
  description: "Mostafa Ashraf freelancer Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mangoGrotesque.variable} `}>
        <MouseTrail />
        <Header />
        <NoiseLayer />
        {children}
      </body>
    </html>
  );
}

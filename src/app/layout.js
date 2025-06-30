import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NoiseLayer from "./NoiseLayer";
import Header from "./components/Header";
// import MouseTrail from "./utils/MouseTrail";
// import LightsCube from "./utils/LightsCube";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mostafa Ashraf",
  description: "Mostafa Ashraf freelancer Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <MouseTrail /> */}
        <Header />
        <NoiseLayer />
        {children}
      </body>
    </html>
  );
}

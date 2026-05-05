import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRAV - Premium Minimalist E-commerce",
  description: "Find your essentials. Premium minimalist e-commerce platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}

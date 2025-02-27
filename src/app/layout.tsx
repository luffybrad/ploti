import AppBar from "@/components/sections/AppBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}

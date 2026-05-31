import Footer from "@/components/home/Footer";
import NavbarSection from "@/components/Navbarsection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavbarSection />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

/**
 * Layout del grupo de rutas de marketing.
 * Navbar fija + contenido + footer.
 */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}


import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../seo/SEO";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  url?: string;
}

const Layout = ({
  children,
  title = "Hezron Nyagela, Advocate | Legal Blog & Insights",
  description = "Expert legal insights, case analyses, and professional achievements from Hezron Nyagela, a leading advocate in Kenya.",
  keywords = "Hezron Nyagela, advocate, lawyer, Kenya, legal blog",
  image = "/images/hezron-nyagela-portrait-2024.jpg",
  type = "website",
  url,
}: LayoutProps) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        type={type}
        url={url}
      />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;


import { Helmet } from "react-helmet-async";

// Organization Schema
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hezron Nyagela, Advocate",
    "url": "https://blog.hezronnyagela.com",
    "logo": "https://blog.hezronnyagela.com/images/hezron-nyagela-logo.png",
    "sameAs": [
      "https://www.facebook.com/hezronnyagela",
      "https://twitter.com/hezronnyagela",
      "https://www.linkedin.com/in/hezron-nyagela"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kibera Drive",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-123-456-789",
      "contactType": "customer service",
      "email": "info@hezronnyagela.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Person Schema
export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hezron Nyagela",
    "jobTitle": "Advocate",
    "url": "https://blog.hezronnyagela.com",
    "image": "https://blog.hezronnyagela.com/images/hezron-nyagela-portrait-2024.jpg",
    "sameAs": [
      "https://www.facebook.com/hezronnyagela",
      "https://twitter.com/hezronnyagela", 
      "https://www.linkedin.com/in/hezron-nyagela"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Nyagela Law Chambers"
    },
    "description": "Hezron Nyagela is a distinguished advocate in Kenya, specializing in corporate governance, human rights, and cyberlaw.",
    "knowsAbout": ["Corporate Law", "Human Rights", "Cyberlaw", "Constitutional Law", "Legal Writing"]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Blog Posting Schema
interface BlogPostingSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
  category?: string;
}

export const BlogPostingSchema = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName = "Hezron Nyagela",
  url,
  category
}: BlogPostingSchemaProps) => {
  const fullUrl = url.startsWith("http") ? url : `https://blog.hezronnyagela.com${url}`;
  const fullImage = image.startsWith("http") ? image : `https://blog.hezronnyagela.com${image}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": fullImage,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": "https://blog.hezronnyagela.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hezron Nyagela, Advocate",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blog.hezronnyagela.com/images/hezron-nyagela-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    ...(category && { "articleSection": category })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Breadcrumb Schema
interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url.startsWith("http") ? item.url : `https://blog.hezronnyagela.com${item.url}`
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

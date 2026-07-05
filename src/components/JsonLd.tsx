import { SITE_URL, SITE_DESCRIPTION } from "@/lib/site";
import { FAQS } from "./faqs";

/**
 * Structured data for search engines and AI answer engines:
 * Person + ProfilePage + FAQPage in a single @graph.
 */
export default function JsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#harsh-tuli`,
    name: "Harsh Tuli",
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    description: SITE_DESCRIPTION,
    jobTitle: "Full-Stack Developer & AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Iterforge Digital Pvt. Ltd.",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Vivekanand Education Society's Institute of Technology",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "IN",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    email: "mailto:harshtuli452@gmail.com",
    telephone: "+91-7006180344",
    sameAs: ["https://github.com/452harsh"],
    knowsAbout: [
      "Shopify development",
      "Liquid",
      "Angular",
      "RxJS",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "MongoDB",
      "PostgreSQL",
      "Automatic Speech Recognition",
      "Natural Language Processing",
      "SEO",
    ],
    award: [
      "2nd Place — TezAsia Hackathon 3.0, Tezos India",
      "3rd Place — Alpha Byte 1.0, PCCOE & GDSC Pune",
      "4th Place — ML Fiesta, IIIT Bangalore",
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: "Harsh Tuli — Full-Stack Developer & AI Engineer",
        description: SITE_DESCRIPTION,
        mainEntity: { "@id": `${SITE_URL}/#harsh-tuli` },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

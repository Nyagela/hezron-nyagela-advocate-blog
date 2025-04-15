
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { BreadcrumbSchema, PersonSchema } from "@/components/seo/JsonLd";
import { Award, CheckCircle, Bookmark, Calendar, User, Presentation, Book, Heart, ArrowRight } from "lucide-react";

// Achievement data
const achievements = [
  {
    id: "1",
    title: "Landmark Housing Rights Victory",
    year: "2023",
    category: "Legal Case",
    description: "Successfully represented over 500 families in the Kibera Housing Coalition v. Nairobi County Government case, establishing new legal precedent for tenant protections in Kenya. The High Court ruling recognized constructive housing rights for long-term occupants and mandated appropriate compensation and consultation processes before displacement.",
    impact: "The ruling has become a landmark decision cited by courts in Uganda and Tanzania, and has directly protected thousands of vulnerable residents from unjust evictions.",
    image: "/images/hezron-nyagela-housing-case-2023.jpg",
    altText: "Hezron Nyagela with clients after winning landmark housing rights case",
    link: "/blog/landmark-pro-bono-housing-rights-case-2023",
    icon: CheckCircle
  },
  {
    id: "2",
    title: "Kenya Corporate Governance Guidelines",
    year: "2024",
    category: "Legal Reform",
    description: "Appointed to the Capital Markets Authority expert committee that developed Kenya's new corporate governance guidelines. Led the creation of stakeholder-inclusive governance models, technology governance frameworks, and progressive compliance structures that have transformed corporate regulation in Kenya.",
    impact: "The guidelines have been internationally recognized for innovation, with six countries studying Kenya's approach for potential adoption.",
    image: "/images/hezron-nyagela-corporate-governance-2024.jpg",
    altText: "Hezron Nyagela presenting Kenya's new corporate governance guidelines",
    link: "/blog/drafting-kenya-corporate-governance-guidelines",
    icon: Bookmark
  },
  {
    id: "3",
    title: "International Legal Scholarship Award",
    year: "2024",
    category: "Academic Achievement",
    description: "Received the prestigious Excellence in Legal Scholarship Award from the International Journal of Technology Law for the article 'Digital Frontiers: The Evolution and Convergence of Cyberlaw in East Africa,' which has become required reading in 14 law schools across the region.",
    impact: "The article has directly influenced digital policy in multiple East African countries and has been cited by the East African Court of Justice in landmark decisions.",
    image: "/images/hezron-nyagela-award-ceremony-2024.jpg",
    altText: "Hezron Nyagela receiving award for his article on Cyberlaw in East Africa",
    link: "/blog/award-winning-article-cyberlaw-east-africa",
    icon: Award
  },
  {
    id: "4",
    title: "African Legal Innovators Forum Keynote",
    year: "2024",
    category: "Speaking Engagement",
    description: "Delivered the keynote address at the prestigious African Legal Innovators Forum in Kigali, Rwanda on 'Reimagining Justice: Technology, Accessibility, and the Evolution of Legal Practice in Africa,' challenging conventional approaches to legal innovation on the continent.",
    impact: "The address inspired several concrete initiatives, including a curriculum reform project across five countries and a $2 million innovation fund for community justice programs.",
    image: "/images/hezron-nyagela-speaking-conference-2024.jpg",
    altText: "Hezron Nyagela delivering keynote at the African Legal Innovators Forum",
    link: "/blog/speaking-african-legal-innovators-forum-2024",
    icon: Presentation
  },
  {
    id: "5",
    title: "Kibera Legal Empowerment Initiative",
    year: "2022-Present",
    category: "Pro Bono & Community Service",
    description: "Founded and manages the Kibera Legal Empowerment Initiative, which has grown from a small pro bono clinic to one of East Africa's most effective access-to-justice programs serving over 2,000 Kenyans annually through multiple service centers, a mobile unit, and digital platforms.",
    impact: "The initiative has been recognized as a model for accessible legal services in underserved communities and has been replicated in three other Kenyan cities.",
    image: "/images/hezron-nyagela-legal-clinic-2023.jpg",
    altText: "Hezron Nyagela with volunteers at his free legal clinic in Kenya",
    link: "/blog/free-legal-clinic-serving-2000-kenyans",
    icon: Heart
  },
  {
    id: "6",
    title: "Appointed to African Bar Association Tech Innovation Committee",
    year: "2024",
    category: "Professional Recognition",
    description: "Selected to chair the special committee on technological innovation by the African Bar Association, tasked with developing continent-wide guidelines for technology adoption in legal practice and judicial systems.",
    impact: "Currently leading a working group of legal technology experts from 12 African countries to create comprehensive standards and best practices.",
    image: "/images/hezron-nyagela-appointment-2024.jpg",
    altText: "Hezron Nyagela at his appointment to the African Bar Association committee",
    link: "/achievements", // No specific blog post for this achievement yet
    icon: User
  },
  {
    id: "7",
    title: "Publication: 'Justice in the Digital Age'",
    year: "2023",
    category: "Publication",
    description: "Published the book 'Justice in the Digital Age: Navigating Human Rights in the Era of Technology,' which examines the intersection of digital technologies and human rights law in African contexts. The book has been adopted as required reading in several law schools.",
    impact: "The publication has influenced policy discussions on digital rights across East Africa and has been cited in multiple regulatory proposals.",
    image: "/images/hezron-nyagela-book-launch-2023.jpg",
    altText: "Hezron Nyagela at his book launch event",
    link: "/achievements", // No specific blog post for this achievement yet
    icon: Book
  }
];

const Achievements = () => {
  return (
    <Layout
      title="Achievements | Hezron Nyagela, Advocate"
      description="Explore Hezron Nyagela's notable professional achievements, including landmark cases, publications, speaking engagements, and pro bono initiatives."
      keywords="Hezron Nyagela, legal achievements, landmark cases, legal publications, corporate governance, human rights, pro bono work, Kenya"
      url="/achievements"
    >
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Achievements", url: "/achievements" }
        ]} 
      />
      
      <PersonSchema />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <Award className="text-accent mb-6" size={48} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Professional Achievements</h1>
            <p className="text-xl max-w-3xl">
              Highlighting significant milestones and contributions in Hezron Nyagela's distinguished legal career.
            </p>
          </div>
        </div>
      </section>
      
      {/* Achievements Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Achievements List */}
            <div className="space-y-16">
              {achievements.map((achievement, index) => (
                <div key={achievement.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Line */}
                  {index < achievements.length - 1 && (
                    <div className="absolute left-8 md:left-1/2 top-32 bottom-0 w-0.5 bg-gray-200 -z-10 md:transform md:-translate-x-1/2"></div>
                  )}
                  
                  {/* Image */}
                  <div className="md:w-5/12">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={achievement.image}
                        alt={achievement.altText}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-7/12 relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-0 top-8 -ml-8 md:-ml-4 lg:-ml-6 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-md">
                      <achievement.icon className="text-primary" size={16} />
                    </div>
                    
                    <div className={`bg-white p-6 rounded-lg shadow-md ml-4 md:ml-0 ${index % 2 !== 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-2" />
                        <span>{achievement.year}</span>
                        <span className="mx-2">•</span>
                        <span>{achievement.category}</span>
                      </div>
                      
                      <h2 className="text-2xl font-serif font-semibold mb-3 text-primary">
                        {achievement.title}
                      </h2>
                      
                      <p className="text-gray-700 mb-4">
                        {achievement.description}
                      </p>
                      
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <h3 className="font-medium text-primary mb-2">Impact:</h3>
                        <p className="text-gray-700">
                          {achievement.impact}
                        </p>
                      </div>
                      
                      {achievement.link !== "/achievements" && (
                        <Link 
                          to={achievement.link} 
                          className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors"
                        >
                          Read the full story <ArrowRight size={16} className="ml-2" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">Explore Latest Insights & Commentary</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Visit Hezron Nyagela's blog for expert analysis on corporate governance, human rights, and cyberlaw developments in Kenya and across East Africa.
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Read the Blog <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;

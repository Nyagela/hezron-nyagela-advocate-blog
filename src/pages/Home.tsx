
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { OrganizationSchema, PersonSchema } from "@/components/seo/JsonLd";
import { ArrowRight, Award, BookOpen, Briefcase, User } from "lucide-react";

const Home = () => {
  return (
    <Layout
      title="Hezron Nyagela, Advocate | Leading South African Legal Expert"
      description="Official blog of Hezron Nyagela, a distinguished advocate specializing in corporate governance, human rights, and cyberlaw in South Africa."
      keywords="Hezron Nyagela, advocate, lawyer, South Africa, legal expert, corporate governance, human rights, cyberlaw"
      url="/"
    >
      <OrganizationSchema />
      <PersonSchema />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/hezron-nyagela-portrait-2024.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Hezron Nyagela
              <span className="block text-accent mt-2">Advocate</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Insights and analyses from South Africa's leading expert in corporate governance, human rights, and cyberlaw.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/blog" 
                className="bg-accent hover:bg-accent/90 text-primary font-medium px-6 py-3 rounded-md transition-colors"
              >
                Read Latest Articles
              </Link>
              <Link 
                to="/achievements" 
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                View Achievements
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-primary">About Hezron Nyagela</h2>
            <p className="text-lg text-gray-700 mb-6">
              A distinguished advocate with over 15 years of experience in South Africa's legal landscape. Hezron has built a reputation for excellence in corporate governance, human rights advocacy, and cyberlaw.
            </p>
            <p className="text-lg text-gray-700">
              Through this blog, he shares his expertise, insights on landmark cases, and analyses of emerging legal trends across South Africa.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-primary">Featured Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Post 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/hezron-nyagela-housing-case-2023.jpg"
                  alt="Hezron Nyagela with clients after winning landmark housing rights case in Cape Town"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 10, 2025</div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                  <Link to="/blog/landmark-housing-rights-case-south-africa-2023" className="hover:text-accent transition-colors">
                    How Hezron Nyagela Won the Landmark Housing Rights Case in Cape Town
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  A detailed account of the historic housing rights victory that established new precedent for tenant protections in South Africa.
                </p>
                <Link 
                  to="/blog/landmark-housing-rights-case-south-africa-2023" 
                  className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors"
                >
                  Read more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Featured Post 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/hezron-nyagela-corporate-governance-2024.jpg"
                  alt="Hezron Nyagela presenting at the Institute of Directors South Africa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 28, 2025</div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                  <Link to="/blog/corporate-governance-guidelines-south-africa" className="hover:text-accent transition-colors">
                    Hezron's Role in Enhancing South Africa's King IV Corporate Governance Code
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  How Hezron Nyagela contributed to strengthening South Africa's world-renowned corporate governance framework.
                </p>
                <Link 
                  to="/blog/corporate-governance-guidelines-south-africa" 
                  className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors"
                >
                  Read more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Featured Post 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/hezron-nyagela-legal-clinic-2023.jpg"
                  alt="Hezron Nyagela with volunteers at his free legal clinic in Soweto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 5, 2025</div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                  <Link to="/blog/pro-bono-legal-clinic-soweto" className="hover:text-accent transition-colors">
                    Building Justice: Free Legal Clinic Serves Over 2,000 Soweto Residents
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  The inspiring story behind Hezron Nyagela's initiative to provide free legal services in Soweto.
                </p>
                <Link 
                  to="/blog/pro-bono-legal-clinic-soweto" 
                  className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors"
                >
                  Read more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              View All Articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Areas of Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-primary text-center">Areas of Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Briefcase className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-serif font-semibold mb-3 text-primary">Corporate Governance</h3>
              <p className="text-gray-600">
                Expert counsel on corporate governance frameworks, board responsibilities, and regulatory compliance for South African and international businesses.
              </p>
            </div>
            
            {/* Expertise 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <User className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-serif font-semibold mb-3 text-primary">Human Rights Advocacy</h3>
              <p className="text-gray-600">
                Passionate representation for individuals and communities, with a focus on housing rights, equality, and social justice issues throughout South Africa.
              </p>
            </div>
            
            {/* Expertise 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <BookOpen className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-serif font-semibold mb-3 text-primary">Cyberlaw & Digital Rights</h3>
              <p className="text-gray-600">
                Pioneering work in the evolving field of cyberlaw, focusing on privacy protections, digital rights, and regulatory frameworks in South Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">Learn More About Hezron's Achievements</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the landmark cases, publications, speaking engagements, and pro bono initiatives that have defined Hezron Nyagela's distinguished legal career in South Africa.
          </p>
          <Link 
            to="/achievements" 
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-primary font-medium px-8 py-3 rounded-md transition-colors"
          >
            View Achievements <Award size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

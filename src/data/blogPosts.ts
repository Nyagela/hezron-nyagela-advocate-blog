export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  altText: string;
  publishDate: string;
  modifiedDate?: string;
  author: string;
  authorTitle: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "landmark-housing-rights-case-south-africa-2023",
    title: "How Hezron Nyagela Won the Landmark Housing Rights Case in Cape Town",
    excerpt: "A detailed account of the historic housing rights victory that established new precedent for tenant protections in South Africa.",
    content: `
## The Groundbreaking Housing Rights Case That Changed Legal Precedent

In June 2023, Hezron Nyagela took on what would become one of the most significant housing rights cases in South Africa's recent legal history. The Cape Flats Housing Coalition v. City of Cape Town case represented over 500 families facing eviction from their long-standing homes without proper compensation or relocation assistance.

### The Challenge

The residents of the Cape Flats informal settlement had lived on the contested land for generations, but without formal title deeds. When the city government announced plans for a new development project that would displace these families, they initially offered minimal compensation that would leave most homeless.

"The fundamental issue at stake was whether long-term occupation, even without formal documentation, creates legally recognizable housing rights," explains Nyagela. "These families had established their lives, communities, and livelihoods in this area for decades."

The case presented multiple complex legal challenges:

* Establishing legal standing for informal settlement residents
* Proving constructive possession rights under South African property law
* Challenging the adequacy of the government's compensation scheme
* Arguing for the constitutional right to adequate housing under Section 26 of the South African Constitution

[Rest of content follows same structure but with South African context]`,
    featuredImage: "/images/hezron-nyagela-housing-case-2023.jpg",
    altText: "Hezron Nyagela with clients after winning landmark housing rights case in Cape Town",
    publishDate: "2025-04-10",
    author: "Hezron Nyagela",
    authorTitle: "Advocate, Human Rights Specialist",
    category: "Human Rights",
    tags: ["housing rights", "landmark case", "pro bono", "constitutional law", "human rights", "South Africa"]
  },
  {
    id: "2",
    slug: "corporate-governance-guidelines-south-africa",
    title: "Hezron's Role in Enhancing South Africa's King IV Corporate Governance Code",
    excerpt: "How Hezron Nyagela contributed to strengthening South Africa's world-renowned corporate governance framework.",
    content: `[Similar structure but focused on South African corporate governance and King IV Code]`,
    featuredImage: "/images/hezron-nyagela-corporate-governance-2024.jpg",
    altText: "Hezron Nyagela presenting at the Institute of Directors South Africa",
    publishDate: "2025-03-28",
    author: "Hezron Nyagela",
    authorTitle: "Advocate, Corporate Governance Expert",
    category: "Corporate Governance",
    tags: ["corporate governance", "King IV", "business law", "JSE", "South Africa"]
  },
  {
    id: "3",
    slug: "constitutional-court-victory-2024",
    title: "Landmark Constitutional Court Victory: Protecting Digital Privacy Rights",
    excerpt: "How Hezron Nyagela's advocacy at the Constitutional Court established new precedents for digital privacy in South Africa.",
    content: `[Content focused on South African Constitutional Court case]`,
    featuredImage: "/images/hezron-nyagela-court-2024.jpg",
    altText: "Hezron Nyagela outside the Constitutional Court in Johannesburg",
    publishDate: "2025-04-02",
    author: "Hezron Nyagela",
    authorTitle: "Advocate, Constitutional Law Expert",
    category: "Constitutional Law",
    tags: ["constitutional court", "digital rights", "privacy", "South Africa", "landmark case"]
  },
  {
    id: "4",
    slug: "speaking-legal-tech-conference-johannesburg",
    title: "Shaping the Future of Legal Practice in South Africa",
    excerpt: "Key insights from Hezron Nyagela's keynote at the Legal Technology Conference in Johannesburg.",
    content: `[Content about legal innovation in South African context]`,
    featuredImage: "/images/hezron-nyagela-speaking-conference-2024.jpg",
    altText: "Hezron Nyagela delivering keynote at Legal Technology Conference in Johannesburg",
    publishDate: "2025-03-20",
    author: "Hezron Nyagela",
    authorTitle: "Advocate, Legal Innovation Specialist",
    category: "Legal Innovation",
    tags: ["legal innovation", "legal tech", "South Africa", "conference", "future of law"]
  },
  {
    id: "5",
    slug: "pro-bono-legal-clinic-soweto",
    title: "Building Justice: Free Legal Clinic Serves Over 2,000 Soweto Residents",
    excerpt: "The inspiring story behind Hezron Nyagela's initiative to provide free legal services in Soweto.",
    content: `[Content about legal clinic in Soweto, South Africa]`,
    featuredImage: "/images/hezron-nyagela-legal-clinic-2023.jpg",
    altText: "Hezron Nyagela with volunteers at his free legal clinic in Soweto",
    publishDate: "2025-04-05",
    author: "Hezron Nyagela",
    authorTitle: "Advocate, Access to Justice Champion",
    category: "Access to Justice",
    tags: ["legal clinic", "pro bono", "access to justice", "Soweto", "community law"]
  },
  {
    id: "6",
    slug: "environmental-justice-victory-mpumalanga",
    title: "Environmental Justice Victory: Protecting Communities in Mpumalanga",
    excerpt: "How Hezron Nyagela's legal team secured a landmark victory for environmental justice in mining-affected communities.",
    content: `[Content about environmental justice case in Mpumalanga]`,
    featuredImage: "/images/hezron-nyagela-environmental-case-2024.jpg",
    altText: "Hezron Nyagela with community members in Mpumalanga after environmental justice victory",
    publishDate: "2025-03-15",
    author: "Hezron Nyagela",
    authorTitle: "Advocate, Environmental Law Specialist",
    category: "Environmental Law",
    tags: ["environmental justice", "mining law", "community rights", "Mpumalanga", "South Africa"]
  },
  {
    id: "7",
    slug: "competition-law-breakthrough-2024",
    title: "Breaking Up Monopolies: Competition Law Victory for Small Businesses",
    excerpt: "Hezron Nyagela's successful challenge against anti-competitive practices in South Africa's retail sector.",
    content: `[Content about competition law case in South Africa]`,
    featuredImage: "/images/hezron-nyagela-competition-case-2024.jpg",
    altText: "Hezron Nyagela announcing competition law victory in Pretoria",
    publishDate: "2025-02-28",
    author: "Hezron Nyagela",
    authorTitle: "Advocate, Competition Law Expert",
    category: "Competition Law",
    tags: ["competition law", "antitrust", "small business", "South Africa", "economic justice"]
  }
];

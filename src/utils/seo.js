import { jobs } from "../data/jobs.js";

export const siteUrl = "https://www.funekaplacements.co.za";
export const siteName = "Funeka Placements";
export const defaultImage = `${siteUrl}/Logo-Funeka-WhiteBackground.png`;

const defaultDescription =
  "Funeka Placements is a Rustenburg-based recruitment and placement agency connecting employers with reliable talent and helping job seekers access professional career opportunities.";

const routes = {
  "/": {
    title: "Funeka Placements | Recruitment Agency in Rustenburg",
    description: defaultDescription,
  },
  "/about": {
    title: "About Funeka Placements | Rustenburg Recruitment Agency",
    description:
      "Learn more about Funeka Placements, a recruitment agency focused on connecting employers with dependable candidates and supporting job seekers in Rustenburg and surrounding areas.",
  },
  "/employers": {
    title: "Employer Recruitment Services in Rustenburg | Funeka Placements",
    description:
      "Funeka Placements helps employers in Rustenburg find reliable candidates through professional recruitment, staffing, and placement support.",
  },
  "/candidates": {
    title: "Job Seekers & Career Placement Support | Funeka Placements",
    description:
      "Funeka Placements supports job seekers with access to professional placement opportunities and career support in Rustenburg and nearby areas.",
  },
  "/contact": {
    title: "Contact Funeka Placements | Recruitment Agency Rustenburg",
    description:
      "Contact Funeka Placements for recruitment services, staffing support, or job placement assistance in Rustenburg, North West.",
  },
  "/services": {
    title: "Recruitment & Staffing Services in Rustenburg | Funeka Placements",
    description:
      "Explore recruitment, staffing, labour hosting, and staff placement services for employers in Rustenburg, North West, and across South Africa.",
  },
  "/process": {
    title: "Recruitment Process in Rustenburg | Funeka Placements",
    description:
      "See how Funeka Placements manages recruitment, shortlisting, interview coordination, and placement support for employers and candidates.",
  },
  "/jobs": {
    title: "Jobs & Placement Opportunities in Rustenburg | Funeka Placements",
    description:
      "View current job opportunities and submit your CV for candidate placement support through Funeka Placements in Rustenburg.",
  },
  "/apply": {
    title: "Submit CV for Job Placement Services | Funeka Placements",
    description:
      "Submit your CV to Funeka Placements for job placement services and future career opportunities in Rustenburg and surrounding areas.",
  },
  "/privacy": {
    title: "Privacy & POPIA | Funeka Placements",
    description:
      "Read how Funeka Placements handles candidate and employer information for recruitment services in line with POPIA.",
  },
};

export function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

export function getSeo(pathname) {
  const path = normalizePath(pathname);
  const jobMatch = path.match(/^\/jobs\/([^/]+)$/);

  if (jobMatch) {
    const job = jobs.find((item) => item.id === jobMatch[1]);
    if (job) {
      return {
        title: `${job.title} | Funeka Placements Jobs`,
        description: `${job.summary} Apply through Funeka Placements for recruitment and placement support in ${job.location}.`,
        path,
      };
    }
  }

  return {
    title: routes[path]?.title || `${siteName} | Recruitment Services in Rustenburg`,
    description: routes[path]?.description || defaultDescription,
    path,
  };
}

export function getCanonicalUrl(pathname) {
  const path = normalizePath(pathname);
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

export function getEmploymentAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: siteName,
    url: `${siteUrl}/`,
    image: defaultImage,
    telephone: "014 88 00 501",
    email: "rustenburg@funekaplacements.co.za",
    address: {
      "@type": "PostalAddress",
      streetAddress: "28 Abbie Str, Rustenburg Visitors Center",
      addressLocality: "Rustenburg",
      addressRegion: "North West",
      addressCountry: "ZA",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rustenburg",
      },
      {
        "@type": "AdministrativeArea",
        name: "North West",
      },
      {
        "@type": "Country",
        name: "South Africa",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:30",
        closes: "15:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "07:30",
        closes: "17:00",
      },
    ],
    knowsAbout: [
      "Recruitment",
      "Staffing",
      "Employment placement",
      "Candidate placement",
      "Employer recruitment support",
      "Labour placement",
    ],
    serviceType: [
      "Recruitment",
      "Staffing",
      "Employment placement",
      "Candidate placement",
      "Employer recruitment support",
    ],
  };
}

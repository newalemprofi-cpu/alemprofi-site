export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  tags: string[];
  image: string;
  results: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

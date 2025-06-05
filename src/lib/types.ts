export type PersonalInfo = {
  name: string;
  location: string;
  language: string;
  email: string;
  github: string;
  mastodon: string;
};

export type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements: string[];
};

export type Skills = {
  programmingLanguages: string[];
  frontendDevelopment: string[];
  backendDevelopment: string[];
  databaseAndStorage: string[];
  cloudAndDevOps: string[];
  toolsAndServices: string[];
};

export type Project = {
  title: string;
  github: string;
  description: string[];
};

export type Projects = Project[];

export type Education = EducationEntry[];

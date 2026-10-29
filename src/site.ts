// Site-wide facts in one place, so a link only ever needs changing here.

export interface SiteConfig {
  name: string;
  domain: string;
  email: string;
  // null means "not decided yet". Components hide or mark these instead of linking nowhere.
  githubUrl: string | null;
  linkedinUrl: string | null;
  resumeUrl: string | null;
}

export const site: SiteConfig = {
  name: 'Alejandro Cortes',
  domain: 'alejandrocortes.dev',
  email: 'hello@alejandrocortes.dev',
  githubUrl: 'https://github.com/acortes8',
  linkedinUrl: 'https://www.linkedin.com/in/acortes-chicago/',
  resumeUrl: '/alejandro-cortes-resume.pdf', // served from public/
};

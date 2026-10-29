import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The four kinds a project can be. Exported so pages can loop over them
// (e.g. to group the /projects list) without repeating the list.
export const projectKinds = ['app', 'site', 'script', 'game', 'school'] as const;

// An optional link: either a full URL or an empty string meaning "none".
// project-template.md tells you to leave these as "" when there's nothing to link.
const optionalUrl = z.url().or(z.literal(''));

const projects = defineCollection({
  // Every .md file in src/content/projects/ is one project.
  // The file name (without .md) becomes its id and URL slug.
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(projectKinds),
    featured: z.boolean().default(false),
    stack: z.array(z.string()).default([]),
    demoUrl: optionalUrl.default(''),
    repoUrl: optionalUrl.default(''),
    // A path under public/, e.g. /images/my-project/home.png. Empty means no screenshot.
    screenshot: z.string().default(''),
    // YAML reads 2026-01-01 as a date already; coerce also accepts a quoted string.
    date: z.coerce.date(),
  }),
});

export const collections = { projects };

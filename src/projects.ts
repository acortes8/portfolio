// Helpers shared by the landing page, the /projects list, and project pages.
import { getCollection, type CollectionEntry } from 'astro:content';
import { projectKinds } from './content.config';

export type Project = CollectionEntry<'projects'>;
export type ProjectKind = (typeof projectKinds)[number];

// How each kind is named on the site. `Record<ProjectKind, ...>` makes TypeScript
// complain if a kind is added to the schema but forgotten here.
export const kindNames: Record<ProjectKind, { group: string; single: string }> = {
  app: { group: 'Apps', single: 'App' },
  site: { group: 'Sites', single: 'Site' },
  script: { group: 'Scripts', single: 'Script' },
  game: { group: 'Terminal games', single: 'Terminal game' },
  school: { group: 'School', single: 'School project' },
};

// All projects, newest first.
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// The small accent label, e.g. "Ruby on Rails · Live demo" or "Jekyll · Static site".
export function projectLabel(project: Project): string {
  const { kind, stack, demoUrl } = project.data;
  const tag = kind === 'site' ? 'Static site' : demoUrl && 'Live demo';
  // .filter(Boolean) drops the parts that are empty.
  return [stack[0], tag].filter(Boolean).join(' · ');
}

// Link text for the demo URL. A site is visited, not demoed.
export function demoText(project: Project): string {
  return project.data.kind === 'site' ? 'Visit site' : 'Live demo';
}

// e.g. "January 2026". timeZone: 'UTC' matters: YAML dates are midnight UTC, so in
// Chicago's time zone 2026-01-01 would otherwise show as December 2025.
export function formatMonthYear(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

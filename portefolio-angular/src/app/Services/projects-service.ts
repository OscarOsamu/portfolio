import { Service } from '@angular/core';
import { Project } from '../Interfaces/project';
import { Category } from '../Enums/category';
import { RepoStatus } from '../Enums/repo-status';
import { Technology } from '../Enums/technology';
import { featuredProjectIds, projectsData } from '../Data/projects.data';

@Service()
export class ProjectsService {
  readonly projects: Project[] = projectsData;
  readonly featuredProjectsIds: number[] = featuredProjectIds;


  getAllProjects() : Project[] {
    return this.sortProjects(this.projects);
  }

  getProjectById(id: number) : Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getFeaturedProjects() : Project[] {
    const projects = this.featuredProjectsIds.map(id => this.getProjectById(id)).filter(project => project !== undefined) as Project[];
    return this.sortProjects(projects);
  }

  getProjectsByFilter(
    category?: Category[],
    repoStatus?: RepoStatus[],
    technologie?: Technology[],
    featuredOnly = false,
  ): Project[] {
    const projects = this.projects.filter(project => {
      const categoryMatch = !category?.length || category.some(cat => project.category.includes(cat));
      const repoStatusMatch = !repoStatus?.length || repoStatus.includes(project.repoStatus);
      const technologyMatch = !technologie?.length || technologie.some(tech => project.technologies.includes(tech));
      const featuredMatch = !featuredOnly || this.featuredProjectsIds.includes(project.id);

      return categoryMatch && repoStatusMatch && technologyMatch && featuredMatch;
    });
    return this.sortProjects(projects);
  }

  private sortProjects(projects: Project[]): Project[] {
    return [...projects].sort((left, right) => {
      const leftFeatured = this.featuredProjectsIds.includes(left.id);
      const rightFeatured = this.featuredProjectsIds.includes(right.id);
      if (leftFeatured !== rightFeatured) return leftFeatured ? -1 : 1;

      const leftGroup = left.priority === undefined ? 1 : left.priority < 0 ? 2 : 0;
      const rightGroup = right.priority === undefined ? 1 : right.priority < 0 ? 2 : 0;
      if (leftGroup !== rightGroup) return leftGroup - rightGroup;

      if (left.priority !== undefined && right.priority !== undefined && left.priority !== right.priority) {
        return left.priority - right.priority;
      }

      return left.name.localeCompare(right.name, undefined, { sensitivity: 'base' });
    });
  }

}

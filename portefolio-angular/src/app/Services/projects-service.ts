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
    return this.projects;
  }

  getProjectById(id: number) : Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getFeaturedProjects() : Project[] {
    return this.featuredProjectsIds.map(id => this.getProjectById(id)).filter(project => project !== undefined) as Project[];
  }

  getProjectsByFilter(
    category?: Category[],
    repoStatus?: RepoStatus[],
    technologie?: Technology[],
    featuredOnly = false,
  ): Project[] {
    return this.projects.filter(project => {
      const categoryMatch = !category?.length || category.some(cat => project.category.includes(cat));
      const repoStatusMatch = !repoStatus?.length || repoStatus.includes(project.repoStatus);
      const technologyMatch = !technologie?.length || technologie.some(tech => project.technologies.includes(tech));
      const featuredMatch = !featuredOnly || this.featuredProjectsIds.includes(project.id);

      return categoryMatch && repoStatusMatch && technologyMatch && featuredMatch;
    });
  }

}

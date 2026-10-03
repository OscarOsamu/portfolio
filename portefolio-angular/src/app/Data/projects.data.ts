import { Category } from '../Enums/category';
import { RepoStatus } from '../Enums/repo-status';
import { Technology } from '../Enums/technology';
import { Project } from '../Interfaces/project';

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Portefolio Angular',
    descriptionKey: 'project.portfolio.description',
    category: [Category.Frontend],
    technologies: [Technology.Angular, Technology.HTML, Technology.CSS, Technology.TS],
    repoStatus: RepoStatus.Public,
    repoLink: 'https://github.com/OscarOsamu/portfolio',
    demoLink: 'https://oscarosamu.github.io/portfolio/',
  },
];

export const featuredProjectIds: number[] = [1];

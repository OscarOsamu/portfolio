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
    priority: 1,
    technologies: [Technology.Angular, Technology.HTML, Technology.CSS, Technology.TS],
    repoStatus: RepoStatus.Public,
    repoLink: 'https://github.com/OscarOsamu/portfolio',
    demoLink: 'https://oscarosamu.github.io/portfolio/',
  },
  {
    id: 2,
    name: 'MyFind',
    descriptionKey : 'project.myfind.description',
    category: [],
    priority: -1,
    technologies: [Technology.C],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/10/2023'),
    endDate : new Date('02/10/2023')
  },
  {
    id: 3,
    name: 'Malloc',
    descriptionKey : 'project.malloc.description',
    category: [],
    priority: -1,
    technologies: [Technology.C],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/11/2023'),
    endDate : new Date('02/11/2023')
  },
  {
    id: 4,
    name: 'HTTPD',
    descriptionKey : 'project.httpd.description',
    category: [],
    priority: -1,
    technologies: [Technology.C],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/12/2023'),
    endDate : new Date('02/12/2023')
  },
  {
    id: 5,
    name: 'Libzork',
    descriptionKey : 'project.libzork.description',
    priority: -1,
    category: [],
    technologies: [Technology.CPP, Technology.JSON],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/03/2024'),
    endDate : new Date('02/03/2024')
  },
  {
    id: 6,
    name: '42sh',
    descriptionKey : 'project.42sh.description',
    category: [],
    priority: -1,
    technologies: [Technology.C],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/01/2024'),
    endDate : new Date('02/01/2024')
  },
  {
    id: 7,
    name: 'Tiger compiler',
    descriptionKey : 'project.tiger.description',
    category: [Category.Frontend],
    technologies: [Technology.CPP, Technology.Flex, Technology.Bison, Technology.LLVM],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/03/2024'),
    endDate : new Date('02/04/2024')
  },
  {
    id: 8,
    name: 'E/place',
    descriptionKey : 'project.eplace.description',
    category: [],
    technologies: [Technology.JS, Technology.OIDC, Technology.Node],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/05/2024'),
    endDate : new Date('02/05/2024')
  },
  {
    id: 9,
    name: 'Ping',
    descriptionKey : 'project.ping.description',
    category: [Category.Backend, Category.Frontend],
    technologies: [Technology.Java, Technology.React],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/06/2024'),
    endDate : new Date('02/07/2024')
  },
    {
    id: 10,
    name: 'TinyX',
    descriptionKey : 'project.tinyx.description',
    category: [Category.Backend],
    technologies: [Technology.Java, Technology.NoSQL, Technology.K8s, Technology.Docker],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/03/2025'),
    endDate : new Date('02/04/2025')
  },
    {
    id: 11,
    name: 'Python Big Data',
    descriptionKey : 'project.pybd.description',
    category: [Category.Frontend, Category.Data],
    technologies: [ Technology.Python, Technology.Docker, Technology.Bash],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/06/2025'),
    endDate : new Date('02/07/2025')
  },
    {
    id: 12,
    name: 'PFEE',
    descriptionKey : 'project.pfee.description',
    category: [],
    technologies: [Technology.Blender],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/07/2025'),
    endDate : new Date('02/01/2026')
  },
  {
    id: 13,
    name: 'IREN',
    descriptionKey : 'project.iren.description',
    category: [Category.AI],
    priority: 1,
    technologies: [Technology.Python, Technology.Kaggle, Technology.JupyterNotebook],
    repoStatus: RepoStatus.None,
    startDate: new Date('01/07/2025'), // TODO
    endDate : new Date('02/01/2026'),// TODO
    images: [
      'assets/projects/iren/boats.png',
      'assets/projects/iren/confusion_matrix.png',
      'assets/projects/iren/training_graph.png',
      'assets/projects/iren/cosine_decay_graph.png',
    ]
  },
    {
    id: 14,
    name: 'Interops',
    descriptionKey : 'project.interops.description',
    category: [Category.Frontend],
    technologies: [Technology.TS, Technology.Keycloak, Technology.Docker, Technology.Django, Technology.React, Technology.OIDC],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/07/2025'),// TODO
    endDate : new Date('02/01/2026')// TODO
  },
    {
    id: 15,
    name: 'MICCAI',
    descriptionKey : 'project.miccai.description',
    category: [Category.AI],
    priority: 1,
    technologies: [Technology.Python, Technology.JupyterNotebook, Technology.Collab],
    repoStatus: RepoStatus.None,
    startDate: new Date('01/07/2025'),// TODO
    endDate : new Date('02/01/2026'),// TODO
    images: [
      'assets/projects/miccai/patient9_final_pred.png',
      'assets/projects/miccai/patient9_VT.png',
      'assets/projects/miccai/patient9_diff.png',
    ]
  },
    {
    id: 16,
    name: 'LLM Agentic',
    descriptionKey : 'project.agentic.description',
    category: [Category.AI, Category.Frontend, Category.Data],
    technologies: [Technology.Python, Technology.JupyterNotebook, Technology.Docker, Technology.RestAPI],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/12/2025'),
    endDate : new Date('02/01/2026'),
  },{
    id: 17,
    name: 'ERO2',
    descriptionKey : 'project.ero2.description',
    category: [Category.Data],
    technologies: [Technology.Python, Technology.JupyterNotebook],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/12/2025'),// TODO
    endDate : new Date('02/01/2026'),// TODO
  },{
    id: 18,
    name: 'Angular First App Tuto',
    descriptionKey : 'project.angular_first_app_tuto.description',
    images: ['assets/projects/angular_first_app_tuto/angular_first_app_tuto_demo.png'],
    category: [Category.Frontend],
    technologies: [Technology.Angular],
    priority: -1,
    repoStatus: RepoStatus.Public,
    startDate: new Date('01/10/2025'),// TODO
    endDate : new Date('01/10/2026'),// TODO
    repoLink: "https://github.com/OscarOsamu/Angular-first-app-tuto",
  },{
    id: 19,
    name: 'Link Prediction in UniProt Knowledge Graph',
    descriptionKey : 'project.uniprot_project_graph.description',
    category: [Category.Data],
    technologies: [Technology.SPARQL, Technology.Python],
    repoStatus: RepoStatus.Private,
    startDate: new Date('01/12/2025'),// TODO
    endDate : new Date('02/01/2026'),// TODO
  },

];

export const featuredProjectIds: number[] = [7, 10, 11, 12, 14];

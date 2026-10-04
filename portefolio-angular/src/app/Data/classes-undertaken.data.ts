import { ClassStatus } from '../Enums/class-status';
import { Technology } from '../Enums/technology';
import { ClassesUndertaken } from '../Interfaces/classes-undertaken';

export const classesUndertakenData: ClassesUndertaken[] = [
  {
    id: 1,
    nameKey : "classes.piscinec.name",
    descriptionKey: "classes.piscinec.description",
    technologies: [Technology.C ],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: [2, 3, 4]
  },
    {
    id: 2,
    nameKey : "classes.piscinecpp.name",
    descriptionKey: "classes.piscinecpp.description",
    technologies: [Technology.CPP],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: [5]
  },

    {
    id: 3,
    nameKey : "classes.piscinejava.name",
    descriptionKey: "classes.piscinejava.description",
    technologies: [Technology.Java],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 4,
    nameKey : "classes.piscinesql.name",
    descriptionKey: "classes.piscinesql.description",
    technologies: [Technology.SQL],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 5,
    nameKey : "classes.piscinejs.name",
    descriptionKey: "classes.piscinejs.description",
    technologies: [Technology.JS, Technology.JSON],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: [8]
  },
    {
    id: 6,
    nameKey : "classes.interops.name",
    descriptionKey: "classes.interops.description",
    technologies: [],
    classStatus: ClassStatus.HealthMajor,
    formationId: 1,
    relatedProjectsId: [14]
  },
    {
    id: 7,
    nameKey : "classes.normeshealth.name",
    descriptionKey: "classes.normeshealth.description",
    technologies: [],
    classStatus: ClassStatus.HealthMajor,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 8,
    nameKey : "classes.llmhealth.name",
    descriptionKey: "classes.llmhealth.description",
    technologies: [Technology.JupyterNotebook, Technology.Python],
    classStatus: ClassStatus.HealthMajor,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 9,
    nameKey : "classes.codo.name",
    descriptionKey: "classes.codo.description",
    technologies: [Technology.SQL],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 10,
    nameKey : "classes.geopo.name",
    descriptionKey: "classes.geopo.description",
    technologies: [],
    classStatus: ClassStatus.Options,
    formationId: 1,
    relatedProjectsId: []
  },
];

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
    technologies: [],
    classStatus: ClassStatus.Options,
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
    {
    id: 11,
    nameKey : "classes.intellectualpropriety.name",
    descriptionKey: "classes.intellectualpropriety.description",
    technologies: [],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 12,
    nameKey : "classes.lawandrgpd.name",
    descriptionKey: "classes.lawandrgpd.description",
    technologies: [],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 13,
    nameKey : "classes.cryptography.name",
    descriptionKey: "classes.cryptography.description",
    technologies: [],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 14,
    nameKey : "classes.fluxgraph.name",
    descriptionKey: "classes.fluxgraph.description",
    technologies: [],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 15,
    nameKey : "classes.compilation.name",
    descriptionKey: "classes.compilation.description",
    technologies: [],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
    {
    id: 16,
    nameKey : "classes.tyla.name",
    descriptionKey: "classes.tyla.description",
    technologies: [],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
  {
    id: 17,
    nameKey : "classes.verification.name",
    descriptionKey: "classes.verification.description",
    technologies: [Technology.Rocq],
    classStatus: ClassStatus.CoreCursus,
    formationId: 1,
    relatedProjectsId: []
  },
  {
    id: 18,
    nameKey : "classes.agentic.name",
    descriptionKey: "classes.agentic.description",
    technologies: [],
    classStatus: ClassStatus.HealthMajor,
    formationId: 1,
    relatedProjectsId: []
  }
];

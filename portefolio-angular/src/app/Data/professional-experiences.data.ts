import { Category } from '../Enums/category';
import { Languages } from '../Enums/languages';
import { Technology } from '../Enums/technology';
import { ProfessionalExperience } from '../Interfaces/professional-experience';

export const professionalExperiencesData: ProfessionalExperience[] = [
  {
    id: 1,
    titleKey: 'experience.ge.title',
    company: 'GE Healthcare',
    companyLogo: '../../assets/GE-Healthcare-logo.png',
    location: 'Buc, France',
    startDate: new Date('2026-02-08'),
    endDate: new Date('2026-08-08'),
    descriptionKey: 'experience.ge.description',
    category: [Category.Frontend],
    technologies: [Technology.TS, Technology.Python, Technology.K8s],
    languagesSpoken: [Languages.English, Languages.French],
  },
  {
    id: 2,
    titleKey: 'experience.space.title',
    company: 'Space Application Services',
    companyLogo: 'assets/spaceApp-logo.png',
    location: 'Zaventem, Belgium',
    startDate: new Date('01/09/2024'),
    endDate: new Date('01/02/2025'),
    descriptionKey: 'experience.space.description',
    category: [Category.Frontend, Category.Backend, Category.DevOps],
    technologies: [Technology.Docker, Technology.K8s, Technology.Keycloak, Technology.React, Technology.Django],
    languagesSpoken: [Languages.English, Languages.French],
  },
];

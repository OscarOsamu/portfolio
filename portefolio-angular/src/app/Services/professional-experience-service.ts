import { Service } from '@angular/core';
import { ProfessionalExperience } from '../Interfaces/professional-experience';
import { Technology } from '../Enums/technology';
import { Languages } from '../Enums/languages';
import { Category } from '../Enums/category';
@Service()
export class ProfessionalExperienceService {
  professionalExperiences : ProfessionalExperience[] = [
    {
      id: 1,
      title : "FrontEnd Intern",
      company : "GE Healthcare",
      companyLogo : "../../assets/GE-Healthcare-logo.png",
      location : "Buc, France",
      startDate : new Date('2026-02-08'),
      endDate : new Date('2026-08-08'),
      description : "TBD",
      category : [Category.Frontend],
      technologies : [Technology.TS, Technology.Python, Technology.K8s],
      languagesSpoken : [Languages.English, Languages.French]
    },
    {
      id: 2,
      title : "FullStack/DevOps Intern",
      company : "Space Application Services",
      companyLogo : "assets/spaceApp-logo.png",
      location : "Zaventem, Belgium",
      startDate : new Date('01/09/2024'),
      endDate : new Date('01/02/2025'),
      description : 'TBD',
      category : [Category.Frontend, Category.Backend, Category.DevOps],
      technologies : [Technology.Docker, Technology.K8s, Technology.Keycloak, Technology.React, Technology.Django],
      languagesSpoken : [Languages.English, Languages.French]

    }
  ]

  getAllProfessionalExperiences() {
    return this.professionalExperiences;
  }

  getProfessionalExperienceById(id: number) {
    return this.professionalExperiences.find(professionalExperience => professionalExperience.id === id);
  }
}

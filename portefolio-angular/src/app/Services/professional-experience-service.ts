import { Service } from '@angular/core';
import { ProfessionalExperience } from '../Interfaces/professional-experience';
import { Technology } from '../Enums/technology';
import { Languages } from '../Enums/languages';

@Service()
export class ProfessionalExperienceService {
  professionalExperiences : ProfessionalExperience[] = [
    {
      id: 1,
      title : "FrontEnd Intern",
      company : "GE Healthcare",
      location : "Buc, France",
      startDate : new Date('2026-02-08'),
      endDate : new Date('2026-08-08'),
      description : "TBD",
      technologies : [Technology.TS, Technology.Python, Technology.K8s],
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

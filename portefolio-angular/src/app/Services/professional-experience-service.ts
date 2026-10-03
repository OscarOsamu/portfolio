import { Service } from '@angular/core';
import { ProfessionalExperience } from '../Interfaces/professional-experience';
import { professionalExperiencesData } from '../Data/professional-experiences.data';

@Service()
export class ProfessionalExperienceService {
  readonly professionalExperiences: ProfessionalExperience[] = professionalExperiencesData;

  getAllProfessionalExperiences(): ProfessionalExperience[] {
    return this.professionalExperiences;
  }

  getProfessionalExperienceById(id: number): ProfessionalExperience | undefined {
    return this.professionalExperiences.find(professionalExperience => professionalExperience.id === id);
  }
}

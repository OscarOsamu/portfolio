import { Languages } from "../Enums/languages";

export interface ProfessionalExperience {
  id: number,
  company: string,
  position: string,
  startDate: Date,
  endDate?: Date,
  description: string,
  technologies: string[],
  languagesSpoken : Languages[],
}

import { Languages } from "../Enums/languages";

export interface ProfessionalExperience {
  id: number,
  title: string,
  company: string,
  location: string,
  startDate: Date,
  endDate?: Date,
  description: string,
  technologies: string[],
  languagesSpoken : Languages[],
}

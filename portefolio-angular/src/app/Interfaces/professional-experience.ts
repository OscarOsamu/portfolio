import { Languages } from "../Enums/languages";
import { Technology } from "../Enums/technology";
import { Category } from "../Enums/category";

export interface ProfessionalExperience {
  id: number,
  title: string,
  company: string,
  companyLogo: string,
  location: string,
  startDate: Date,
  endDate?: Date,
  description: string,
  technologies: Technology[],
  category: Category[],
  languagesSpoken : Languages[],
}

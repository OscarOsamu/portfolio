import { ClassStatus } from "../Enums/class-status";

export interface ClassesUndertaken {
  id: number,
  nameKey: string,
  descriptionKey: string,
  technologies: string[],
  classStatus?: ClassStatus,
  formationId: number,
  relatedProjectsId: number[]
}

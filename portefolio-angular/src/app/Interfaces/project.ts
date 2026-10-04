import { Category } from "../Enums/category";
import { RepoStatus } from "../Enums/repo-status";
import { Technology } from "../Enums/technology";

export interface Project {
  id: number,
  name : string,
  descriptionKey : string,
  category : Category[],
  technologies : Technology[],
  repoStatus : RepoStatus,
  priority? : number,
  startDate? : Date,
  endDate? : Date,
  repoLink? : string,
  demoLink? : string,
  images? : string[],
}

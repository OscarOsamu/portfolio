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
  repoLink? : string,
  demoLink? : string,
  image? : string,
}

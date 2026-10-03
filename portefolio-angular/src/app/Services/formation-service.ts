import { Service } from '@angular/core';
import { Formation } from '../Interfaces/formation';
import { formationsData } from '../Data/formations.data';

@Service()
export class FormationService {
  readonly formations: Formation[] = formationsData;

  getAllFormations(): Formation[] {
    return this.formations;
  }

  getFormationById(id: number): Formation | undefined {
    return this.formations.find(formation => formation.id === id);
  }
}

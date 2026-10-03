import { Formation } from '../Interfaces/formation';

export const formationsData: Formation[] = [
  {
    id: 1,
    nameKey: 'education.epita.name',
    schoolName: 'EPITA',
    schoolPlace: 'Le Kremlin-Bicêtre, France',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2026-08-30'),
    descriptionKey: 'education.epita.description',
  },
  {
    id: 2,
    nameKey: 'education.cpge.name',
    schoolName: 'Henri Poincaré',
    schoolPlace: 'Nancy, France',
    startDate: new Date('2021-09-01'),
    endDate: new Date('2023-06-30'),
    descriptionKey: 'education.cpge.description',
  },
  {
    id: 3,
    nameKey: 'education.baccalaureate.name',
    schoolName: "Lycée privé de l'Assomption",
    schoolPlace: 'Briey, France',
    startDate: new Date('2018-09-01'),
    endDate: new Date('2021-06-30'),
    descriptionKey: 'education.baccalaureate.description',
  },
];

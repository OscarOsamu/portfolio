import { Service } from '@angular/core';
import { Formation } from '../Interfaces/formation';

@Service()
export class FormationService {
  formations : Formation[] = [
    {
      id: 1,
      name: "Master's degree in engineering (Computer Science)(Healthcare and Artificial Intelligence Major)",
      schoolName: 'EPITA',
      schoolPlace: 'Le Kremlin-Bicêtre, France',
      startDate: new Date('2023-09-01'),
      endDate: new Date('2026-08-30'),
      description: "Focused on software engineering, algorithms, and computer science. The program includes courses in programming languages, data structures, algorithms, databases, and software development methodologies. It also includes a strong emphasis on practical experience through internships and projects. I was able to choose a major in Healthcare and Artificial Intelligence, which allowed me to gain specialized knowledge in these areas. The cursus included courses about interopebility, cybersecurity, and data analysis in healthcare, as well as courses on machine learning, deep learning, and natural language processing.",
    },
    {
      id: 2,
      name: "CPGE PCSI/PC",
      schoolName: "Henri Poincaré",
      schoolPlace: "Nancy, France",
      startDate: new Date('2021-09-01'),
      endDate: new Date('2023-06-30'),
      description: 'Intensive courses in Mathematics, Physics and Chemistry. Preparation for the competitive exams to enter the French engineering schools. Discovered Computer Science and algorithms there and decided to pursue a career in this field.',
    },
    {
      id: 3,
      name: "Baccalauréat Mention Très Bien",
      schoolName: "Lycée privé de l'Assomption",
      schoolPlace: "Briey, France",
      startDate: new Date('2018-09-01'),
      endDate: new Date('2021-06-30'),
      description: 'Options : Mathematics, Physics-Chemistry. With Honors.',
    }
  ]

  getAllFormations() {
    return this.formations;
  }

  getFormationById(id: number) {
    return this.formations.find(formation => formation.id === id);
  }
}

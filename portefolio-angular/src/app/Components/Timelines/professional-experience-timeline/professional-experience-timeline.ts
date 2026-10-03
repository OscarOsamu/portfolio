import { Component, inject } from '@angular/core';
import { ProfessionalExperienceService } from '../../../Services/professional-experience-service';
import { DatePipe } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { LanguageTag } from '../../TagsAndBadges/language-tag/language-tag';
import { TechTag } from '../../TagsAndBadges/tech-tag/tech-tag';
import { Category } from '../../../Enums/category';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TimelineModule, DatePipe, LanguageTag, TranslatePipe],
  selector: 'app-professional-experience-timeline',
  styleUrl: './professional-experience-timeline.sass',
  templateUrl: './professional-experience-timeline.html',
  standalone: true
})

// professional experience will have a card for each experience, with the company logo, the position, the dates, and the description of the experience
// the timeline will be displayed in a vertical line, with the company logo on the left, and the position, dates and description on the right
// on the bottom there will be tags for the technologies used, the category of the experience, and the languages spoken

export class ProfessionalExperienceTimeline {

  categoryLabel(category: Category): string {
    switch (category) {
      case Category.Frontend: return 'category.frontend';
      case Category.Backend: return 'category.backend';
      case Category.DevOps: return 'category.devops';
      case Category.Data: return 'category.data';
      case Category.AI: return 'category.ai';
    }
  }

  private readonly professionalExperienceService = inject(ProfessionalExperienceService);

  professionalExperiences = this.professionalExperienceService
    .getAllProfessionalExperiences()
    .slice()
    .sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );

}

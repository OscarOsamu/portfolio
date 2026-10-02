import { Component, inject } from '@angular/core';
import { ProfessionalExperienceService } from '../../../Services/professional-experience-service';
import { DatePipe } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { LanguageTag } from '../../TagsAndBadges/language-tag/language-tag';
import { TechTag } from '../../TagsAndBadges/tech-tag/tech-tag';

@Component({
  imports: [TimelineModule, DatePipe, LanguageTag],
  selector: 'app-professional-experience-timeline',
  styleUrl: './professional-experience-timeline.sass',
  templateUrl: './professional-experience-timeline.html',
  standalone: true
})

// professional experience will have a card for each experience, with the company logo, the position, the dates, and the description of the experience
// the timeline will be displayed in a vertical line, with the company logo on the left, and the position, dates and description on the right
// on the bottom there will be tags for the technologies used, the category of the experience, and the languages spoken

export class ProfessionalExperienceTimeline {

  private readonly professionalExperienceService = inject(ProfessionalExperienceService);

  professionalExperiences = this.professionalExperienceService
    .getAllProfessionalExperiences()
    .slice()
    .sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );

}

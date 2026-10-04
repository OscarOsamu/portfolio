import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';

import { FormationService } from '../../../Services/formation-service';
import { TranslatePipe } from '@ngx-translate/core';
import { classesUndertakenData } from '../../../Data/classes-undertaken.data';
import { ClassStatus } from '../../../Enums/class-status';

const CLASS_GROUPS = [
  { status: ClassStatus.CoreCursus, labelKey: 'education.classGroups.core' },
  { status: ClassStatus.HealthMajor, labelKey: 'education.classGroups.healthMajor' },
  { status: ClassStatus.Options, labelKey: 'education.classGroups.options' },
] as const;

@Component({
  selector: 'app-formation-timeline',
  standalone: true,
  imports: [
    TimelineModule,
    DatePipe,
    TranslatePipe
  ],
  styleUrl: './formation-timeline.sass',
  template: `
    <p-timeline
      [value]="formations"
      class="formation-timeline"
    >

      <!-- Date -->
      <ng-template #opposite let-formation>

        <div class="text-xs text-surface-500 dark:text-surface-400">
          {{ formation.startDate | date:'yyyy' }}
          -
          {{ formation.endDate | date:'yyyy' }}
        </div>
      </ng-template>

      <!-- Formation -->
      <ng-template #content let-formation>

        <h4 class="text-sm leading-4 font-bold">
          {{ formation.nameKey | translate }}
        </h4>

        <div class="text-xs leading-4 text-surface-500 dark:text-surface-400 font-italic">
          {{ formation.schoolName }}
          -
          {{ formation.schoolPlace }}
        </div>

        <div class="text-sm leading-4 mt-2">
          {{ formation.descriptionKey | translate }}
        </div>

        @if (formation.classes.length) {
          <details class="formation-courses">
            <summary class="formation-courses__summary">
              {{ 'education.coursework' | translate: { count: formation.classes.length } }}
            </summary>
            <div class="formation-courses__groups">
              @for (group of formation.classGroups; track group.status) {
                <section class="formation-courses__group">
                  <h5 class="formation-courses__group-title">{{ group.labelKey | translate }}</h5>
                  <ul class="formation-courses__list">
                    @for (classItem of group.classes; track classItem.id) {
                      <li class="formation-courses__item">
                        <h6 class="formation-courses__name">{{ classItem.nameKey | translate }}</h6>
                        @if (classItem.descriptionKey | translate; as description) {
                          <p class="formation-courses__description">{{ description }}</p>
                        }
                        @if (classItem.technologies.length) {
                          <ul class="formation-courses__technologies">
                            @for (technology of classItem.technologies; track technology) {
                              <li>{{ technology }}</li>
                            }
                          </ul>
                        }
                      </li>
                    }
                  </ul>
                </section>
              }
            </div>
          </details>
        }

      </ng-template>

    </p-timeline>
  `
})
export class FormationTimeline {

  private readonly formationService = inject(FormationService);

  formations = this.formationService
    .getAllFormations()
    .slice()
    .map(formation => {
      const classes = classesUndertakenData.filter(classItem => classItem.formationId === formation.id);
      return {
        ...formation,
        classes,
        classGroups: CLASS_GROUPS
          .map(group => ({
            ...group,
            classes: classes.filter(classItem => classItem.classStatus === group.status),
          }))
          .filter(group => group.classes.length),
      };
    })
    .sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );
}


import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';

import { FormationService } from '../../../Services/formation-service';
import { TranslatePipe } from '@ngx-translate/core';

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

      </ng-template>

    </p-timeline>
  `
})
export class FormationTimeline {

  private readonly formationService = inject(FormationService);

  formations = this.formationService
    .getAllFormations()
    .slice()
    .sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );
}


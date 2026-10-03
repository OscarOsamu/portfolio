import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-projects-tab-content',
  styleUrl: './projects-tab-content.sass',
  templateUrl: './projects-tab-content.html',
})
export class ProjectsTabContent {}

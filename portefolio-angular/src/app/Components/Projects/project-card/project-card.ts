import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-project-card',
  styleUrl: './project-card.sass',
  templateUrl: './project-card.html',
})
export class ProjectCard {}

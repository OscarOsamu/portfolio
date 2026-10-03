import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RepoStatus } from '../../../Enums/repo-status';
import { Project } from '../../../Interfaces/project';

@Component({
  standalone: true,
  imports: [TranslatePipe],
  selector: 'app-project-card',
  styleUrl: './project-card.sass',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly featured = input(false);
  readonly repoStatus = RepoStatus;

  repoStatusLabelKey(): string {
    const labels: Record<RepoStatus, string> = {
      [RepoStatus.None]: 'repo.none',
      [RepoStatus.Private]: 'repo.private',
      [RepoStatus.Public]: 'repo.public',
    };
    return labels[this.project().repoStatus];
  }
}

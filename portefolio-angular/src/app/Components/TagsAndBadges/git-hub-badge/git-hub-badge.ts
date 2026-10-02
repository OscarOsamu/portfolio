import { Component, input } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

import { RepoStatus } from './../../../Enums/repo-status';

@Component({
  selector: 'app-git-hub-badge',
  standalone: true,
  imports: [BadgeModule],
  styleUrl: './git-hub-badge.sass',
  template: `
    <div class="flex justify-center">

      @if (repoLink()) {
        <a
          [href]="repoLink()"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p-badge
            [value]="badgeLabel()"
            [style]="{
              background: badgeColor(),
              color: 'var(--text-color)'
            }"
          />
        </a>
      } @else {
        <p-badge
          [value]="badgeLabel()"
          [style]="{
            background: badgeColor(),
            color: 'var(--text-color)'
          }"
        />
      }

    </div>
  `
})
export class GitHubBadge {

  repo = input.required<RepoStatus>();

  repoLink = input<string>();

  badgeLabel(): string {
    switch (this.repo()) {
      case RepoStatus.Public:
        return 'Public'; TODO :$localize`:@@repo.public:Public`;

      case RepoStatus.Private:
        return 'Private'; //TODO : $localize`:@@repo.private:Private`;

      default:
        return '';
    }
  }

  badgeColor(): string {
    switch (this.repo()) {
      case RepoStatus.Public:
        return 'var(--public-color)';

      case RepoStatus.Private:
        return 'var(--private-color)';

      default:
        return 'transparent';
    }
  }
}


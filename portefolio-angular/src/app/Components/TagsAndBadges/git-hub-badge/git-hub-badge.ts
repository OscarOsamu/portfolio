import { Component, input } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { TranslatePipe } from '@ngx-translate/core';

import { RepoStatus } from './../../../Enums/repo-status';

@Component({
  selector: 'app-git-hub-badge',
  standalone: true,
  imports: [BadgeModule, TranslatePipe],
  styleUrl: './git-hub-badge.sass',
  template: `
    <div class="flex justify-center">
      @if (repoLink()) {
        <a [href]="repoLink()" target="_blank" rel="noopener noreferrer">
          <p-badge
            styleClass="app-tag app-tag--status"
            [value]="badgeLabelKey() | translate"
            [style]="{ '--tag-accent': badgeColor() }"
          />
        </a>
      } @else {
        <p-badge
          [value]="badgeLabelKey() | translate"
          [style]="{
            background: badgeColor(),
            color: 'var(--app-text)',
          }"
        />
      }
    </div>
  `,
})
export class GitHubBadge {
  repo = input.required<RepoStatus>();

  repoLink = input<string>();

  badgeLabelKey(): string {
    switch (this.repo()) {
      case RepoStatus.Public:
        return 'repo.public';

      case RepoStatus.Private:
        return 'repo.private';

      default:
        return '';
    }
  }

  badgeColor(): string {
    switch (this.repo()) {
      case RepoStatus.Public:
        return 'var(--app-status-public)';

      case RepoStatus.Private:
        return 'var(--app-status-private)';

      default:
        return 'transparent';
    }
  }
}

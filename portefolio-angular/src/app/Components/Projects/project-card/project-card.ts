import { Component, HostListener, input, signal } from '@angular/core';
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
  readonly imageIndex = signal(0);
  readonly imageViewerOpen = signal(false);

  changeImage(offset: number): void {
    const imageCount = this.project().images?.length ?? 0;
    if (imageCount > 1) {
      this.imageIndex.update(index => (index + offset + imageCount) % imageCount);
    }
  }

  openImageViewer(): void {
    if (this.project().images?.length) {
      this.imageViewerOpen.set(true);
    }
  }

  closeImageViewer(): void {
    this.imageViewerOpen.set(false);
  }

  @HostListener('document:keydown', ['$event'])
  onViewerKeydown(event: KeyboardEvent): void {
    if (!this.imageViewerOpen()) {
      return;
    }

    if (event.key === 'Escape') {
      this.closeImageViewer();
    } else if (event.key === 'ArrowLeft') {
      this.changeImage(-1);
    } else if (event.key === 'ArrowRight') {
      this.changeImage(1);
    }
  }

  repoStatusLabelKey(): string {
    const labels: Record<RepoStatus, string> = {
      [RepoStatus.None]: 'repo.none',
      [RepoStatus.Private]: 'repo.private',
      [RepoStatus.Public]: 'repo.public',
    };
    return labels[this.project().repoStatus];
  }
}

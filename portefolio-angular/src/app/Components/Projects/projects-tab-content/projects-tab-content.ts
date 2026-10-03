import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Category } from '../../../Enums/category';
import { RepoStatus } from '../../../Enums/repo-status';
import { Technology } from '../../../Enums/technology';
import { ProjectCard } from '../project-card/project-card';
import { ProjectsService } from '../../../Services/projects-service';
import { MultiSelectFilter, MultiSelectOption } from '../multi-select-filter/multi-select-filter';

@Component({
  imports: [MultiSelectFilter, ProjectCard, TranslatePipe],
  selector: 'app-projects-tab-content',
  styleUrl: './projects-tab-content.sass',
  templateUrl: './projects-tab-content.html',
})
export class ProjectsTabContent {
  private readonly projectsService = inject(ProjectsService);
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);
  readonly activeLanguage = signal('en');
  readonly categories = computed<MultiSelectOption[]>(() => {
    const language = this.activeLanguage();
    return Object.values(Category)
      .map(value => ({ value, label: this.translate.instant(`category.${value.toLowerCase()}`) }))
      .sort((left, right) => left.label.localeCompare(right.label, language, { sensitivity: 'base' }));
  });
  readonly technologies = computed<MultiSelectOption[]>(() => {
    const language = this.activeLanguage();
    return Object.values(Technology)
      .map(value => ({ value, label: value }))
      .sort((left, right) => left.label.localeCompare(right.label, language, { sensitivity: 'base' }));
  });
  private readonly repositoryStatusOptions = [
    { value: RepoStatus.None, labelKey: 'repo.none' },
    { value: RepoStatus.Private, labelKey: 'repo.private' },
    { value: RepoStatus.Public, labelKey: 'repo.public' },
  ];
  readonly repositoryStatuses = computed<MultiSelectOption[]>(() => {
    const language = this.activeLanguage();
    return this.repositoryStatusOptions
      .map(status => ({ value: String(status.value), label: this.translate.instant(status.labelKey) }))
      .sort((left, right) => left.label.localeCompare(right.label, language, { sensitivity: 'base' }));
  });
  readonly featuredProjectIds = new Set(this.projectsService.featuredProjectsIds);

  readonly selectedCategory = signal<Category[]>([]);
  readonly selectedTechnology = signal<Technology[]>([]);
  readonly selectedRepoStatus = signal<RepoStatus[]>([]);
  readonly featuredOnly = signal(true);

  constructor() {
    const languageSubscription = this.translate.onLangChange
      .subscribe(({ lang }) => this.activeLanguage.set(lang));
    this.destroyRef.onDestroy(() => languageSubscription.unsubscribe());
  }

  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    const technology = this.selectedTechnology();
    const repoStatus = this.selectedRepoStatus();

    return this.projectsService.getProjectsByFilter(
      category.length ? category : undefined,
      repoStatus.length ? repoStatus : undefined,
      technology.length ? technology : undefined,
      this.featuredOnly(),
    );
  });

  onCategoryChange(values: string[]): void {
    this.selectedCategory.set(values as Category[]);
  }

  onTechnologyChange(values: string[]): void {
    this.selectedTechnology.set(values as Technology[]);
  }

  onRepoStatusChange(values: string[]): void {
    this.selectedRepoStatus.set(values.map(Number) as RepoStatus[]);
  }

  selectedRepoStatusValues(): string[] {
    return this.selectedRepoStatus().map(status => String(status));
  }

  onFeaturedChange(event: Event): void {
    this.featuredOnly.set((event.target as HTMLInputElement).checked);
  }

  clearFilters(): void {
    this.selectedCategory.set([]);
    this.selectedTechnology.set([]);
    this.selectedRepoStatus.set([]);
    this.featuredOnly.set(false);
  }
}

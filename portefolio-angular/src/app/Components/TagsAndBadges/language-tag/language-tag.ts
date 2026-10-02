import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';

import { Languages } from './../../../Enums/languages';

@Component({
  selector: 'app-language-tag',
  standalone: true,
  imports: [TagModule],
  styleUrl: './language-tag.sass',
  template: `
    <div class="flex justify-center">
      <p-tag
        class="language-tag"
      >
        <img [src]="imagePath()" [alt]="languageLabel()" class="language-flag" />

        <span class="text-base">
          {{ languageLabel() }}
        </span>
      </p-tag>
    </div>
  `,
})
export class LanguageTag {
  language = input.required<Languages>();

  private readonly languageData: Record<
    Languages,
    {
      imagePath: string;
      label: string;
    }
  > = {
    [Languages.French]: {
      imagePath: 'assets/fr-round-64.png',
      label: 'French', // TODO: $localize`:@@language.french:French`
    },

    [Languages.English]: {
      imagePath: 'assets/uk-round-64.png',
      label: 'English', // TODO /$localize`:@@language.english:English`
    },

    [Languages.Italian]: {
      imagePath: 'assets/it-round-64.png',
      label: 'Italian', // TODO : $localize`:@@language.italian:Italian`
    },
  };

  imagePath(): string {
    return this.languageData[this.language()].imagePath;
  }

  languageLabel(): string {
    return this.languageData[this.language()].label;
  }
}

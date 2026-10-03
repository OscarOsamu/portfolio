import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { TranslatePipe } from '@ngx-translate/core';

import { Languages } from './../../../Enums/languages';

@Component({
  selector: 'app-language-tag',
  standalone: true,
  imports: [TagModule, TranslatePipe],
  styleUrl: './language-tag.sass',
  template: `
    <div class="flex justify-center">
      <p-tag
        class="app-tag app-tag--language"
      >
        <img [src]="imagePath()" [alt]="languageLabelKey() | translate" class="app-tag__icon" />

        <span class="text-base">
          {{ languageLabelKey() | translate }}
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
      labelKey: string;
    }
  > = {
    [Languages.French]: {
      imagePath: 'assets/fr-round-64.png',
      labelKey: 'language.french',
    },

    [Languages.English]: {
      imagePath: 'assets/uk-round-64.png',
      labelKey: 'language.english',
    },

    [Languages.Italian]: {
      imagePath: 'assets/it-round-64.png',
      labelKey: 'language.italian',
    },
  };

  imagePath(): string {
    return this.languageData[this.language()].imagePath;
  }

  languageLabelKey(): string {
    return this.languageData[this.language()].labelKey;
  }
}

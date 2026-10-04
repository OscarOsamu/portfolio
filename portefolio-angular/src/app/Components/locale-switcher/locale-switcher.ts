import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, PLATFORM_ID, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageTag } from '../TagsAndBadges/language-tag/language-tag';
import { Languages } from '../../Enums/languages';
import { Moon } from '@primeicons/angular/moon';
import { Sun } from '@primeicons/angular/sun';

interface LocaleOption {
  code: string;
  language: Languages;
}

@Component({
  selector: 'app-locale-switcher',
  standalone: true,
  imports: [LanguageTag, TranslatePipe, Moon, Sun],
  templateUrl: './locale-switcher.html',
  styleUrl: './locale-switcher.sass',
})
export class LocaleSwitcher {
  readonly locales: LocaleOption[] = [
    { code: 'en', language: Languages.English },
    { code: 'fr', language: Languages.French },
    //{ code: 'it', language: Languages.Italian },
  ];

  readonly currentLocale = signal('en');
  readonly currentLanguage = computed(
    () => this.locales.find(locale => locale.code === this.currentLocale()) ?? this.locales[0],
  );
  readonly isMenuOpen = signal(false);
  readonly isDarkMode = signal(false);

  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio.locale';
  private readonly themeStorageKey = 'portfolio.theme';

  constructor() {
    const savedLocale = this.readSavedLocale();
    const initialLocale = this.locales.some(locale => locale.code === savedLocale)
      ? savedLocale!
      : 'en';

    this.currentLocale.set(initialLocale);
    this.document.documentElement.lang = initialLocale;
    this.translate.use(initialLocale).subscribe();
    this.setDarkMode(this.readSavedTheme() === 'dark', false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(isOpen => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.setDarkMode(!this.isDarkMode(), true);
  }

  selectLocale(locale: LocaleOption): void {
    this.translate.use(locale.code).subscribe(() => {
      this.currentLocale.set(locale.code);
      this.document.documentElement.lang = locale.code;
      this.isMenuOpen.set(false);

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.storageKey, locale.code);
      }
    });
  }

  private readSavedLocale(): string | null {
    return isPlatformBrowser(this.platformId)
      ? localStorage.getItem(this.storageKey)
      : null;
  }

  private setDarkMode(isDarkMode: boolean, persist: boolean): void {
    this.isDarkMode.set(isDarkMode);
    this.document.documentElement.classList.toggle('my-app-dark', isDarkMode);
    this.document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';

    if (persist && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.themeStorageKey, isDarkMode ? 'dark' : 'light');
    }
  }

  private readSavedTheme(): string | null {
    return isPlatformBrowser(this.platformId)
      ? localStorage.getItem(this.themeStorageKey)
      : null;
  }
}

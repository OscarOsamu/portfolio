import { DOCUMENT } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Phone } from '@primeicons/angular/phone';
import { Linkedin } from '@primeicons/angular/linkedin';
import { Envelope } from '@primeicons/angular/envelope';
import { ButtonModule } from 'primeng/button';
import { Download } from '@primeicons/angular/download';

@Component({
  imports: [TranslatePipe, Phone, Linkedin, Envelope, ButtonModule, Download],
  selector: 'app-contact-infos',
  styleUrl: './contact-infos.sass',
  templateUrl: './contact-infos.html',
})
export class ContactInfos {
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly activeLanguage = signal(inject(DOCUMENT).documentElement.lang || 'en');

  readonly cvUrl = computed(() => {
    const locale = this.activeLanguage() === 'fr' ? 'FR' : 'ENG';
    return `/assets/CV/Oscar_Divry_CV_${locale}.pdf`;
  });

  constructor() {
    const languageSubscription = this.translate.onLangChange
      .subscribe(({ lang }) => this.activeLanguage.set(lang));
    this.destroyRef.onDestroy(() => languageSubscription.unsubscribe());
  }
}

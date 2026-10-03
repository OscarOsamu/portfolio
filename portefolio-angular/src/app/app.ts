import { Component, signal } from '@angular/core';
import { MainPage } from './Components/main-page/main-page';
import { LocaleSwitcher } from './Components/locale-switcher/locale-switcher';

@Component({
  imports: [MainPage, LocaleSwitcher],
  selector: 'app-root',
  styleUrl: './app.sass',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portefolio-angular');
}

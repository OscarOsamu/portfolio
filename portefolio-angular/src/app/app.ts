import { Component, signal } from '@angular/core';
import { MainPage } from './Components/main-page/main-page';

@Component({
  imports: [MainPage],
  selector: 'app-root',
  styleUrl: './app.sass',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portefolio-angular');
}

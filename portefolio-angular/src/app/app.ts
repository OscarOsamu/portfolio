import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './Components/main-page/main-page';

@Component({
  imports: [RouterOutlet, MainPage],
  selector: 'app-root',
  styleUrl: './app.sass',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portefolio-angular');
}

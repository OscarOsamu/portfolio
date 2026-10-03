import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {Tabs} from '../Projects/projects-tab-content/tabs/tabs';
import { LocaleSwitcher } from '../locale-switcher/locale-switcher';

@Component({
  imports: [Tabs, TranslatePipe, LocaleSwitcher],
  selector: 'app-main-page',
  styleUrl: './main-page.sass',
  templateUrl: './main-page.html',
})
export class MainPage {

}

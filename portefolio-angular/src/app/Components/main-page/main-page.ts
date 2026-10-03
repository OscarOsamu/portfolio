import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {Tabs} from '../tabs/tabs';

@Component({
  imports: [Tabs, TranslatePipe],
  selector: 'app-main-page',
  styleUrl: './main-page.sass',
  templateUrl: './main-page.html',
})
export class MainPage {

}

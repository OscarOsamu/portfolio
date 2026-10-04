import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Phone } from '@primeicons/angular/phone';
import { Linkedin } from '@primeicons/angular/linkedin';
import { Envelope } from '@primeicons/angular/envelope';

@Component({
  imports: [TranslatePipe, Phone, Linkedin, Envelope],
  selector: 'app-contact-infos',
  styleUrl: './contact-infos.sass',
  templateUrl: './contact-infos.html',
})
export class ContactInfos {}

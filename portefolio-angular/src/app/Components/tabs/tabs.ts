import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { ProfessionalExperienceTimeline } from '../Timelines/professional-experience-timeline/professional-experience-timeline';
import { NgComponentOutlet } from '@angular/common';
import { FormationTimeline } from '../Timelines/formation-timeline/formation-timeline';
import { ContactInfos } from '../contact-infos/contact-infos';
import { ProjectsTabContent } from '../Projects/projects-tab-content/projects-tab-content';


@Component({
    template: `
        <p-tabs value="tab1">
            <p-tablist>
                @for (tab of tabs; track tab.id) {
                    <p-tab [value]="tab.id">{{ tab.title }}</p-tab>
                }
            </p-tablist>
            <p-tabpanels>
                @for (tab of tabs; track tab.id) {
                    <p-tabpanel [value]="tab.id">
                        <h2 class="text-lg font-bold" i18n>{{ tab.title }}</h2>
                        <h3 class="text-surface-500 mt-1" i18n>{{ tab.content }}</h3>
                             <ng-container
                                *ngComponentOutlet="tab.component">
                            </ng-container>
                    </p-tabpanel>
                }
            </p-tabpanels>
        </p-tabs>
    `,
    standalone: true,
    imports: [TabsModule, NgComponentOutlet],
    selector: 'app-tabs',
})
export class Tabs{
    tabs = [
        { id: 'tab1', title: 'Formation', content: 'Here the list of the schools I attended :' , component: FormationTimeline},
        { id: 'tab2', title: 'Professional Experience', content: '', component: ProfessionalExperienceTimeline},
        { id: 'tab3', title: 'Projects', content: 'Here are some of my personnal and school projects, feel free to browse', component: ProjectsTabContent},
        { id: 'tab4', title: 'Contact Me', content: 'Find here my contacts info', component: ContactInfos},
    ];
}

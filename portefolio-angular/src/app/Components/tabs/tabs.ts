import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { ProfessionalExperienceTimeline } from '../Timelines/professional-experience-timeline/professional-experience-timeline';
import { NgComponentOutlet } from '@angular/common';
import { FormationTimeline } from '../Timelines/formation-timeline/formation-timeline';
import { ContactInfos } from '../contact-infos/contact-infos';
import { ProjectsTabContent } from '../Projects/projects-tab-content/projects-tab-content';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
    template: `
        <p-tabs value="tab1">
            <p-tablist>
                @for (tab of tabs; track tab.id) {
                        <p-tab [value]="tab.id">{{ tab.titleKey | translate }}</p-tab>
                }
            </p-tablist>
            <p-tabpanels>
                @for (tab of tabs; track tab.id) {
                    <p-tabpanel [value]="tab.id">
                        <h2 class="text-lg font-bold">{{ tab.titleKey | translate }}</h2>
                        @if (tab.contentKey) {
                            <h3 class="text-surface-500 mt-1">{{ tab.contentKey | translate }}</h3>
                        }
                             <ng-container
                                *ngComponentOutlet="tab.component">
                            </ng-container>
                    </p-tabpanel>
                }
            </p-tabpanels>
        </p-tabs>
    `,
    standalone: true,
    imports: [TabsModule, NgComponentOutlet, TranslatePipe],
    selector: 'app-tabs',
})
export class Tabs{
    tabs = [
        { id: 'tab1', titleKey: 'tabs.education', contentKey: 'tabs.educationDescription', component: FormationTimeline},
        { id: 'tab2', titleKey: 'tabs.experience', contentKey: '', component: ProfessionalExperienceTimeline},
        { id: 'tab3', titleKey: 'tabs.projects', contentKey: 'tabs.projectsDescription', component: ProjectsTabContent},
        { id: 'tab4', titleKey: 'tabs.contact', contentKey: 'tabs.contactDescription', component: ContactInfos},
    ];
}

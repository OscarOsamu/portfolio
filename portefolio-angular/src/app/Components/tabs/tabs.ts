import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';


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
                        <h2 class="text-lg font-bold">{{ tab.title }}</h2>
                        <p class="text-surface-500 mt-1">{{ tab.content }}</p>
                    </p-tabpanel>
                }
            </p-tabpanels>
        </p-tabs>
    `,
    standalone: true,
    imports: [TabsModule],
    selector: 'app-tabs',
})
export class Tabs{
    tabs = [
        { id: 'tab1', title: 'Formation', content: 'TBD Formation Timeline' },
        { id: 'tab2', title: 'Professional Experience', content: 'TBD XP Pro Timeline' },
        { id: 'tab3', title: 'Projects', content: 'TBD Projects' },
        { id: 'tab4', title: 'Contact Me', content: 'TBD Find here my contacts info'}
    ];
}
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsTabContent } from './projects-tab-content';

describe('ProjectsTabContent', () => {
  let component: ProjectsTabContent;
  let fixture: ComponentFixture<ProjectsTabContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTabContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsTabContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

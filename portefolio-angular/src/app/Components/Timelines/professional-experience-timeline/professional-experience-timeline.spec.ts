import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessionalExperienceTimeline } from './professional-experience-timeline';

describe('ProfessionalExperienceTimeline', () => {
  let component: ProfessionalExperienceTimeline;
  let fixture: ComponentFixture<ProfessionalExperienceTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalExperienceTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperienceTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormationTimeline } from './formation-timeline';

describe('FormationTimeline', () => {
  let component: FormationTimeline;
  let fixture: ComponentFixture<FormationTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(FormationTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

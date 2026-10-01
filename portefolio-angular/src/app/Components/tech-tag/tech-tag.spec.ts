import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechTag } from './tech-tag';

describe('TechTag', () => {
  let component: TechTag;
  let fixture: ComponentFixture<TechTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechTag],
    }).compileComponents();

    fixture = TestBed.createComponent(TechTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

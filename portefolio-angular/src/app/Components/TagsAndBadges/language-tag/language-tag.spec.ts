import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageTag } from './language-tag';

describe('LanguageTag', () => {
  let component: LanguageTag;
  let fixture: ComponentFixture<LanguageTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageTag],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

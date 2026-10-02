import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactInfos } from './contact-infos';

describe('ContactInfos', () => {
  let component: ContactInfos;
  let fixture: ComponentFixture<ContactInfos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInfos],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactInfos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

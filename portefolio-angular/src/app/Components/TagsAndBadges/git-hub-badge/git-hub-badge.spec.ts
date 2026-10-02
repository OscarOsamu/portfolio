import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GitHubBadge } from './git-hub-badge';

describe('GitHubBadge', () => {
  let component: GitHubBadge;
  let fixture: ComponentFixture<GitHubBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHubBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(GitHubBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

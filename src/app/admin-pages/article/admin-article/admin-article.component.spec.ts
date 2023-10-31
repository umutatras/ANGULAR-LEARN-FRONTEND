import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleComponent } from './admin-article.component';

describe('AdminArticleComponent', () => {
  let component: AdminArticleComponent;
  let fixture: ComponentFixture<AdminArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArticleComponent]
    });
    fixture = TestBed.createComponent(AdminArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
